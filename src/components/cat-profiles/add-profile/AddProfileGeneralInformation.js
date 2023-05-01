import { TextInput, Text } from "@react-native-material/core";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useTheme } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

export default function AddProfileGeneralInformation() {
  const theme = useTheme();
  const [sex, setSex] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Weiblich", value: "female" },
    { label: "Männlich", value: "male" },
  ]);
  const [birthdate, setBirthdate] = useState(null);

  const handleChange = (e) => {
    setSex(e.target.value);
  };

  return (
    <View>
      <View style={styles.headerTextsView}>
        <Text variant="h6">Allgemeine Informationen</Text>
      </View>
      <View style={styles.nameInputView}>
        <TextInput
          color={theme.colors.primary}
          inputContainerStyle={{ backgroundColor: theme.colors.background }}
          label="Tiername"
        />
      </View>
      <View style={styles.datePickerView}>
        <Text style={styles.datePickerLabel}>Geburtsdatum</Text>
        <DatePickerInput
          locale="de"
          label={null}
          value={birthdate}
          onChange={(d) => setBirthdate(d)}
          inputMode="start"
          color="red"
          inputEnabled={false}
        />
      </View>
      <View style={styles.dropDownView}>
        <Text style={styles.dropDownLabel}>Geschlecht</Text>
        <DropDownPicker
          open={open}
          value={sex}
          items={items}
          setOpen={setOpen}
          setValue={setSex}
          setItems={setItems}
          placeholder="Geschlecht wählen"
          containerStyle={styles.dropdownContainer}
          style={{ backgroundColor: theme.colors.background }}
        />
      </View>
      <View>
        <TextInput
          style={styles.raceInputView}
          inputContainerStyle={{ backgroundColor: theme.colors.background }}
          label="Rasse"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextsView: {
    opacity: 0.5,
    marginBottom: 35,
  },
  nameInputView: {
    marginBottom: 20,
  },
  datePickerView: {
    marginBottom: 55,
    height: 50,
  },
  datePickerLabel: {
    marginBottom: 10,
    marginLeft: 15,
  },
  dropDownView: {
    height: "20%",
    zIndex: 20,
  },
  dropDownLabel: {
    marginBottom: 10,
    marginLeft: 15,
  },
  raceInputView: {
    marginTop: 10,
  },
  dropdownContainer: {
    width: 200,
  },
});
