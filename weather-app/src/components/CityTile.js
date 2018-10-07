import React from 'react';

const CityTile = (props) => {
       
        return ( 
            <span className="cityTile col-xs-6 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                <span className="inner" onClick={() => props.tileClick(props.city, props.country)}>
                    <h5>{props.name}</h5>
                </span>
            </span>
         );
}

 
export default CityTile;