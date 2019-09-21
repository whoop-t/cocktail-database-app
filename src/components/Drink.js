import React from 'react';

const Drink = ({ drink, onDrinkSelect }) => {
  return (
    <div onClick={() => onDrinkSelect(drink)} className="card">
      <img class="card-img-top" src={drink.strDrinkThumb} />
      <div className="card-body">
        <h5 class="card-title">{drink.strDrink}</h5>
        <p class="card-text">{drink.strIngredient1}</p>
        <p class="card-text">{drink.strIngredient2}</p>
        <p class="card-text">{drink.strIngredient3}</p>
      </div>
    </div>
  );
};

export default Drink;
