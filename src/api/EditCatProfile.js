// Funktion um ein verändertes Katzenprofil zu speichern
import { useMutation } from "@apollo/client";

import { CatProfileMutation } from "./constants/EditCatProfileMutation";

export default function EditCatProfile(props) {
  const input = {};
  if (props.id !== null) {
    input.id = props.id;
  }
  if (props.name !== null) {
    input.name = props.name;
  }
  if (props.birthdate !== null) {
    input.birthdate = props.birthdate;
  }
  if (props.weight !== null) {
    input.weight = props.weight;
  }
  if (props.race !== null) {
    input.race = props.race;
  }
  if (props.gender !== null) {
    input.gender = props.gender;
  }
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(CatProfileMutation);
  runMutation({
    variables: {
      input,
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
