import { InMemoryCache } from "@apollo/client";
import { isCartSidebarVisible, shoppingCartVar } from "../components/ShoppingCart/reactiveVars";


export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return shoppingCartVar();
          }
        },
        isShoppingCartSidebarVisible: {
          read() {
            return isCartSidebarVisible();
          }
        }
      }
    },
    Book: {
      keyFields: ["bookId"],
      fields: {
        genre: {
          read(value) {
            return value || "ALL";
          }
        }
      }
    }
  }
});