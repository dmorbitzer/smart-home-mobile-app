import { useQuery } from "@apollo/client";

import { GET_LOGS_QUERY } from "./constants/LogsQueries";

export function GetLogs() {
  const returnValue = { data: null, loading: null, refetch: null };
  const { data, loading, refetch } = useQuery(GET_LOGS_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
    returnValue.refetch = refetch;
  }
  return returnValue;
}
