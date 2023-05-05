import { TextInput, Text } from "@react-native-material/core";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useTheme } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

export default function GeneralInformation(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [genderItems, setGenderItems] = useState([
    { label: "Weiblich", value: "female" },
    { label: "Männlich", value: "male" },
  ]);

  return (
    <View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        color={theme.colors.primary}
        inputContainerStyle={{ backgroundColor: theme.colors.background }}
        onChangeText={props.setCatName}
        value={props.catName}
        style={styles.input}
      />

      <Text style={styles.label}>Geburtsdatum:</Text>
      <DatePickerInput
        locale="de"
        label={null}
        value={props.catBirthdate}
        onChange={props.setCatBirthdate}
        inputMode="start"
        color="red"
        inputEnabled={false}
        style={styles.input}
      />

      <Text style={styles.label}>Geschlecht:</Text>
      <DropDownPicker
        open={open}
        value={props.catSex}
        items={genderItems}
        setOpen={setOpen}
        setValue={props.setCatSex}
        setItems={setGenderItems}
        placeholder="Geschlecht wählen"
        containerStyle={styles.input}
        style={{ backgroundColor: theme.colors.background }}
        listItemContainerStyle={{ backgroundColor: theme.colors.background }}
      />

      <Text style={styles.label}>Rasse:</Text>
      <TextInput
        color={theme.colors.primary}
        inputContainerStyle={{ backgroundColor: theme.colors.background }}
        onChangeText={props.setCatRace}
        value={props.catRace}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
});
