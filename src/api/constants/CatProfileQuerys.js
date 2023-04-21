import { gql } from "@apollo/client";

export const AddCatProfileMutation = gql`
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

export const DeleteCatProfileMutation = gql`
  mutation DeleteCat($input: deleteWithFeedingTimesCatInput!) {
    deleteWithFeedingTimesCat(input: $input) {
      cat {
        id
        name
      }
    }
  }
`;

export const UpdateCatProfileMutation = gql`
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

export const CatDetailsQuery = gql`
  query CatDetailsQuery($id: ID!) {
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
