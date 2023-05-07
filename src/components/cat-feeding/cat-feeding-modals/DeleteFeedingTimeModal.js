import { HStack } from "@react-native-material/core";
import { Modal, StyleSheet, Text, View } from "react-native";

import IconButton from "../../util/IconButton";

export default function DeleteFeedingTimeModal(props) {
  const chooseDeleteFeedingTime = (choose) => {
    if (choose) {
      props.deleteFeedingTime(props.feedingTimeId);
      props.closeModalHandler();
    } else {
      props.closeModalHandler();
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={props.showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>
              Sind Sie sich sicher, dass Sie diese Fütterungszeit unwiderruflich
              löschen wollen?
            </Text>
            <HStack>
              <IconButton
                title="Nein"
                func={() => chooseDeleteFeedingTime(false)}
                type="primary"
              />
              <IconButton
                title="Ja"
                func={() => chooseDeleteFeedingTime(true)}
                variant="outlined"
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
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
});
