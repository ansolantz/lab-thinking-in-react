import React, { Component } from 'react';
import data from './data/data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div>
        {
          console.log(data)
        }
        <FilterableProductTable productsArray={data.data} />
      </div>
    );
  }
}

export default App;