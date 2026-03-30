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

// Start the Timer 
 componentDidMount() {
    this.timer = setInterval(() => {}, 1000);
    }

// Stop the Timer
    componentWillUnmount() {
        clearInterval(this.timer);
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
