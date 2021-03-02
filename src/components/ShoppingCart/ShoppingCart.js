import React, { Fragment } from 'react';
import styles from './ShoppingList.module.css';
import Truncate from 'react-truncate';
import { GET_SHOPPING_CART_ITEMS } from '../../graphql/queries/get_shopping_cart';
import { useQuery } from '@apollo/client';

const ShoppingCart = () => {

  const data = { cartItems: [] };
  // const { data, error } = useQuery(GET_SHOPPING_CART_ITEMS)

  const cartSubtotal = data.cartItems.reduce((subTotal, cartItem) => {
    return subTotal + cartItem.price;
  }, 0);

  // const removeFromCart = (cartItem) => {
  //   const existing = shoppingCartVar();
  //   const cartItems = existing.filter(ci => ci.title !== cartItem.title);
  //   shoppingCartVar(cartItems);
  // }

  const noItems = false; // error || !data || !data.cartItems.length;

  return (
    <div className={styles.mainContainer}>
      <h3>YOUR CART</h3>
      <ul className={styles.cartItemsContainer}>
        {data.cartItems.map((cartItem, index) => {
          return (
            <li key={`${index}-${cartItem.title}`}>
              <Truncate lines={1} ellipsis={<span>...</span>}>
                <strong>1x</strong> {cartItem.title}
              </Truncate>
            </li>
          )
        })}
      </ul>
      <div className={styles.footerContainer}>
        <div hidden={noItems} className={styles.subtotalContainer}><strong>Subtotal:</strong> {cartSubtotal} BTC</div>
        <button disabled={noItems}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;