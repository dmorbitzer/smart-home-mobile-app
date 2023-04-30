import { Text } from "@react-native-material/core";

export default function EditCat({ route, navigation }) {
  return <Text>Katzenbearbeitung: {route.params.id}</Text>;
}
