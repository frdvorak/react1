import React, { Component } from 'react';

class Weather extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {this.props.city && this.props.country && <p>location: {this.props.city} {this.props.country}</p>}
            {this.props.temperature && <p>temperature: {this.props.temperature}</p>}
            {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
            {this.props.conditions && <p>conditions: {this.props.conditions}</p>}
            {this.props.description && <p>description: {this.props.description}</p>}
            {this.props.error && <p>{this.props.error}</p>}
            </div>
         );
    }
}
 
export default Weather;