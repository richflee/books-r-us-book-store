import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query getBooks {
    books {
      bookId
      title
      genre
      price
      author {
        id
        name
      }
    }
  }
`;