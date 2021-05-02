import React, { Component } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}

export default App;