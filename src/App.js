import React from 'react';
import cocktail from './api/cocktail';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    cocktail.get('/search.php?s=margarita');
  }

  render() {
    return <div>TEST</div>;
  }
}

export default App;
