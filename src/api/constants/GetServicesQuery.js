import { gql } from "@apollo/client";

export const SERVICES_QUERY = gql`
  {
    services {
      edges {
        node {
          id
          name
          identifier
          active
        }
      }
    }
  }
`;
