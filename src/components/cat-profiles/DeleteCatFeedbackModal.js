import { HStack } from "@react-native-material/core";
import { Modal, StyleSheet, Text, View } from "react-native";

import { DeleteCatProfile } from "../../api/CatProfiles";
import IconButton from "../util/IconButton";
import Loading from "../util/Loading";

export default function DeleteCatFeedbackModal(props) {
  if (props.deleteId) {
    const getData = DeleteCatProfile(props.deleteId);
    if (getData.loading) {
      return <Loading />;
    }
  }
  const onCloseModal = (choose) => {
    props.closeModalHandler(choose);
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={props.showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>
              Das Profil wurde erfolgreich gelöscht.
            </Text>
            <HStack>
              <IconButton
                title="Ok"
                func={() => onCloseModal()}
                type="primary"
              />
            </HStack>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    height: "30%",
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
});
