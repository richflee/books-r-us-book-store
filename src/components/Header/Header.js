import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOPPING_CART_ITEMS } from '../../graphql/queries/get_shopping_cart';
import styles from './Header.module.css';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';

const Header = () => {

  const data = { cartItems: [] };
  // const { data, error } = useQuery(GET_SHOPPING_CART_ITEMS);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h2>BOOKS R' US</h2>
      </div>
      <div className={styles.accountInfoContainer}>
        <div className={styles.cartContainer}>
          <div className={styles.cartNumberBadge}>
            <span>{data.cartItems.length}</span>
          </div>&nbsp;&nbsp;Cart 
        </div>
      </div>
    </div>
  );
};

export default Header;