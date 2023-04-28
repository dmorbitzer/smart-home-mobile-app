import { Dialog, Stack } from "@react-native-material/core";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import { GetCatProfiles } from "../api/CatProfiles";
import DeleteCatConfirmation from "../components/cat-profiles/DeleteCatConfirmation";
import Profiles from "../components/cat-profiles/Profiles";
import Loading from "../components/util/Loading";

export default function CatProfiles({ route, navigation }) {
  const [visible, setVisible] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const getData = GetCatProfiles();

  const onRefresh = () => {
    setRefreshing(true);
    getData.refetch();
    setRefreshing(false);
  };

  if (route.params) {
    if (route.params.id && !visible) {
      setDeletedId(route.params.id);
      setVisible(true);
      route.params.id = undefined;
    }
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
        <Profiles data={getData.data.cats.edges} navigation={navigation} />
      </ScrollView>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DeleteCatConfirmation
          id={deletedId}
          handleSetVisible={setVisible}
          navigation={navigation}
        />
      </Dialog>
    </Stack>
  );
}

const styles = StyleSheet.create({
  catProfileList: {
    height: "100%",
  },
});
