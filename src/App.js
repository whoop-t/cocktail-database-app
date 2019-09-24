import React from 'react';
import cocktail from './api/cocktail';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';
import DrinkDetails from './components/DrinkDetails';

class App extends React.Component {
  state = { drinks: [], selectedDrink: null };

  componentDidMount() {
    this.onTermSubmit('margarita');
  }

  onTermSubmit = async (term) => {
    const response = await cocktail.get(`/search.php?s=${term}`);

    this.setState({
      drinks: response.data.drinks || [],
      selectedDrink: response.data.drinks && response.data.drinks[0]
    });
  };

  onDrinkSelect = (drink) => {
    this.setState({
      selectedDrink: drink
    });

    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <div className="">
          <div className="container">
            <h1 className="display-4 title-color">Cocktail Search</h1>
            <SearchBar onTermSubmit={this.onTermSubmit} />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-0">
              <div>
                <DrinkDetails drink={this.state.selectedDrink} />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col set-scroll hand-pointer"
              id="style-1"
            >
              <DrinkList
                drinks={this.state.drinks}
                onDrinkSelect={this.onDrinkSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
