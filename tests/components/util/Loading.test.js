import React from "react";
import renderer from "react-test-renderer";

import Loading from "../../../src/components/util/Loading";
jest.useFakeTimers();

test("renders Loading correctly", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
