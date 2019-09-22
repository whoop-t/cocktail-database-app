import React from 'react';
import Drink from '../components/Drink';

const DrinkList = ({ drinks, onDrinkSelect }) => {
  const renderDrinks = drinks.map((drink) => {
    return (
      <Drink key={drink.idDrink} drink={drink} onDrinkSelect={onDrinkSelect} />
    );
  });

  return <div>{renderDrinks}</div>;
};

export default DrinkList;
