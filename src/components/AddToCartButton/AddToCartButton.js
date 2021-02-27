import React from 'react';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';
import styles from './AddToCartButton.module.css';

const AddToCartButton = function({ name, price }) {

  return (
    <div>
      <button className={styles.btn} onClick={() => shoppingCartVar([...shoppingCartVar(), { title: name, price }])}>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;