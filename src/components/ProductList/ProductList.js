import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../graphql/queries/get_books';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';
import { useHistory } from "react-router-dom";

const ProductList = function() {

  const { error, data, loading } = useQuery(GET_BOOKS);
  const history = useHistory();

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

  const gridItemClickHandler = (event) => {
    event.preventDefault();
    history.push("/product");
  };

  return (
    <ul className={styles.productList}>
      {data.books.map(book => {
        return (
          <li key={`id-${book.title}`} onClick={gridItemClickHandler}>
            <ProductCard book={book} />
          </li>
        )
      })}
    </ul>
  );
};

export default ProductList;