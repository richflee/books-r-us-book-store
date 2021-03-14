import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOPPING_CART_ITEMS } from '../../graphql/queries/get_shopping_cart';
import styles from './ShoppingList.module.css';
import { isCartSidebarVisible, shoppingCartVar } from './reactiveVars';
import Truncate from 'react-truncate';

const ShoppingCart = () => {

  const { error, data } = useQuery(GET_SHOPPING_CART_ITEMS);

  const cartSubtotal = data.cartItems.reduce((subTotal, cartItem) => {
    return subTotal + cartItem.price;
  }, 0);

  const removeFromCart = (cartItem) => {
    const existing = shoppingCartVar();
    const cartItems = existing.filter(ci => ci.title !== cartItem.title);
    shoppingCartVar(cartItems);
  }

  const onCloseClickHandler = () => {
    isCartSidebarVisible(false);
  }

  const noItems = error || !data || !data.cartItems.length;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.closeButtonContainer}>
          <button onClick={() => onCloseClickHandler()}>Close</button>
        </div>
        <h3>YOUR CART</h3>
      </div>
      <ul className={styles.cartItemsContainer}>
        {data.cartItems.map((cartItem, index) => {
          return (
            <li key={`${index}-${cartItem.title}`}>
              <Truncate lines={1} ellipsis={<span>...</span>}>
                <strong>1x</strong> {cartItem.title}
              </Truncate>
              <button onClick={() => removeFromCart(cartItem)}>x</button>
            </li>
          )
        })}
      </ul>
      <div hidden={noItems} className={styles.footerContainer}>
        <div className={styles.footerContentContainer}>
          <div className={styles.subtotalContainer}><strong>Subtotal:</strong> {cartSubtotal} BTC</div>
          <button disabled={noItems}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;