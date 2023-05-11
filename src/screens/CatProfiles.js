import { Stack } from "@react-native-material/core";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import { useGetCatProfiles } from "../api/CatProfiles";
import Profiles from "../components/cat-profiles/Profiles";
import Loading from "../components/util/Loading";

export default function CatProfiles({ route, navigation }) {
  if (!global.jwt) {
    navigation.navigate("Login");
  }
  const [refreshing, setRefreshing] = useState(false);
  const getData = useGetCatProfiles();

  const onRefresh = () => {
    setRefreshing(true);
    getData.refetch();
    setRefreshing(false);
  };

  if (route.params && route.params.refresh) {
    onRefresh();
    route.params.refresh = false;
  }

  if (getData.loading) {
    return <Loading />;
  }
  return (
    <Stack m={4} spacing={2}>
      <ScrollView
        style={styles.catProfileList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Profiles
          data={getData.data.cats.edges}
          navigation={navigation}
          type="profile"
        />
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  catProfileList: {
    height: "100%",
  },
});
