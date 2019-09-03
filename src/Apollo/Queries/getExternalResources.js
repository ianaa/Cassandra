import { gql } from "apollo-boost";

const getExternalResources = gql`
  query {
    externalResources {
      id
      title
      logoURL
      categories {
        category
      }
      votes {
        positive
      }
    }
  }
`;

export default getExternalResources;
