import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit} className="">
          <div className="form-group">
            <input
              className="form-control"
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
              placeholder="Margarita"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
