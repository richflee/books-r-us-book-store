import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOPPING_CART_ITEMS } from '../../graphql/queries/get_shopping_cart';

const ShoppingCart = () => {

  const { error, data } = useQuery(GET_SHOPPING_CART_ITEMS);

  const style = {
    display: 'flex',
    flexDirection: 'column',
  };
  console.log('data', data);

  return (
    <Fragment>
      <h3>Your cart</h3>
      {/* <h4>person: {data.person?.name}</h4> */}
      <div style={style}>
        {data.cartItems.map((cartItem, index) => {
          return (
            <div key={`${index}-${cartItem.title}`}>
              <div>
                <div><strong>Item:</strong> {cartItem.title}</div>
                <div><strong>Quantity:</strong> {cartItem.quantity}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  );
};

export default ShoppingCart;