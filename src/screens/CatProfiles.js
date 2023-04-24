import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton, Stack } from "@react-native-material/core";

import { GetCatProfiles } from "../api/CatProfiles";
import Profiles from "../components/cat-profiles/Profiles";
import Loading from "../components/util/Loading";

export default function CatProfiles({ navigation }) {
  const getData = GetCatProfiles();
  if (getData.loading) {
    return <Loading />;
  }
  return (
    <Stack m={4} spacing={2}>
      <Profiles data={getData.data} navigation={navigation} />
      <IconButton
        style={{ margin: 10, alignSelf: "center" }}
        icon={() => <Icon name="plus-circle" size={40} />}
        onTouchStart={() => {
          navigation.navigate("Hinzufügen");
        }}
      />
    </Stack>
  );
}
