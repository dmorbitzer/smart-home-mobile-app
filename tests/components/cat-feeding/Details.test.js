import React from "react";
import renderer from "react-test-renderer";

import Details from "../../../src/components/cat-feeding/Details";
jest.useFakeTimers();
const navigation = null;
const localFoodData = {
  data: {
    food: {
      edges: [
        {
          node: {
            id: "/api/food/7",
            name: "Trockenfutter",
          },
        },
        {
          node: {
            id: "/api/food/8",
            name: "Diät Trockenfutter",
          },
        },
      ],
    },
  },
};
const localFeedingTimesData = {
  data: {
    feedingTimes: {
      edges: [
        {
          node: {
            id: "/api/feeding_times/14",
            cat: {
              id: "/api/cats/246",
              name: "Chris",
            },
            food: {
              name: "Trockenfutter",
            },
            time: "1970-01-01T15:21:38+01:00",
            weekDay: 3,
          },
        },
        {
          node: {
            id: "/api/feeding_times/15",
            cat: {
              id: "/api/cats/247",
              name: "Masha",
            },
            food: {
              name: "Diät Trockenfutter",
            },
            time: "1970-01-01T15:23:02+01:00",
            weekDay: 2,
          },
        },
      ],
    },
  },
};
const onFeedNowClick = (catId, foodId) => {
  console.log(catId, foodId);
};
test("renders cat-feeding Details correctly", () => {
  const tree = renderer
    .create(
      <Details
        foodData={localFoodData.data.food.edges}
        feedintTimesData={localFeedingTimesData.data.feedingTimes.edges[0].node}
        onFeedNowClick={onFeedNowClick}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
