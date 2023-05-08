import { Stack } from "@react-native-material/core";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import { useDeleteCatProfile, useGetCatDetails } from "../api/CatProfiles";
import Details from "../components/cat-profiles/Details";
import Loading from "../components/util/Loading";

export default function CatDetails({ route, navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const getData = useGetCatDetails(route.params.catId);
  const deleteCat = useDeleteCatProfile();
  const onDeleteCat = (catId) => {
    deleteCat(catId);
  };
  const onRefresh = () => {
    setRefreshing(true);
    getData.refetch();
    setRefreshing(false);
  };

  if (getData.loading) {
    return <Loading />;
  }

  return (
    <Stack m={4} spacing={2}>
      <ScrollView
        style={styles.catDetailStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Details
          delteCat={onDeleteCat}
          data={getData.data}
          navigation={navigation}
        />
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  catDetailStyle: {
    height: "100%",
  },
});
