import { gql } from "@apollo/client";

export const CatProfileMutation = gql`
  mutation AddCat($input: createCatInput!) {
    createCat(input: $input) {
      cat {
        id
        _id
        name
        birthdate
        weight
        race
        gender {
          name
        }
      }
    }
  }
`;
