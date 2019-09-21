import React from 'react';
import Drink from '../components/Drink';

const DrinkList = ({ drinks }) => {
  const renderDrinks = drinks.map((drink) => {
    return <Drink />;
  });

  return <div>{renderDrinks}</div>;
};

export default DrinkList;
