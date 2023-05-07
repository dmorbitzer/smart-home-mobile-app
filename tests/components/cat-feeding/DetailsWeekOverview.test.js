import React from "react";
import renderer from "react-test-renderer";

import DetailsWeekOverview from "../../../src/components/cat-feeding/DetailsWeekOverview";
jest.useFakeTimers();
const weekDay = 1;
const setWeekDay = () => {
  console.log("WeekDay set");
};
test("renders cat-feeding Week Overview correctly", () => {
  const tree = renderer
    .create(<DetailsWeekOverview weekDay={weekDay} setWeekDay={setWeekDay} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
