import React from 'react';
import cocktail from './api/cocktail';
import './App.css';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';

class App extends React.Component {
  state = { drinks: [], selectedDrink: null };

  componentDidMount() {
    this.onTermSubmit('margarita');
  }

  onTermSubmit = async (term) => {
    const response = await cocktail.get(`/search.php?s=${term}`);
    this.setState({
      drinks: response.data.drinks,
      selectedDrink: response.data.drinks[0].strDrink
    });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <DrinkList drinks={this.state.drinks} />
        {this.state.selectedDrink}
      </div>
    );
  }
}

export default App;
