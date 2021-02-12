import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DOGS } from '../../graphql/queries/get_dogs';
import { shoppingCartVar } from '../ShoppingCart/reactiveVars';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const DogsList = function() {

  const { error, data } = useQuery(GET_DOGS);

  if (error) {
    return (
      <div>Oops - there was an error.</div>
    )
  }

  const style = {
    display: 'flex',
    flexDirection: 'row',
  };

  const dogInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
  };

  const currentCartItems = shoppingCartVar();

  return (
    <div style={style}>
      {data.dogs.map(dog => {
        return (
          <div key={`id-${dog.name}`}>
            <div style={dogInfoStyles}>
              <div><strong>Name:</strong> {dog.name}</div>
              <div><strong>Age:</strong> {dog.age}</div>
              <div><strong>Breed:</strong> {dog.breed}</div>
              <AddToCartButton name={dog.name} />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default DogsList;