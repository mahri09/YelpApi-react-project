import React, { Component } from 'react';
import './Business.css';

const business = {
  imageSrc: "./pizza.webp",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const {imageSrc, name, address, city, state, zipCode, category, rating, reviewCount} = business;
class Business extends Component {
  render() {
    return (
      <div className="Business">
      <div className="image-container">
        <img src={imageSrc} alt={category}/>
      </div>
      <h2>{name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{address}</p>
          <p>{city}</p>
          <p>{state} {zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">{rating} stars</h3>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>

    );
  }
}

export default Business;