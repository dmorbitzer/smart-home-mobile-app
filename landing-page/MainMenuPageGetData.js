import { gql, useQuery } from "@apollo/client";

const SERVICES_QUERY = gql`
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
export default function MainMenuPageGetData() {
  const returnValue = { data: null, loading: null };
  const { data, loading } = useQuery(SERVICES_QUERY);
  if (loading) {
    returnValue.loading = loading;
  }
  if (data) {
    returnValue.data = data;
  }
  return returnValue;
}
