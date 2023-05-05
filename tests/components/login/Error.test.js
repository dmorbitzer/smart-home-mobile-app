import React from "react";
import renderer from "react-test-renderer";

import Error from "../../../src/components/login/Error";

jest.useFakeTimers();

test("renders Error with hasError correctly", () => {
  const tree = renderer.create(<Error hasError />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Error without hasError correctly", () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});
