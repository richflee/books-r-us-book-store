import React from 'react';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';

const AddToCartButton = function({ name }) {
  return (
    <div>
      <button onClick={() => shoppingCartVar([...shoppingCartVar(), { title: name, quantity: 3 }])}>Add dog</button>
    </div>
  );
};

export default AddToCartButton;