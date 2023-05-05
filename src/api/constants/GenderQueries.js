import { gql } from "@apollo/client";

export const GET_GENDERS_QUERY = gql`
  {
    genders {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
