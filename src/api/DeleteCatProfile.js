// Funktion um einzelne Katzenprofile zu löschen
// Funktion um ein neues Katzenprofil zu speichern
import { useMutation } from "@apollo/client";

import { CatProfileMutation } from "./constants/DeleteCatProfileMutation";

export default function DeleteCatProfile(props) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(CatProfileMutation);
  runMutation({
    variables: {
      input: {
        name: props.name,
        birthdate: props.birthdate,
        weight: props.weight,
        race: props.race,
        gender: props.gender,
      },
    },
  }).then(() => {
    if (loading) {
      returnValue.loading = loading;
    }
    if (data) {
      returnValue.data = data;
    }
    return returnValue;
  });
}
