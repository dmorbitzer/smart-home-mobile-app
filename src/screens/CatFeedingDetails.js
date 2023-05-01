import { Text } from "@react-native-material/core";

export default function CatFeedingDetails({ route }) {
  return <Text>Fütterung {route.params.catId}</Text>;
}
