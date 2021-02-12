import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DOGS } from '../../graphql/queries/get_dogs';
import { GET_SHOPPING_CART_ITEMS } from '../../graphql/queries/get_shopping_cart';

const Header = () => {

  const { error, data } = useQuery(GET_SHOPPING_CART_ITEMS);

  const style = {
    alignItems: 'center',
    background: 'darkblue',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.3em 1em'
  };

  const rightSideStyle = {
    flexGrow: '1',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '175px'
  };

  const cartWrapperStyle = {
    display: 'flex',
  };

  const headerWrapperStyle = {
    background: 'pink',
    flexGrow: '6',
  };

  const cartNumberBadgeStyle = {
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    width: '30px',
    padding: '0'
  };

  const spanStyle = {
    display: 'inline-block',
    verticalAlign: 'middle'
  };

  if (error) {
    console.log('error', error);
    return (
      'bla'
    )
  }

  console.log('xx', data);

  return (
    <div style={style}>
      <div style={headerWrapperStyle}>
        <h2>Dog pound</h2>
      </div>
      <div style={rightSideStyle}>
        <div>Hello, Rich!</div>
        <div style={cartWrapperStyle}>
          <div style={cartNumberBadgeStyle}>
            <span style={spanStyle}>{data.cartItems.length}</span>
          </div>{' '}Cart 
        </div>
      </div>
    </div>
  );
};

export default Header;