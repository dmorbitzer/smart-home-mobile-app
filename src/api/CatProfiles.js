import { useQuery, useMutation } from "@apollo/client";

import {
  AddCatProfileMutation,
  CatDetailsQuery,
  CatProfilesQuery,
  DeleteCatProfileMutation,
  UpdateCatProfileMutation,
} from "./constants/CatProfileQuerys";

// Funktion um bestehende Katzenprofile abzurufen
export function GetCatProfiles() {
  const returnValue = { data: null, loading: null };
  const { data, loading, refetch } = useQuery(CatProfilesQuery);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
    returnValue.refetch = refetch;
  }
  return returnValue;
}

// Funktion um die Details zu einem Katzenprofil zu laden
export function GetCatDetails(searchId) {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(CatDetailsQuery, {
    variables: { id: searchId },
  });
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}

// Funktion um ein neues Katzenprofil zu speichern
export function AddCatProfile(props) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(AddCatProfileMutation);
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

// Funktion um einzelne Katzenprofile zu löschen
export function DeleteCatProfile(inputId) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    DeleteCatProfileMutation
  );
  runMutation({
    variables: {
      input: {
        id: inputId,
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

// Funktion um ein verändertes Katzenprofil zu speichern
export function EditCatProfile(id, name, birthdate, weight, race, gender) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    UpdateCatProfileMutation
  );
  runMutation({
    variables: {
      input: {
        id,
        name,
        birthdate,
        weight,
        race,
        gender,
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
