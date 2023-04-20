import { gql } from "@apollo/client";

export const CatProfileMutation = gql`
  mutation DeleteCat($input: deleteWithFoodCatInput!) {
    deleteWithFoodCat(input: $input) {
      cat {
        id
        name
      }
    }
  }
`;
