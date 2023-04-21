import { gql } from "@apollo/client";

export const CatProfileMutation = gql`
  mutation DeleteCat($input: deleteWithFeedingTimesCatInput!) {
    deleteWithFeedingTimesCat(input: $input) {
      cat {
        id
        name
      }
    }
  }
`;
