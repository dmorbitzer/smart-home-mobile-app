import { useQuery } from "@apollo/client";

import { GET_GENDERS_QUERY } from "./constants/GenderQueries";

export function useGetGenders() {
  const returnValue = { data: null, loading: null, refetch: null };
  const { data, loading, refetch } = useQuery(GET_GENDERS_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
    returnValue.refetch = refetch;
  }
  return returnValue;
}
