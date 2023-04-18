// Funktion um bestehende Katzenprofile abzurufen
import { useQuery } from "@apollo/client";

import { CatProfilesQuery } from "./constants/GetCatProfilesQuery";

export default function GetCatProfiles() {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(CatProfilesQuery);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}
