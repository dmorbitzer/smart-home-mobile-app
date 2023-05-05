import { HStack } from "@react-native-material/core";
import { Text, View } from "react-native";

import IconButton from "../../util/IconButton";

export default function DeleteFeedingTimeFeedback(props) {
  const onCloseModal = () => {
    props.onCloseModal();
  };
  return (
    <View style={props.centeredView}>
      <View style={props.modalView}>
        <Text style={props.modalHeader}>
          Die Fütterungszeit wurde erfolgreich gelöscht.
        </Text>
        <HStack>
          <IconButton title="Ok" func={() => onCloseModal()} type="primary" />
        </HStack>
      </View>
    </View>
  );
}
