import { gql } from "@apollo/client";

export const GET_FAVOURITE_BOOKS = gql`
  query getFavouriteBooks {
    favouriteBooks {
      bookId
      title
      genre
      price
      isFavourite
      author {
        id
        name
      }
    }
  }
`;