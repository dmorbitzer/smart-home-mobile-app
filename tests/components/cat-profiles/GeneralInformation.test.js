import React from "react";
import renderer from "react-test-renderer";

import GeneralInformation from "../../../src/components/cat-profiles/add-profile/GeneralInformation";

jest.useFakeTimers();

const genders = [
  { node: { id: 1, name: "female" } },
  { node: { id: 2, name: "male" } },
];

test("renders CatProfiles correctly", () => {
  const tree = renderer
    .create(<GeneralInformation genders={genders} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
