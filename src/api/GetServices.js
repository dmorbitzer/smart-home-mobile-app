import { useQuery } from "@apollo/client";

import { SERVICES_QUERY } from "./constants/GetServicesQuery";

export default function GetServices() {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(SERVICES_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}
