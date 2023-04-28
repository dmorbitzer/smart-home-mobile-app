import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import IconButton from "../util/IconButton";

export default function LogFilterModal(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Kein Filter", value: "_" },
    { label: "Katzenfütterung", value: "cat_feeding" },
    { label: "Katzenerkennung", value: "cat_tracking" },
  ]);

  const onCloseModal = () => {
    props.closeModalHandler(value);
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={props.showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Filter:</Text>
            <View style={styles.dropdownView}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Filter auswählen"
              />
            </View>
            <IconButton title="ok" func={() => onCloseModal()} type="primary" />
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
    height: "60%",
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  dropdownView: {
    height: "50%",
  },
});
