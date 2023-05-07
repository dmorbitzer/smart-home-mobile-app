import React from "react";
import renderer from "react-test-renderer";

import FeedingTimeHeader from "../../../src/components/cat-feeding/FeedingTimeHeader";
jest.useFakeTimers();

const props = {
  navigation: null,
  weekDay: 1,
  catId: "/api/cat/123",
  catName: "TEST",
  foodData: {
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
  },
};
test("renders FeedingTime Header correctly", () => {
  const tree = renderer
    .create(
      <FeedingTimeHeader
        navigation={props.navigation}
        weekDay={props.weekDay}
        catId={props.catId}
        catName={props.catName}
        foodData={props.foodData.data.food.edges}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
