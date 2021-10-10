import React from 'react';

const Price = (props) => {
    return (
        <div className="property-three">
            <div className="property-three-newtab">
                <div></div>
                <p></p>
            </div>
            <div className="property-three-price">
                <p>{props.data.price} ₪</p>
            </div>
            <div className="property-three-update">
                <p></p>
            </div>
        </div>
    )
}
export default Price;