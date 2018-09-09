import React from 'react';

const Elements = ({elements}) => {
    //const { elements } = props;  //destructuring
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

export default Elements;