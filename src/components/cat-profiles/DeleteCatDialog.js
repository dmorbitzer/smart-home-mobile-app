import {
  Text,
  DialogHeader,
  DialogContent,
  DialogActions,
  Button,
} from "@react-native-material/core";

export default function DeleteCatDialog(props) {
  return (
    <>
      <DialogHeader title="Profil löschen?" />
      <DialogContent>
        <Text>
          Sind Sie sich sicher, dass Sie das Profil unwiderruflich löschen
          wollen?
        </Text>
      </DialogContent>
      <DialogActions>
        <Button
          title="Nein"
          color="lightblue"
          compact
          onPress={() => {
            props.handleSetVisible(false);
          }}
        />
        <Button
          title="Ja"
          color="darkred"
          variant="text"
          compact
          onPress={() => {
            props.handleSetVisible(false);
            props.navigation.navigate("Katzenprofil", {
              id: props.catId,
            });
          }}
        />
      </DialogActions>
    </>
  );
}
