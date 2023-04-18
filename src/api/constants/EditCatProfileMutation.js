import { gql } from "@apollo/client";

export const CatProfileMutation = gql`
  mutation UpdateCat($input: updateCatInput!) {
    updateCat(input: $input) {
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

//{"input": {"id": "/api/cats/5", "name": "Mariane", "weight": 10.5, "gender": "/api/genders/6"}}
