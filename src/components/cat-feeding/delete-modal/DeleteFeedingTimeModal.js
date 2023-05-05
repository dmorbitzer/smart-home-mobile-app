import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

import DeleteFeedingTimeAsk from "./DeleteFeedingTimeAsk";
import DeleteFeedingTimeFeedback from "./DeleteFeedingTimeFeedback";

export default function DeleteFeedingTimeModal(props) {
  const onCloseModal = () => {
    props.closeModalHandler(true);
  };
  const chooseDeleteFeedingTime = (choose) => {
    if (choose) {
      console.log("Modal:", props.feedingTimeId);
      props.deleteFeedingTime(props.feedingTimeId);
      setSwitchContent(
        <DeleteFeedingTimeFeedback
          onCloseModal={onCloseModal}
          centeredView={styles.centeredView}
          modalView={styles.modalView}
          modalHeader={styles.modalHeader}
        />
      );
    } else {
      props.closeModalHandler(true);
    }
  };
  const [switchContent, setSwitchContent] = useState(
    <DeleteFeedingTimeAsk
      chooseDeleteFeedingTime={chooseDeleteFeedingTime}
      centeredView={styles.centeredView}
      modalView={styles.modalView}
      modalHeader={styles.modalHeader}
    />
  );
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={props.showModal}>
        {switchContent}
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
