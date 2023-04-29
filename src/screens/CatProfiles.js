import { Stack } from "@react-native-material/core";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import { GetCatProfiles } from "../api/CatProfiles";
import DeleteCatFeedbackModal from "../components/cat-profiles/DeleteCatFeedbackModal";
import Profiles from "../components/cat-profiles/Profiles";
import Loading from "../components/util/Loading";

export default function CatProfiles({ route, navigation }) {
  const [deletedId, setDeletedId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const getData = GetCatProfiles();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const onRefresh = () => {
    setRefreshing(true);
    getData.refetch();
    setRefreshing(false);
  };

  if (route.params) {
    if (route.params.id && !showModal) {
      setDeletedId(route.params.id);
      openModal();
      // onRefresh ausführen, wenn User im Modal auf OK klickt
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
      <DeleteCatFeedbackModal
        deleteId={deletedId}
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  catProfileList: {
    height: "100%",
  },
});
