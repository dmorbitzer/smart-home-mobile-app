import { ScrollView, StyleSheet } from "react-native";

import LogListItem from "./LogListItem";

export default function Services(props) {
  const buildLogs = (logs) => {
    return logs.map((element) => {
      if (props.filter && element.node.service.identifier !== props.filter) {
        return;
      }
      return (
        <LogListItem
          data={element.node.data}
          key={element.node.id}
          name={element.node.service.name}
          time={element.node.time}
          serviceType={element.node.service.identifier}
        />
      );
    });
  };
  return (
    <ScrollView style={styles.logList}>{buildLogs(props.logs)}</ScrollView>
  );
}

const styles = StyleSheet.create({
  logList: {
    height: "80%",
  },
});
