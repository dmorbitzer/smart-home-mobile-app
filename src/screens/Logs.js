import { useState } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

import { GetLogs } from "../api/Logs";
import LogFilter from "../components/logs/LogFilter";
import LogList from "../components/logs/LogList";
import Loading from "../components/util/Loading";

export default function Logs() {
  const [filter, setFilter] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getData = GetLogs();

  const changeFilter = (newFilter) => {
    if (newFilter === "_") {
      setFilter(null);
    } else {
      setFilter(newFilter);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getData.refetch();
    setRefreshing(false);
  };

  if (getData.loading) {
    return <Loading />;
  }

  if (getData.error) {
    return <Text>Error</Text>;
  }

  return (
    <View style={styles.logsView}>

        <LogList
            logs={getData.data.logs.edges}
            filter={filter}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}/>
        <LogFilter changeFilter={(newFilter) => changeFilter(newFilter)} />
    </View>
  );
}

const styles = StyleSheet.create({
  logsView: {
    height: "100%",
  },
});
