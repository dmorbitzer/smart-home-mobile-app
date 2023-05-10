import { Text } from "@react-native-material/core";

export default function CatDetection() {
  if (!global.jwt) {
    navigation.navigate("Login");
  }
  return <Text>Katzenerkennung</Text>;
}
