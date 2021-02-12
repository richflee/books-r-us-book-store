import { InMemoryCache } from "@apollo/client";
import { shoppingCartVar } from "../components/ShoppingCart/reactiveVars";

const dogs = [
  { name: 'Rusty', age: '2 months', breed: 'Bulldog'  },
  { name: 'Charlie', age: '5 years', breed: 'Cavoodle'  },
  { name: 'CoCo', age: '1 year', breed: 'Greyhound'  },
];

// },
// Person: {
//   fields: {
//     name: {
//       read(value) {
//         return value;
//       }
//     }
//   }
// },
// CartItem: {
//   fields: {
//     quantity: {
//       read(value, existing) {
//         console.log('existing', existing);
//         return value;
//       }
//     }
//   }
// }

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return shoppingCartVar();
          },
        },
        dogs: {
          read() {
            return dogs;
          }
        }
      }
    },
    cartItems: {
      fields: {
        quantity: {
          read(value = 7, existing) {
            console.log('existing', existing);
            return value;
          }
        }
      }
    }
  }
});