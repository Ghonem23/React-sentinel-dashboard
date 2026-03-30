//Dashboard.js

import React, { Component } from 'react';
import ServiceCard from './ServiceCard';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
        <div className='dashboard-container'>
            <ServiceCard serviceName= "Auth-API"/>
            <ServiceCard serviceName= "Payment-Gateway"/>
            <ServiceCard serviceName= "Inventory-DB"/>
        </div>
    )
  }
}
