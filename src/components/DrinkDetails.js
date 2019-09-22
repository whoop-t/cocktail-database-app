import React from 'react';
import DrinkIngredient from './DrinkIngredient';
import DrinkMeasures from './DrinkMeasures';
import DrinkInstructions from './DrinkInstructions';
import './DrinkDetails.css';

const DrinkDetails = ({ drink }) => {
  if (!drink) {
    return <div>Loading..</div>;
  }

  return (
    <div class="col">
      <div class="col-sm-9">
        <div className="card">
          <img
            className="card-img-top"
            alt="Ingredient Card"
            src={drink.strDrinkThumb}
          />
          <div className="card-body">
            <h5 className="card-title">{drink.strDrink}</h5>
            <div className="card-text">
              <DrinkIngredient drink={drink} />
              <br />
              <DrinkMeasures drink={drink} />
              <br />
              <DrinkInstructions drink={drink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetails;
