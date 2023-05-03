import { useState } from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import IconButton from "../../util/IconButton";

export default function ChooseFoodModal(props) {
  const [open, setOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const foodList = props.foodData.map((element) => {
    return { label: element.node.name, value: element.node.id };
  });
  const onFeedModal = () => {
    if (selectedFood) {
      props.closeModalHandler(selectedFood);
    }
  };
  const onCancelModal = () => {
    props.closeModalHandler(null);
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={props.showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>
              Welches Futter wollen Sie füttern?
            </Text>
            <DropDownPicker
              open={open}
              value={selectedFood}
              items={foodList}
              setOpen={setOpen}
              setValue={setSelectedFood}
              placeholder="Filter auswählen"
              containerStyle={styles.dropdownContainer}
            />
            <IconButton
              disabled={!selectedFood}
              title="Füttern!"
              func={() => onFeedModal()}
              type="primary"
            />
            <IconButton
              title="Abbrechen"
              func={() => onCancelModal()}
              type="secondary"
            />
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
  dropdownContainer: {
    width: 200,
  },
});
