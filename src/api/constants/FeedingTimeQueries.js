import { gql } from "@apollo/client";

export const FEEDING_TIMES_QUERY = gql`
  {
    feedingTimes {
      edges {
        node {
          id
          cat {
            name
          }
          food {
            name
          }
          time
          weekDay
        }
      }
    }
  }
`;

export const FEEDING_TIME_DETAILS_QUERY = gql`
  query FeedingTimeDetailsQuery($id: ID!) {
    feedingTime(id: $id) {
      id
      cat {
        id
        name
      }
      food {
        id
        name
      }
      weekDay
      time
    }
  }
`;

export const ADD_FEEDING_TIME_MUTATION = gql`
  mutation addFeedingTime($input: createFeedingTimeInput!) {
    createFeedingTime(input: $input) {
      feedingTime {
        id
        cat {
          id
          name
        }
        food {
          id
          name
        }
        weekDay
        time
      }
    }
  }
`;

export const UPDATE_FEEDING_TIME_MUTATION = gql`
  mutation UpdateFeedingTime($input: updateFeedingTimeInput!) {
    updateFeedingTime(input: $input) {
      feedingTime {
        id
        cat {
          id
          name
        }
        food {
          id
          name
        }
        weekDay
        time
      }
    }
  }
`;

export const DELETE_FEEDING_TIME_MUTATION = gql`
  mutation DeleteCat($input: deleteFeedingTimeInput!) {
    deleteFeedingTime(input: $input) {
      feedingTime {
        id
      }
    }
  }
`;
