import React from 'react';
import DrinkIngredient from './DrinkIngredient';
import DrinkMeasures from './DrinkMeasures';

const DrinkDetails = ({ drink }) => {
  if (!drink) {
    return <div>Loading..</div>;
  }

  return (
    <div className="card">
      <img class="card-img-top" src={drink.strDrinkThumb} />
      <div className="card-body">
        <h5 class="card-title">{drink.strDrink}</h5>
        <p class="card-text">
          <DrinkIngredient drink={drink} />
          <DrinkMeasures drink={drink} />
        </p>
      </div>
    </div>
  );
};

export default DrinkDetails;
