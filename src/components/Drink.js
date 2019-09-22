import React from 'react';

const Drink = ({ drink, onDrinkSelect }) => {
  return (
    <div onClick={() => onDrinkSelect(drink)} className="card">
      <img className="card-img-top" alt="drink" src={drink.strDrinkThumb} />
      <div className="card-body">
        <h5 className="card-title">{drink.strDrink}</h5>
        <p className="card-text">{drink.strIngredient1}</p>
        <p className="card-text">{drink.strIngredient2}</p>
        <p className="card-text">{drink.strIngredient3}</p>
      </div>
    </div>
  );
};

export default Drink;
