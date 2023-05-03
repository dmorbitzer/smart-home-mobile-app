import { TextInput, Text } from "@react-native-material/core";
import { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { useTheme } from "react-native-paper";

export default function AddProfileIntelligentWaitingTime() {
  const theme = useTheme();
  const [formValues, setFormValues] = useState({
    isWaitingTime: {
      value: true,
    },
    startingTime: {
      value: "",
    },
  });

  return (
    <View>
      <View style={styles.headerTextsView}>
        <Text variant="h6">Intelligente Wartezeit</Text>
      </View>
      <View style={styles.switchView}>
        <Text>Intelligente Wartezeit</Text>
        <Switch
          style={styles.waitingTimeSwitch}
          value={formValues.isWaitingTime}
          onValueChange={(value) => setFormValues({ isWaitingTime: !value })}
        />
      </View>
      <TextInput
        inputContainerStyle={{ backgroundColor: theme.colors.background }}
        label="Startwert in s (min. 5s)"
        onChangeText={(value) => setFormValues({ startingTime: value })}
        value={formValues.startingTime}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextsView: {
    opacity: 0.5,
    marginVertical: 35,
  },
  switchView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 15,
  },
  waitingTimeSwitch: {
    marginLeft: 20,
  },
});
