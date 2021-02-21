import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries/get_products';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './ProductList.module.css';

const ProductList = function() {

  const { error, data, loading } = useQuery(GET_PRODUCTS);

  if (loading) {    
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    return (
      <div>Oops - there was an error.</div>
    )
  }

  return (
    <ul className={styles.dogsList}>
      {data.products.map(product => {
        return (
          <li key={`id-${product.title}`}>
            <div className={styles.dogInfoListContainer}>
              <div className={styles.dogImageContainer}>
                <img src="https://placedog.net/75/75" title="dog" />
              </div>
              <ul className={styles.dogInfoList}>
                <li>{product.title}</li>
                <li>{product.category}</li>
                <li>{product.price} BTC</li>
              </ul>
              <AddToCartButton name={product.title} price={product.price} />
            </div>
          </li>
        )
      })}
    </ul>
  );
};

export default ProductList;