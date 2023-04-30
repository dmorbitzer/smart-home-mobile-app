import React from "react";
import renderer from "react-test-renderer";

import DetailsTable from "../../../src/components/cat-profiles/DetailsTable";
jest.useFakeTimers();
const props = {
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
test("renders DetailsTable correctly", () => {
  const tree = renderer.create(<DetailsTable data={props.data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
