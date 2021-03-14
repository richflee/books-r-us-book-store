import React from 'react';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';
import styles from './AddToCartButton.module.css';

const AddToCartButton = function({ name, price }) {

  const clickFn = function(event) {
    event.stopPropagation();
    shoppingCartVar([...shoppingCartVar(), { title: name, price }]);
  }

  return (
    <div>
      <button className={styles.btn} onClick={clickFn}>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;