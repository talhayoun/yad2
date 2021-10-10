import React, { useEffect } from 'react';
import InfoItems from './InfoItems';
import Properties from './Properties';

const PropertyExtraData = (props) => {

    const getCorrectDate = () => {
        let date = props.data.date.split(" - ");
        let correctDate = `${date[0]}/${date[1]}/20${date[2]}`
        return correctDate
    }
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div className="propertyextradata">
            <h3>תיאור הנכס</h3>
            <p>{props.data.textarea}</p>
            <div className="propertyextra-infoitems-container">
                <InfoItems header={"תאריך כניסה"} dataInfo={getCorrectDate()} />
                <InfoItems header={"ועד בית(לחודש)"} dataInfo={props.data.houseCommitte} />
                <InfoItems header={"קומות בבנין"} dataInfo={props.data.floorNumber} />
                <InfoItems header={"מס תשלומים"} dataInfo={props.data.paymentAmount} />
                <InfoItems header={"ארנונה לחודשיים"} dataInfo={props.data.propertyTax} />
                <InfoItems header={"חניות"} dataInfo={props.data.parking} />
            </div>
            <div>
                <div className="propertyextradata-properties-container">
                    <h3>מה יש בנכס?</h3>
                    <p>האתר שכל משכיר חייב להכיר > </p>
                </div>
                <Properties props={props.data.properties} />

            </div>
        </div>
    );
};

export default PropertyExtraData;