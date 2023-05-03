import { Divider, Stack } from "@react-native-material/core";
import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import GetIcon from "../api/GetIcon";
import AddProfileGeneralInformation from "../components/cat-profiles/add-profile/AddProfileGeneralInformation";
import AddProfileIntelligentWaitingTime from "../components/cat-profiles/add-profile/AddProfileIntelligentWaitingTime";
import AddProfileSaveButton from "../components/cat-profiles/add-profile/AddProfileSaveButton";

export default function AddCat({ navigation }) {
  const [data, setData] = useState(null);
  const handleChange = (data) => {
    setData(data);
  };

  return (
    <ScrollView style={styles.addCatView}>
      <Stack spacing={2} style={{ margin: 32 }}>
        <AddProfileGeneralInformation handleChange={handleChange} />
        <Divider />
        <AddProfileIntelligentWaitingTime />
        <AddProfileSaveButton navigation={navigation} data={data} />
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
  saveButtonView: {
    marginTop: 20,
    marginBottom: 100,
  },
});
