import DateTimePicker from "@react-native-community/datetimepicker";
import { Divider } from "@react-native-material/core";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { HelperText } from "react-native-paper";

import { useAddFeedingTime } from "../api/FeedingTimes";
import GetIcon from "../api/GetIcon";
import IconButton from "../components/util/IconButton";

export default function AddFeedingTime({ route, navigation }) {
  const [open, setOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [date, setDate] = useState(new Date());
  const [hasFoodPickerError, setFoodPickerError] = useState(false);
  const foodList = route.params.foodData.map((element) => {
    return { label: element.node.name, value: element.node.id };
  });
  const addFeedingTime = useAddFeedingTime();
  const submitAddFeedingTime = () => {
    if (selectedFood) {
      const time = date.getHours() + ":" + date.getMinutes() + ":00";
      addFeedingTime(
        route.params.catId,
        selectedFood,
        route.params.weekDay,
        time
      );
      navigation.navigate("Fütterung", {
        name: route.params.catName,
        catId: route.params.catId,
      });
    } else {
      setFoodPickerError(true);
    }
  };
  const useTime = (event, date) => {
    setDate(date);
  };
  return (
    <>
      <DateTimePicker
        style={{ alignSelf: "center", marginTop: 15 }}
        mode="time"
        value={date}
        onChange={useTime}
        display="spinner"
        themeVariant="light"
      />
      <Divider style={{ margin: 20 }} />
      <View style={styles.dropdownView}>
        <DropDownPicker
          onSelectItem={() => setFoodPickerError(false)}
          open={open}
          value={selectedFood}
          items={foodList}
          setOpen={setOpen}
          setValue={setSelectedFood}
          placeholder="Futter auswählen"
          containerStyle={styles.dropdownContainer}
        />
        <HelperText type="error" visible={hasFoodPickerError}>
          Kein Futter gewählt!
        </HelperText>
      </View>
      <View style={styles.buttonView}>
        <IconButton
          title="Speichern"
          func={() => submitAddFeedingTime()}
          type="primary"
          icon={GetIcon("Speichern")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 200,
  },
  dropdownView: {
    alignSelf: "center",
    height: "100%",
    zIndex: 20,
    flex: 1,
  },
  buttonView: {
    marginBottom: 50,
  },
});
