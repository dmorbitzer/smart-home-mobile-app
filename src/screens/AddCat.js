import { Divider, Stack } from "@react-native-material/core";
import { ScrollView, View, StyleSheet } from "react-native";

import AddProfileGeneralInformation from "../components/cat-profiles/add-profile/AddProfileGeneralInformation";
import AddProfileIntelligentWaitingTime from "../components/cat-profiles/add-profile/AddProfileIntelligentWaitingTime";

export default function AddCat({ route, navigation }) {
  const saveProfile = route.params.handleSave;

  return (
    <ScrollView style={styles.addCatView}>
      <Stack spacing={2} style={{ margin: 32 }}>
        <AddProfileGeneralInformation />
        <Divider />
        <AddProfileIntelligentWaitingTime />
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addCatView: {
    height: "100%",
  },
  dividerView: {
    borderBottomWidth: 0.75,
  },
});
