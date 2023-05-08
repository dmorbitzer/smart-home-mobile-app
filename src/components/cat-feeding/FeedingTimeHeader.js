import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  HStack,
  IconButton as MuiIconButton,
  Spacer,
} from "@react-native-material/core";
import Toast from "react-native-root-toast";

export default function FeedingTimeHeader(props) {
  return (
    <>
      <HStack>
        <Text style={{ marginLeft: 20, marginTop: 11 }} variant="h5">
          Fütterungszeiten
        </Text>
        <Spacer />
        <MuiIconButton
          onTouchStart={() => {
            if (props.weekDay) {
              props.navigation.navigate("NewFeedingTime", {
                weekDay: props.weekDay,
                catName: props.catName,
                catId: props.catId,
                foodData: props.foodData,
              });
            } else {
              Toast.show("Bitte zuerst einen Wochentag wählen!", {
                duration: Toast.durations.SHORT,
              });
            }
          }}
          icon={() => <Icon size={20} name="plus" />}
        />
      </HStack>
    </>
  );
}
