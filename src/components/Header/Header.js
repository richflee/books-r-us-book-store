import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOPPING_CART_ITEMS } from '../../graphql/queries/get_shopping_cart';
import styles from './Header.module.css';
import { isCartSidebarVisible } from '../ShoppingCart/reactiveVars';

const Header = () => {

  const { error, data } = useQuery(GET_SHOPPING_CART_ITEMS);

  const onCartButtonClickHander = () => {
    isCartSidebarVisible(true);
  }

  if (error) {
    console.log('error', error);
    return (
      'bla'
    )
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h2>BOOKS R' US</h2>
      </div>
      <div className={styles.accountInfoContainer}>
        <div className={styles.cartContainer} onClick={() => onCartButtonClickHander()}>
          <div className={styles.cartNumberBadge}>
            <span>{data.cartItems.length}</span>
          </div>&nbsp;&nbsp;Cart 
        </div>
      </div>
    </div>
  );
};

export default Header;