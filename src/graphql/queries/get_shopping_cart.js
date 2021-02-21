import { gql } from "@apollo/client";

export const GET_SHOPPING_CART_ITEMS = gql`
  query getShoppingCartItems {
    cartItems @client {
      title
      price
    }
  }
`;