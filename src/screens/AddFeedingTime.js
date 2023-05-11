import { Text, Divider } from "@react-native-material/core";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { HelperText } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";

import { formatStringToTime } from "../api/DateTime";
import { useAddFeedingTime } from "../api/FeedingTimes";
import getIcon from "../api/getIcon";
import IconButton from "../components/util/IconButton";
import Loading from "../components/util/Loading";

export default function AddFeedingTime({ route, navigation }) {
  const weekDayName = [
    "",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFood, setSelectedFood] = useState("_");
  const [date, setDate] = useState(new Date());
  const [hasFoodPickerError, setFoodPickerError] = useState(false);
  const foodList = route.params.foodData.map((element) => {
    return { label: element.node.name, value: element.node.id };
  });
  const addFeedingTime = useAddFeedingTime();
  const submitAddFeedingTime = () => {
    if (selectedFood !== "_") {
      setLoading(true);
      const time = date.getHours() + ":" + date.getMinutes() + ":00";
      addFeedingTime(
        route.params.catId,
        selectedFood,
        route.params.weekDay,
        time
      ).then(() => {
        navigation.navigate("Fütterung", {
          name: route.params.catName,
          catId: route.params.catId,
          weekDay: route.params.weekDay,
        });
      });
    } else {
      setFoodPickerError(true);
    }
  };

  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      const d = new Date(new Date().setHours(hours, minutes));
      setDate(d);
    },
    [setVisible]
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Text style={{ marginTop: 20, alignSelf: "center" }} variant="h2">
        {weekDayName[route.params.weekDay]}
      </Text>
      <Divider style={{ margin: 20 }} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text variant="h3">{formatStringToTime(date.toString())}</Text>
        <HelperText type="info">Gewählte Fütterungszeit</HelperText>
        <IconButton
          title="Zeit auswählen"
          func={() => setVisible(true)}
          type="primary"
          icon={getIcon("Time")}
        />
      </View>
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
          listMode="SCROLLVIEW"
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
          icon={getIcon("Speichern")}
        />
      </View>
      <TimePickerModal
        label="Bitte Zeit wählen"
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
      />
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
