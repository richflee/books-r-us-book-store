import { gql, useMutation } from '@apollo/client';
import React from 'react';
import styles from './AddToFavouritesButton.module.css';

export const TOGGLE_FAVOURITE = gql`
  mutation ToggleFavourite ($bookId: String!) {
    toggleFavourite(bookId: $bookId) {
      bookId
      title
      genre
      price
      author {
        id
        name
      }
    }
  }
`

const AddToFavouritesButton = function({ book }) {

  const [mutate] = useMutation(TOGGLE_FAVOURITE);

  const toggleFavourite = () => {
    mutate({ variables: { bookId: book.bookId } });
  };

  return (
    <div>
      <button className={styles.btn} onClick={() => toggleFavourite()}>Add to favs</button>
    </div>
  );
};

export default AddToFavouritesButton;