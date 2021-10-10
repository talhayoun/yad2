import React, { useEffect } from 'react';

const Properties = ({ props }) => {

    useEffect(() => {
        console.log(props)
    })

    const checkClass = (property) => {
        let isChosen;
        for (let i = 0; i < props.length; i++) {
            if (property === props[i].property) {
                isChosen = true;
            }
        };
        if (isChosen)
            return ""
        else
            return "grey-out"
    }

    const properties = ["מיזוג", "מעלית", "מחסן", "לטווח ארוך", "לשותפים", "גישה לנכים", "חיות מחמד", "סורגים", "משופצת", "מזגן תדיראן", "מטבח כשר", 'ממ"ד', "ריהוט"]
    return (
        <div className="propertyextradata-properties-contianer">
            {properties.map((property, index) => (<div key={index} className={checkClass(property)}><p>{property}</p></div>))}
        </div>
    );
};

export default Properties;