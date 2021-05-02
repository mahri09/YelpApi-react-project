import React, { Component } from "react";
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
    this.renderSortByOptions= this.renderSortByOptions.bind(this)
  }

  sortByOptions = {
    "Best Match": "bestMatches",
    "Highest Rated": "highestRated",
    "Most Reviewed": "mostReviewed",
  };

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map((sortByOption)=>{
      console.log( this.sortByOptions[sortByOption])
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key = {sortByOptionValue}>{sortByOption}</li> 
    })
  }

  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href='www.#.com' >Let's Go</a>
        </div>
      </div>

    );
  }
}

export default SearchBar;
