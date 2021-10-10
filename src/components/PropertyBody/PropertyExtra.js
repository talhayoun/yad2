import React, { useEffect } from 'react';
import PropertyExtraData from './PropertyExtraData';

const PropertyExtra = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div className="property-extra">
            <div className="property-extra-ad">
                <div className="property-extra-ad-one"></div>
                <div className="property-extra-ad-two"></div>
                <div className="property-extra-ad-three"></div>
            </div>
            <PropertyExtraData data={props.data} />
        </div>
    );
};

export default PropertyExtra;