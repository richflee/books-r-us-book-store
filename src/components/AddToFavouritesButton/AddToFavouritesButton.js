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

  const [mutate] = useMutation(TOGGLE_FAVOURITE, 
    {
      update (cache, { data }) {
        console.log('data', data);
        const newFavFromResponse = data?.toggleFavourite;
        const existingFavs = cache.readQuery({
          query: GET_FAVOURITE_BOOKS,
        });

        if (existingFavs.favouriteBooks && newFavFromResponse) {

          if (newFavFromResponse.isFavourite) {
            cache.writeQuery({
              query: GET_FAVOURITE_BOOKS,
              data: {
                favouriteBooks: [
                    ...existingFavs.favouriteBooks,
                    { __typename: 'Book', ...newFavFromResponse },
                  ],
              },
            });
          } else {

            const updatedFavs = existingFavs.favouriteBooks.filter(fb => fb.bookId !== newFavFromResponse.bookId);

            cache.writeQuery({
              query: GET_FAVOURITE_BOOKS,
              data: {
                favouriteBooks: updatedFavs,
              },
            });
          }
          
        }
      }
    }
  );

  const toggleFavourite = () => {
    mutate({ variables: { bookId: book.bookId } });
  };

  console.log('isFav', book.isFavourite, book.title);

  const buttonText = book.isFavourite ? "Remove from favs" : "Add to favs";

  return (
    <div>
      <button className={classNames(styles.btn, { [styles.activeState]: book.isFavourite })}
        onClick={() => toggleFavourite()}>{buttonText}</button>
    </div>
  );
};

export default AddToFavouritesButton;