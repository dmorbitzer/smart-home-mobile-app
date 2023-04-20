// Funktion um einzelne Katzenprofile zu löschen
import { useMutation } from "@apollo/client";

import { CatProfileMutation } from "./constants/DeleteCatProfileMutation";

export default function DeleteCatProfile(props) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(CatProfileMutation);
  runMutation({
    variables: {
      input: {
        id: props.id,
        name: props.name,
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
