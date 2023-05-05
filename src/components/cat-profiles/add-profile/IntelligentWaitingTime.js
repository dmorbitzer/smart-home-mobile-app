import { TextInput, Text } from "@react-native-material/core";
import { View, StyleSheet, Switch } from "react-native";
import { useTheme } from "react-native-paper";

export default function IntelligentWaitingTime(props) {
  const theme = useTheme();

  const hasWaitingTimeInput = (
    <View style={styles.switchContainer}>
      <Text>Intelligente Wartezeit:</Text>
      <Switch
        value={props.hasWaitingTime}
        onValueChange={props.setHasWaitingTime}
        style={styles.switch}
      />
    </View>
  );

  return (
    <View>
      {hasWaitingTimeInput}

      <Text style={styles.label}>Wartezeit in Sekunden:</Text>
      <TextInput
        color={theme.colors.primary}
        inputContainerStyle={{ backgroundColor: theme.colors.background }}
        onChangeText={props.setWaitingTime}
        value={props.waitingTime}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  switch: {
    marginLeft: 10,
  },
});
