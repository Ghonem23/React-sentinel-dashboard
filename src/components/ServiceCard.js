// ServiceCard.js
import React, { Component } from 'react'

export class ServiceCard extends React.PureComponent {

  // Constructor
  constructor (props) {
    super(props);
    this.state = {
        status : "Online",
        uptime : 0
    };
  }

  render() {
        return (
        <div className="service-card">  
            <h3> {this.props.serviceName} </h3>
            <p> {this.state.uptime} </p>
            <p> {this.state.status} </p>
        </div>
        );
    }
}

export default ServiceCard;
