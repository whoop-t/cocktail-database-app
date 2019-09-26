import React from 'react';

const DrinkIngredient = ({ drink }) => {
  if (!drink) {
    return <div>Loading..</div>;
  }
  let endValues = [];
  let values = Object.values(drink);
  for (let i = 21; i < 36; i++) {
    if (values[i] !== '' && values[i] !== ' ' && values[i] !== null) {
      endValues.push(values[i]);
    }
  }
  return <div>{endValues.join(' / ')}</div>;
};

export default DrinkIngredient;
