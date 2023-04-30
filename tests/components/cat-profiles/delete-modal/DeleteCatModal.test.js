import React from "react";
import renderer from "react-test-renderer";

import DeleteCatModal from "../../../../src/components/cat-profiles/delete-modal/DeleteCatModal";
jest.useFakeTimers();
jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.Animated.timing = () => ({ start: () => {} });
  return RN;
});
const closeModalHandler = () => {
  console.log("done");
};
const showModal = true;
const props = {
  navigation: null,
  deleteCat: null,
  data: {
    cat: {
      id: "test",
    },
  },
};
test("renders DeleteCatModal correctly", () => {
  const tree = renderer
    .create(
      <DeleteCatModal
        navigation={props.navigation}
        delteCat={props.delteCat}
        delteId={props.data.cat.id}
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
