// Funktion um die Details zu einem Katzenprofil zu laden
import { useQuery } from "@apollo/client";

import { CatDetailsQuery } from "./constants/GetCatDetailsQuery";

export default function GetCatDetails(searchId) {
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
