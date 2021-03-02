import { InMemoryCache } from "@apollo/client";
import { shoppingCartVar } from "../components/ShoppingCart/reactiveVars";


export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return shoppingCartVar();
          }
        }
      }
    },
    Book: {
      keyFields: ["bookId"]
    }
  }
});