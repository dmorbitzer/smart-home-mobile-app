import React from "react";
import renderer from "react-test-renderer";

import LoginForm from "../../../src/components/login/LoginForm";

jest.useFakeTimers();

test("renders LoginForm correctly", () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
