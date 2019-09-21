import React from 'react';

const DrinkDetails = ({ drink }) => {
  if (!drink) {
    return <div>Loading..</div>;
  }

  return <div>{drink.strDrink}</div>;
};

export default DrinkDetails;
