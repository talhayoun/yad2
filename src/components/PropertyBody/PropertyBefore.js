import React from 'react';
import Price from './Price';
import PropertyImageAndStreet from './PropertyImageAndStreet';
import SizeFloorRooms from './SizeFloorRooms';

const PropertyBefore = (props) => {
    return (
        <div className="property" onClick={() => props.setExtraData(!props.extraData)}>
            <PropertyImageAndStreet data={{ ...props.data }} />
            <SizeFloorRooms data={{ ...props.data }} />
            <Price data={{ ...props.data }} />
        </div>
    );
};

export default PropertyBefore;