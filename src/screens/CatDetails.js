import { Text } from "@react-native-material/core";

export default function CatDetails({ route, navigation }) {
  return (
    <>
      <Text>Katzenprofil</Text>
      <Text>Name: {route.params.name}</Text>
    </>
  );
}
