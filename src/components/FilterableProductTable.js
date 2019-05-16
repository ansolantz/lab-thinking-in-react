import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: this.props.productsArray,
      productsInStock: false
    };
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <h1>Iron Store</h1>
        <SearchBar />
        <ProductTable products={this.state.product} />
      </div>
    )
  };
}
export default FilterableProductTable;