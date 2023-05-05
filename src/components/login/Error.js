import { Text } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

export default function Error(props) {
  if (props.hasError) {
    return (
      <View style={styles.errorView}>
        <Text style={styles.errorText}>Username oder Passwort ungültig!</Text>
      </View>
    );
  }

  return <View style={styles.errorPlaceholder} />;
}

const styles = StyleSheet.create({
  errorView: {
    marginLeft: 12,
    backgroundColor: "#f56653",
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
  },
  errorText: {
    textAlign: "center",
  },
  errorPlaceholder: {
    height: 40,
  },
});
