import React from 'react';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';
import styles from './AddToCartButton.module.css';

const AddToCartButton = function({ name, price }) {

  const addHandler = () => {
    shoppingCartVar([...shoppingCartVar(), { title: name, price }]);
    console.log(shoppingCartVar());
  };

  return (
    <div>
      <button className={styles.btn} onClick={() => addHandler()}>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;