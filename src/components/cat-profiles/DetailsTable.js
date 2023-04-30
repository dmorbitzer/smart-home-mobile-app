import { Text, HStack, VStack } from "@react-native-material/core";

export default function DetailsTable(props) {
  const date = new Date(props.data.cat.birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const localBirthdate = day + "." + month + "." + year;
  const localGender =
    props.data.cat.gender.name === "male" ? "Männlich" : "Weiblich";
  return (
    <HStack>
      <VStack fill center spacing={4} divider>
        <Text variant="h6">Geschlecht</Text>
        <Text variant="h6">Rasse</Text>
        <Text variant="h6">Geburtstag</Text>
        <Text variant="h6">Gewicht</Text>
      </VStack>
      <VStack fill center spacing={4} divider>
        <Text variant="h6">{localGender}</Text>
        <Text variant="h6">{props.data.cat.race}</Text>
        <Text variant="h6">{localBirthdate}</Text>
        <Text variant="h6">{props.data.cat.weight} kg</Text>
      </VStack>
    </HStack>
  );
}
