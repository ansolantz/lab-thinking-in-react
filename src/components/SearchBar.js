import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div>Search</div>
        <div><input type="text" className="searchFrm" name="search" placeholder="Search" /></div>
        <div>
          <input name="productInStock" type="checkbox" checked="false" />
          Sow only products in stock
        </div>

      </div>
    );
  }
}

export default SearchBar;