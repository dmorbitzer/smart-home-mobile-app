import { useQuery, useMutation } from "@apollo/client";

import {
  FEEDING_TIMES_QUERY,
  FEEDING_TIME_DETAILS_QUERY,
  ADD_FEEDING_TIME_MUTATION,
  UPDATE_FEEDING_TIME_MUTATION,
  DELETE_FEEDING_TIME_MUTATION,
} from "./constants/FeedingTimeQueries";

export function useGetFeedingTimes() {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(FEEDING_TIMES_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}

export function useGetFeedingTimeDetails(id) {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(FEEDING_TIME_DETAILS_QUERY, {
    variables: { id },
  });
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}

export function useAddFeedingTime(catId, foodId, weekDay, time) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    ADD_FEEDING_TIME_MUTATION
  );
  runMutation({
    variables: {
      input: {
        cat: catId,
        food: foodId,
        weekDay,
        time,
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

export function useDeleteFeedingTime(feedingTimeId) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    DELETE_FEEDING_TIME_MUTATION
  );
  runMutation({
    variables: {
      input: {
        id: feedingTimeId,
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

export function useUpdateFeedingTime(
  feedingTimeId,
  catId,
  foodId,
  weekDay,
  time
) {
  const returnValue = { data: null, loading: null };
  const [runMutation, { data, loading }] = useMutation(
    UPDATE_FEEDING_TIME_MUTATION
  );
  runMutation({
    variables: {
      input: {
        id: feedingTimeId,
        cat: catId,
        food: foodId,
        weekDay,
        time,
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
