import React from 'react';

const Property = () => {
    return (
        <div className="property">
            <div className="property-one">
                <div className="property-one-first">
                    <div></div>
                    <div className="property-one-heart">
                        <div></div>
                        <div className="property-one-heart-seconddiv"></div>
                    </div>
                </div>
                <div className="property-one-second">
                    <p>ישראל טלר 11</p>
                    <p className="property-one-second-secondp">דירה, ב'/ צפון מערב העיר, רחובות</p>
                </div>

            </div>
            <div className="property-two">
                <div className="property-two-data">
                    <p>2</p>
                    <p>חדרים</p>
                </div>
                <div className="property-two-data">
                    <p>3</p>
                    <p>קומה</p>
                </div>
                <div className="property-two-data">
                    <p>50</p>
                    <p>מ"ר</p>
                </div>
            </div>
            <div className="property-three">
                <div className="property-three-newtab">
                    <div></div>
                    <p></p>
                </div>
                <div className="property-three-price">
                    <p>3150 ₪</p>
                </div>
                <div className="property-three-update">
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Property;