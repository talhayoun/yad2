import React, { useEffect, useState } from 'react';
import PropertyAfter from './PropertyAfter';
import PropertyBefore from './PropertyBefore';
import PropertyExtra from './PropertyExtra';

const Property = (props) => {


    const [extraData, setExtraData] = useState(false);

    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <>
            {!extraData && <PropertyBefore data={{ ...props.data }} setExtraData={setExtraData} extraData={extraData} />}
            {extraData && <PropertyAfter data={{ ...props.data }} setExtraData={setExtraData} extraData={extraData} />}
            {extraData && <PropertyExtra data={props.data} />}
        </>
    );
};
//                {extraData && <button className="property-three-phone">להצגת מספר טלפון</button>}
export default Property;