import { gql } from "@apollo/client";

export const ADD_CAT_PROFILE_MUTATION = gql`
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

export const DELETE_CAT_PROFILE_MUTATION = gql`
  mutation DeleteCat($input: deleteWithFeedingTimesCatInput!) {
    deleteWithFeedingTimesCat(input: $input) {
      cat {
        id
        name
      }
    }
  }
`;

export const UPDATE_CAT_PROFILE_MUTATION = gql`
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

export const CAT_DETAILS_QUERY = gql`
  query CatDetailsQuery($id: ID!) {
    cat(id: $id) {
      id
      name
      birthdate
      gender {
        id
        name
      }
      race
      weight
    }
  }
`;

export const CAT_PROFILE_QUERY = gql`
  {
    cats {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
