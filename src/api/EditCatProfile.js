// Funktion um ein verändertes Katzenprofil zu speichern
import { useMutation } from "@apollo/client";

import { CatProfileMutation } from "./constants/EditCatProfileMutation";

export default function EditCatProfile(props) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(CatProfileMutation);
  runMutation({
    variables: {
      input: {
        id: props.id,
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
