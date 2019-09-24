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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
