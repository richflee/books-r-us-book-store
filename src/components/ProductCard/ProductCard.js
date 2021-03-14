import React from 'react';
import styles from './ProductCard.module.css';
import Truncate from 'react-truncate';
import AddToFavouritesButton from '../AddToFavouritesButton/AddToFavouritesButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = ({ book }) => {
  return (
    <div className={styles.infoListContainer}>
      <div className={styles.productImageContainer}>
        <img src="https://placedog.net/75/75" title="dog" />
      </div>
      <ul className={styles.infoList}>
        <li>
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {book.title}
          </Truncate>
        </li>
        <li>{book.genre}</li>
        <li>{book.price} BTC</li>
      </ul>
      <AddToCartButton name={book.title} price={book.price} />
      <AddToFavouritesButton book={book} />
    </div>
  );
};

export default ProductCard;