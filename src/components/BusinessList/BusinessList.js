import React, { Component } from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends Component {
  render() {
    return (
      <div className='BusinessList'>
        <Business/>
      </div>
    );
  }
}

export default BusinessList;