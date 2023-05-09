import { useQuery, useMutation } from "@apollo/client";

import {
  ADD_CAT_PROFILE_MUTATION,
  CAT_DETAILS_QUERY,
  CAT_PROFILE_QUERY,
  DELETE_CAT_PROFILE_MUTATION,
  UPDATE_CAT_PROFILE_MUTATION,
} from "./constants/CatProfileQuerys";

export function useGetCatProfiles() {
  const returnValue = { data: null, loading: null };
  const { data, loading, refetch } = useQuery(CAT_PROFILE_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
    returnValue.refetch = refetch;
  }
  return returnValue;
}

export function useGetCatDetails(searchId) {
  const returnValue = { data: null, loading: null };
  const { data, loading, refetch } = useQuery(CAT_DETAILS_QUERY, {
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

export function useAddCatProfile() {
  const [runMutation] = useMutation(ADD_CAT_PROFILE_MUTATION);

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

export function useDeleteCatProfile() {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    DELETE_CAT_PROFILE_MUTATION
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

export function useEditCatProfile() {
  const [runMutation] = useMutation(UPDATE_CAT_PROFILE_MUTATION);
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
