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
export function useGetCatDetails(searchId) {
  const returnValue = { data: null, loading: null };
  const { data, loading, refetch } = useQuery(CatDetailsQuery, {
    variables: { id: searchId },
  });
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
    returnValue.refetch = refetch;
  }
  return returnValue;
}

// Funktion um ein neues Katzenprofil zu speichern
export function useAddCatProfile() {
  const [runMutation] = useMutation(AddCatProfileMutation);

  return async (name, birthdate, weight, race, gender) => {
    const response = await runMutation({
      variables: {
        input: {
          name,
          birthdate,
          weight,
          race,
          gender,
        },
      },
    });

    return response;
  };
}

// Funktion um einzelne Katzenprofile zu löschen
export function useDeleteCatProfile() {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    DeleteCatProfileMutation
  );
  return function (inputId) {
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
  };
}

// Funktion um ein verändertes Katzenprofil zu speichern
export function useEditCatProfile(id, name, birthdate, weight, race, gender) {
  const [runMutation] = useMutation(UpdateCatProfileMutation);
  return async (id, name, birthdate, weight, race, gender) => {
    const response = await runMutation({
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
    });

    return response;
  };
}
