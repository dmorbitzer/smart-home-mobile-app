import React from "react";
import { StyleSheet } from "react-native";
import renderer from "react-test-renderer";

import DeleteCatFeedback from "../../../../src/components/cat-profiles/delete-modal/DeleteCatFeedback";
jest.useFakeTimers();
const onCloseModal = () => {
  console.log("done");
};
test("renders DeleteCatFeedback correctly", () => {
  const tree = renderer
    .create(
      <DeleteCatFeedback
        onCloseModal={onCloseModal}
        centeredView={styles.centeredView}
        modalView={styles.modalView}
        modalHeader={styles.modalHeader}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    height: "30%",
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
});
