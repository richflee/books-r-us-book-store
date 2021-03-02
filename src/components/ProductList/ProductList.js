import React from 'react';
import { useQuery } from '@apollo/client';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './ProductList.module.css';
import { GET_BOOKS } from '../../graphql/queries/get_books';

const ProductList = function() {

  const { error, data, loading } = useQuery(GET_BOOKS);

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
    <ul className={styles.productList}>
      {data.books.map(book => {
        return (
          <li key={`id-${book.title}`}>
            <div className={styles.infoListContainer}>
              <div className={styles.productImageContainer}>
                <img src="https://placedog.net/75/75" title="dog" />
              </div>
              <ul className={styles.infoList}>
                <li>{book.title}</li>
                <li>{book.category}</li>
                <li>{book.price} BTC</li>
              </ul>
              <AddToCartButton name={book.title} price={book.price} />
            </div>
          </li>
        )
      })}
    </ul>
  );
};

export default ProductList;