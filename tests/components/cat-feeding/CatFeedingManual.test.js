import React from "react";
import renderer from "react-test-renderer";

import CatFeedingManual from "../../../src/components/cat-feeding/CatFeedingManual";
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
test("renders cat-feeding-manual correctly", () => {
  const tree = renderer
    .create(
      <CatFeedingManual
        onFeedNowClick={onFeedNowClick}
        feedingTimesData={localFeedingTimesData}
        foodData={localFoodData.data.food.edges}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
