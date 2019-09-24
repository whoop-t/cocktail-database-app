import React from 'react';
import DrinkIngredient from './DrinkIngredient';
import DrinkMeasures from './DrinkMeasures';
import DrinkInstructions from './DrinkInstructions';

const DrinkDetails = ({ drink }) => {
  if (!drink) {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">No Results</h1>
          <p class="lead">Please check spelling or try another drink.</p>
        </div>
      </div>
    );
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
