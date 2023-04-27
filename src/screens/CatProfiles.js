import { Stack } from "@react-native-material/core";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import { GetCatProfiles } from "../api/CatProfiles";
import Profiles from "../components/cat-profiles/Profiles";
import Loading from "../components/util/Loading";

export default function CatProfiles({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const getData = GetCatProfiles();

  const onRefresh = () => {
    setRefreshing(true);
    getData.refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  if (getData.loading) {
    return <Loading />;
  }
  return (
    <Stack m={4} spacing={2}>
      <ScrollView style={styles.catProfileList}>
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
          <Profiles data={getData.data} navigation={navigation} />
        </RefreshControl>
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  catProfileList: {
    height: "90%",
  },
});
