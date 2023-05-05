import { HStack } from "@react-native-material/core";
import { Text, View } from "react-native";

import IconButton from "../../util/IconButton";

export default function DeleteFeedingTimeAsk(props) {
  const onChoose = (choose) => {
    props.chooseDeleteFeedingTime(choose);
  };
  return (
    <View style={props.centeredView}>
      <View style={props.modalView}>
        <Text style={props.modalHeader}>
          Sind Sie sich sicher, dass Sie diese Fütterungszeit unwiderruflich
          löschen wollen?
        </Text>
        <HStack>
          <IconButton
            title="Nein"
            func={() => onChoose(false)}
            type="primary"
          />
          <IconButton
            title="Ja"
            func={() => onChoose(true)}
            variant="outlined"
          />
        </HStack>
      </View>
    </View>
  );
}
