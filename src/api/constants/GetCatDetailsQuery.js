import { gql } from "@apollo/client";

export const CatDetailsQuery = gql`
  query CatDetailsQuery($id: String) {
    cat(id: $id) {
      id
      name
      gender {
        name
      }
      race
      weight
    }
  }
`;
