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

// {
//   update (cache, { data }) {
//     const newTodoFromResponse = data?.addTodo.todo;
//     const existingTodos = cache.readQuery({
//       query: GET_ALL_TODOS,
//     });

//     if (existingTodos && newTodoFromResponse) {
//       cache.writeQuery({
//         query: GET_ALL_TODOS,
//         data: {
//           todos: {
//             edges: [
//               ...existingTodos?.todos.edges,
//               { __typename: 'TodosEdge', node: newTodoFromResponse },
//             ],
//           },
//         },
//       });
//     }
//   }
// }

const AddToFavouritesButton = function({ book }) {

  const [mutate, { data, error }] = useMutation(TOGGLE_FAVOURITE);

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