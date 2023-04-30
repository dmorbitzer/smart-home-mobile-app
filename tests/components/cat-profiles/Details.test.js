import React from "react";
import renderer from "react-test-renderer";

import Details from "../../../src/components/cat-profiles/Details";
jest.useFakeTimers();
const navigation = null;
const localData = {
  data: {
    cat: {
      id: "/api/cats/245",
      name: "Bla",
      birthdate: "2023-04-14T00:00:00+02:00",
      gender: {
        name: "male",
      },
      race: "super",
      weight: 2,
    },
  },
};
const onDeleteCat = (catId) => {
  console.log(catId);
};
test("renders Details correctly", () => {
  const tree = renderer
    .create(
      <Details
        delteCat={onDeleteCat}
        data={localData.data}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
