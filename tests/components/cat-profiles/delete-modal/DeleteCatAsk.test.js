import React from "react";
import { StyleSheet } from "react-native";
import renderer from "react-test-renderer";

import DeleteCatAsk from "../../../../src/components/cat-profiles/delete-modal/DeleteCatAsk";
jest.useFakeTimers();
const chooseDeleteCat = (choose) => {
  console.log(choose);
};
test("renders DeleteCatAsk correctly", () => {
  const tree = renderer
    .create(
      <DeleteCatAsk
        chooseDeleteCat={chooseDeleteCat}
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
