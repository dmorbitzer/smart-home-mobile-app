import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import renderer from "react-test-renderer";

import IconButton from "../../../src/components/util/IconButton";

const size = 20;
const getIcon = (title) => {
  switch (title) {
    case "Katzenprofil":
      return () => <Icon name="cat" color="black" size={size} />;
    case "Katzenfütterung":
      return () => <Icon name="food" color="black" size={size} />;
    case "Katzenerkennung":
      return () => (
        <Icon name="smoke-detector-variant" color="black" size={size} />
      );
    default:
      return "";
  }
};
test("renders IconButton correctly", () => {
  const tree = renderer
    .create(
      <IconButton
        key="Test"
        title="Katzenprofil"
        type="primary"
        icon={getIcon("Katzenprofil")}
        func={() => console.log("Katzenprofil")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
