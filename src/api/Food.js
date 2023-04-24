import { useQuery } from "@apollo/client";

import { FOOD_TYPES_QUERY } from "./constants/FoodQueries";

export function useGetFood() {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(FOOD_TYPES_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}
