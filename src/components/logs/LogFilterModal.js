import { useState } from "react";
import { Modal, StyleSheet, Text, View, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Switch, Checkbox } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

import IconButton from "../util/IconButton";

export default function LogFilterModal(props) {
  const [open, setOpen] = useState(false);
  const [serviceFilter, setServiceFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);
  const [useDateFilter, setUseDateFilter] = useState(false);
  const [items, setItems] = useState([
    { label: "Kein Filter", value: "_" },
    { label: "Katzenfütterung", value: "cat_feeding" },
    { label: "Katzenerkennung", value: "cat_tracking" },
  ]);

  const onCloseModal = () => {
    let date = null;
    if (useDateFilter) {
      date = dateFilter;
    }
    props.closeModalHandler(serviceFilter, date);
  };

  let useDateInput = (
    <Checkbox.Item
      label="Nach Datum Filtern"
      status={useDateFilter ? "checked" : "unchecked"}
      onPress={() => setUseDateFilter(!useDateFilter)}
    />
  );

  if (Platform.OS === "ios") {
    useDateInput = (
      <View style={styles.switchContainer}>
        <Text>Nach Datum Filtern</Text>
        <Switch
          value={useDateFilter}
          onValueChange={() => setUseDateFilter(!useDateFilter)}
          style={styles.switch}
        />
      </View>
    );
  }
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={props.showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Filter:</Text>
            <View style={styles.dropdownView}>
              <DropDownPicker
                open={open}
                value={serviceFilter}
                items={items}
                setOpen={setOpen}
                setValue={setServiceFilter}
                setItems={setItems}
                placeholder="Filter auswählen"
                containerStyle={styles.dropdownContainer}
              />
            </View>
            <View style={styles.datePickerView}>
              <DatePickerInput
                locale="de"
                label={null}
                value={dateFilter}
                onChange={(d) => setDateFilter(d)}
                inputMode="start"
                color="red"
                inputEnabled={false}
              />
              {useDateInput}
              <IconButton
                title="ok"
                func={() => onCloseModal()}
                type="primary"
              />
            </View>
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
    height: "20%",
    zIndex: 20,
  },
  datePickerView: {
    marginTop: 5,
    height: 50,
  },
  dropdownContainer: {
    width: 200,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    marginLeft: 10,
  },
});
