import { Text } from "@react-native-material/core";

export default function CatDetection({ navigation }) {
  if (!global.jwt) {
    navigation.navigate("Login");
  }
  return <Text>Katzenerkennung</Text>;
}
