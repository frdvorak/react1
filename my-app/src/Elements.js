import React from 'react';

const Elements = ({elements, deleteElement}) => {
    //const { elements } = props;  //destructuring
    //const elementList = elements.map(element => {
        // if (element.strength > 4) {
        //     return (
        //         <div className='element' key={ element.id }>
        //             <div>Name: { element.name }</div>
        //             <div>Color: { element.color }</div>
        //             <div>Strength: { element.strength }</div>
        //         </div>
        //     )
        // } else {
        //     console.log(element.strength)
        //     return null
        // }
    //})
 
    
    return(
        <div className="element-list">
            {
               elements.map(element => {
                return element.strength < 50 ? (
                    <div className='element' key={ element.id }>
                        <div>Name: { element.name }</div>
                        <div>Color: { element.color }</div>
                        <div>Strength: { element.strength }</div>
                        <button onClick={() => {deleteElement(element.id)}}>Delete element</button>
                    </div>
                ) : null;
                })
            }
        </div>
    )
}

export default Elements;