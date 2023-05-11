import { ScrollView, StyleSheet } from "react-native";

import LogListItem from "./LogListItem";
import { formatDate, formatDateTime } from "../../api/DateTime";

export default function Services(props) {
  const buildLogs = (logs) => {
    return logs
      .slice()
      .reverse()
      .map((element) => {
        if (
          props.serviceFilter &&
          element.node.service.identifier !== props.serviceFilter
        ) {
          return;
        }
        const elementDate = new Date(element.node.time);
        if (
          props.dateFilter &&
          formatDate(elementDate) !== formatDate(props.dateFilter)
        ) {
          return;
        }
        const dateTime = new Date(element.node.time);
        return (
          <LogListItem
            data={element.node.data}
            key={element.node.id}
            name={element.node.service.name}
            time={formatDateTime(dateTime)}
            serviceType={element.node.service.identifier}
          />
        );
      });
  };
  return (
    <ScrollView refreshControl={props.refreshControl} style={styles.logList}>
      {buildLogs(props.logs)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logList: {
    height: "80%",
  },
});
