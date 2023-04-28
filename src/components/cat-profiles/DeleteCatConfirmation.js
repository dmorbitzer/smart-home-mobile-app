import {
  Text,
  DialogHeader,
  DialogContent,
  DialogActions,
  Button,
} from "@react-native-material/core";

import { DeleteCatProfile, GetCatDetails } from "../../api/CatProfiles";
import Loading from "../util/Loading";

export default function DeleteCatConfirmation(props) {
  if (props.id) {
    const getData = GetCatDetails(props.id);
    if (getData.loading) {
      return <Loading />;
    }
  }

  return (
    <>
      <DialogHeader title="Löschen Erfolgreich!" />
      <DialogContent>
        <Text>Das Katzenprofil wurde erfolgreich gelöscht.</Text>
      </DialogContent>
      <DialogActions>
        <Button
          title="OK"
          color="lightblue"
          compact
          onPress={() => {
            props.handleSetVisible(false);
          }}
        />
      </DialogActions>
    </>
  );
}
