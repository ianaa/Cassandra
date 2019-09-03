import { gql } from "apollo-boost";

const getExternalResource = gql`
  query($id: ID!) {
    externalResource(where: { id: $id }) {
      id
      title
      description
      linkURL
      logoURL
      categories {
        category
      }
      reviews {
        rating
        review
        user {
          userName
        }
      }
      comments {
        comment
        user {
          userName
        }
      }
      votes {
        positive
      }
    }
  }
`;

export default getExternalResource;
