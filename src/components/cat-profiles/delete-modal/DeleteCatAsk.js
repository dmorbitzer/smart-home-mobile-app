import { HStack } from "@react-native-material/core";
import { Text, View } from "react-native";

import IconButton from "../../util/IconButton";

export default function DeleteCatAsk(props) {
  const onChoose = (choose) => {
    props.chooseDeleteCat(choose);
  };
  return (
    <View style={props.centeredView}>
      <View style={props.modalView}>
        <Text style={props.modalHeader}>
          Sind Sie sich sicher, dass Sie das Profil unwiderruflich löschen
          wollen?
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
