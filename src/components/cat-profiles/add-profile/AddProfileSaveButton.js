import { StyleSheet, View } from "react-native";

import GetIcon from "../../../api/GetIcon";
import IconButton from "../../util/IconButton";

export default function AddProfileSaveButton({ navigation, props }) {
  return (
    <View style={styles.saveButtonView}>
      <IconButton
        key={1}
        title="Speichern"
        type="primary"
        func={() => {
          navigation.navigate("Katzenprofil");
          console.log(props.data);
        }}
        icon={GetIcon("Speichern")}
      />
    </View>
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
