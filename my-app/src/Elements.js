import React, { Component } from 'react';

class Elements extends Component {
    render(){
        const { elements } = this.props;  //destructuring
        const elementList = elements.map(element => {
            return (
                <div className='element' key={ element.id }>
                <div>Name: { element.name }</div>
                <div>Color: { element.color }</div>
                <div>Strength: { element.strength }</div>
            </div>
            )
        })
        return(
            <div className="element-list">
                { elementList }
            </div>
        )
    }
}

export default Elements;