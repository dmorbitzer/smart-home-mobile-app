import React from "react";
import renderer from "react-test-renderer";

import LogFilter from "../../../src/components/logs/LogFilter";
jest.useFakeTimers();

test("renders Loading correctly", () => {
    const tree = renderer
        .create(<LogFilter />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});