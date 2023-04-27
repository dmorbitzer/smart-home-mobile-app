import React from "react";
import renderer from "react-test-renderer";

import Profiles from "../../../src/components/cat-profiles/Profiles";
jest.useFakeTimers();

const localData = {
  data: {
    cats: {
      edges: [
        {
          node: {
            id: "/api/cats/8",
            name: "Peter",
            gender: {
              name: "male",
            },
            race: "Bengal",
            weight: 5.2,
          },
        },
        {
          node: {
            id: "/api/cats/9",
            name: "Susi",
            gender: {
              name: "female",
            },
            race: "Maine-Coon",
            weight: 8.5,
          },
        },
        {
          node: {
            id: "/api/cats/12",
            name: "Björn",
            gender: {
              name: "female",
            },
            race: "Blauhaar",
            weight: 0.5,
          },
        },
        {
          node: {
            id: "/api/cats/13",
            name: "Max",
            gender: {
              name: "female",
            },
            race: "Blauhaar",
            weight: 0.5,
          },
        },
        {
          node: {
            id: "/api/cats/229",
            name: "Hugo",
            gender: {
              name: "male",
            },
            race: "Grüngut",
            weight: 5.5,
          },
        },
      ],
    },
  },
};

const navigation = null;
test("renders CatProfiles correctly", () => {
  const tree = renderer
    .create(
      <Profiles data={localData.data.cats.edges} navigation={navigation} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
