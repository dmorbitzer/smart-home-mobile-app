import { Text } from "@react-native-material/core";

export default function CatFeeding({ route, navigation }) {
  if (route.params) {
    return <Text>Katzenfütterung: {route.params.id}</Text>;
  }
  return <Text>Katzenfütterung</Text>;
}
