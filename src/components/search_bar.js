import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={ term: "" };
  }

  render() {
    return (
      <form className="search-bar">
        <input className="col-7" placeholder="Search for Crime" type="search" value=""></input>
        <button type="submit">Search</button>
      </form>
  );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
 };

export default SearchBar;
