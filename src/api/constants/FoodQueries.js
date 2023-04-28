import { gql } from "@apollo/client";

export const FOOD_TYPES_QUERY = gql`
  {
    food {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
