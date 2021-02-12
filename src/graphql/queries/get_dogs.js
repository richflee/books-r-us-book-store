import { gql } from "@apollo/client";

export const GET_DOGS = gql`
  query getDogs {
    dogs @client {
      name
      age
      breed
    }
  }
`;