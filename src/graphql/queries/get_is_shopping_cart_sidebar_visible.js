import { gql } from "@apollo/client";

export const GET_IS_SHOPPING_CART_SIDEBAR_VISIBLE = gql`
  query getIsShoppingCartSidebarVisible {
    isShoppingCartSidebarVisible @client
  }
`;