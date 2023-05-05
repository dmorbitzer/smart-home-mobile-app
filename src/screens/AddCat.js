import { Divider, Stack } from "@react-native-material/core";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import GeneralInformation from "../components/cat-profiles/add-profile/AddProfileGeneralInformation";
import IntelligentWaitingTime from "../components/cat-profiles/add-profile/AddProfileIntelligentWaitingTime";
import GetIcon from "../api/GetIcon";
import IconButton from "../components/util/IconButton";

export default function AddCat({ navigation }) {
  return (
    <ScrollView style={styles.addCatView}>
      <Stack spacing={2} style={{ margin: 32 }}>
        <GeneralInformation />
        <Divider style={styles.divider}/>
        <IntelligentWaitingTime />
        <IconButton
            key={1}
            title="Speichern"
            type="primary"
            func={() => console.log("test")}
            icon={GetIcon("Speichern")}
        />
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addCatView: {
    height: "100%",
  },
  divider: {
    marginTop: 30,
  }
});
