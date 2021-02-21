import React from 'react';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';
import styles from './AddToCartButton.module.css';

const AddToCartButton = function({ name, price }) {

  const style = {
    border: '1px solid #e85a4f',
    background: 'transparent',
    color: '#e85a4f',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '0.6em 1em',
  };

  return (
    <div>
      <button className={styles.btn} onClick={() => shoppingCartVar([...shoppingCartVar(), { title: name, price }])}>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;