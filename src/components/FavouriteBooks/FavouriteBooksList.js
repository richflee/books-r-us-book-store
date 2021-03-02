import React from 'react';
import { useQuery } from '@apollo/client';
import styles from './FavouriteBooksList.module.css';
import Truncate from 'react-truncate';
import { GET_FAVOURITE_BOOKS } from '../../graphql/queries/get_favourite_books';

const FavouriteBooksList = function() {

  const { error, data, loading } = useQuery(GET_FAVOURITE_BOOKS);

  if (loading) {    
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    console.log('error', error);
    return (
      <div>Oops - there was an error.</div>
    )
  }

  return (
    <div>
      <h3>Favourites</h3>
      <ul className={styles.productList}>
        {data.favouriteBooks.map(book => {
          return (
            <li key={`id-${book.title}`}>
              <div className={styles.infoListContainer}>
                <ul className={styles.infoList}>
                  <li>
                    <Truncate lines={1} ellipsis={<span>...</span>}>
                      {book.title}
                    </Truncate>
                  </li>
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default FavouriteBooksList;