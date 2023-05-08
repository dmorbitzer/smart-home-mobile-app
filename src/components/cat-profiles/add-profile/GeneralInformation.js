import { TextInput, Text } from "@react-native-material/core";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import NumericInput from "react-native-numeric-input";
import { HelperText, useTheme } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

export default function GeneralInformation(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const genderItems = props.genders.map((element) => {
    return {
      label:
        element.node.name === "male"
          ? "Männlich"
          : element.node.name === "female"
          ? "Weiblich"
          : "",
      value: element.node.id,
    };
  });

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
      <HelperText type="error" visible={props.hasCatNameError}>
        Katzennahme fehlt!
      </HelperText>

      <Text style={styles.label}>Geburtsdatum:</Text>
      <View style={styles.input}>
        <DatePickerInput
          locale="de"
          label={null}
          value={props.catBirthdate}
          onChange={props.setCatBirthdate}
          inputMode="start"
          color="red"
          inputEnabled={false}
        />
      </View>

      <HelperText type="error" visible={props.hasBirthdateError}>
        Geburtsdatum fehlt!
      </HelperText>

      <View style={styles.dropdownView}>
        <Text style={styles.label}>Geschlecht:</Text>
        <DropDownPicker
          open={open}
          value={props.catSex}
          items={genderItems}
          setOpen={setOpen}
          setValue={props.setCatSex}
          placeholder={
            props.placeholder ? props.placeholder : "Geschlecht wählen"
          }
          containerStyle={styles.input}
          style={{ backgroundColor: theme.colors.background }}
          listItemContainerStyle={{ backgroundColor: theme.colors.background }}
          listMode="SCROLLVIEW"
        />
        <HelperText type="error" visible={props.hasCatSexError}>
          Katzengeschlecht fehlt!
        </HelperText>
      </View>

      <Text style={styles.label}>Rasse:</Text>
      <TextInput
        color={theme.colors.primary}
        inputContainerStyle={{ backgroundColor: theme.colors.background }}
        onChangeText={props.setCatRace}
        value={props.catRace}
        style={styles.input}
      />
      <HelperText type="error" visible={props.hasCatRaceError}>
        Katzenrasse fehlt!
      </HelperText>

      <Text style={styles.label}>Gewicht in Kilogram:</Text>
      <NumericInput
        value={props.catWeight}
        minValue={0}
        maxValue={10}
        onChange={(value) => props.setCatWeight(value)}
        containerStyle={styles.input}
        valueType="real"
        totalWidth={150}
        totalHeight={50}
        iconSize={25}
        step={0.1}
      />
      <HelperText type="error" visible={props.hasCatWeightError}>
        Katzengewicht in Kilogram fehlt!
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
  },
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
  dropdownView: {
    zIndex: 20,
  },
});
