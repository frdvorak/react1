import React, { Component } from 'react';

class Elements extends Component {
    render(){
        const { name, color, strength } = this.props;  //destructuring
        return(
            <div className='element'>
                <div>Name: { name }</div>
                <div>Color: { color }</div>
                <div>Strength: { strength }</div>
            </div>
        )
    }
}

export default Elements;