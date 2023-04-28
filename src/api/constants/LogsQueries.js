import { gql } from "@apollo/client";

export const GET_LOGS_QUERY = gql`
  {
    logs {
      edges {
        node {
          id
          service {
            id
            name
            identifier
          }
          time
          data
        }
      }
    }
  }
`;
