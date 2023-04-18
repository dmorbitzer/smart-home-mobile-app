import { gql } from "@apollo/client";

export const CatProfilesQuery = gql`
  {
    cats {
      edges {
        node {
          id
          name
          gender {
            name
          }
          race
          weight
        }
      }
    }
  }
`;
