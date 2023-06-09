import React from "react";
import renderer from "react-test-renderer";

import Services from "../../../src/components/main-menu/Services";
jest.useFakeTimers();

const localData = {
  data: {
    services: {
      edges: [
        {
          node: {
            id: "/api/services/4",
            name: "Katzenprofil",
            identifier: "cat_profile",
            active: true,
          },
        },
        {
          node: {
            id: "/api/services/5",
            name: "Katzenfütterung",
            identifier: "cat_feeding",
            active: true,
          },
        },
        {
          node: {
            id: "/api/services/6",
            name: "Katzenerkennung",
            identifier: "cat_tracking",
            active: false,
          },
        },
      ],
    },
  },
};

const navigation = null;
test("renders Loading correctly", () => {
  const tree = renderer
    .create(
      <Services data={localData.data.services.edges} navigation={navigation} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
