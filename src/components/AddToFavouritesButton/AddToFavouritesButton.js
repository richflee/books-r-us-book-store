import { gql, useMutation } from '@apollo/client';
import React from 'react';
import styles from './AddToFavouritesButton.module.css';
import { GET_FAVOURITE_BOOKS } from '../../graphql/queries/get_favourite_books';
import classNames from "classnames";

export const TOGGLE_FAVOURITE = gql`
  mutation ToggleFavourite ($bookId: String!) {
    toggleFavourite(bookId: $bookId) {
      bookId
      title
      genre
      price
      isFavourite
      author {
        id
        name
      }
    }
  }
`

const AddToFavouritesButton = function({ book }) {

  const [toggleFavourite] = useMutation(TOGGLE_FAVOURITE);

  const onClick = function(event) {
    event.stopPropagation();
    toggleFavourite({ variables: { bookId: book.bookId } });
  };

  const buttonText = book.isFavourite ? "Remove from favs" : "Add to favs";

  return (
    <div>
      <button className={classNames(styles.btn, { [styles.activeState]: book.isFavourite })}
        onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default AddToFavouritesButton;