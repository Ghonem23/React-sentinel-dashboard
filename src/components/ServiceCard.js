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
    this.timer = setInterval(() => { 
        if (this.state.status === "Online") {
            if ( Math.random() < 0.05 ) {
                this.setState ({ status : "Offline" })
            } else {
                this.setState((prevState) => ({
                    uptime: prevState.uptime + 1
                }));
            }
        }
     }, 1000);
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
