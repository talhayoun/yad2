import React, { useState } from 'react';
import Property from './Property';

const PropertyBody = () => {

    const [arrow, setArrow] = useState("arrow-down")

    const changeArrowStyle = () => {
        setArrow(arrow === "arrow-down" ? "arrow-up" : "arrow-down");
    }

    return (
        <div className="propertybody">
            <div className="propertybody-topheader">
                <h1>נדל"ן להשכרה</h1>
                <p>מציג X מודעות</p>
            </div>
            <div className="propertybody-filter">
                <div className="propertybody-filterby-container">
                    <p>מיין לפי</p>
                    <div className="propertybody-filterby" onClick={changeArrowStyle}>
                        <p>לפי תאריך</p>
                        <div className={arrow}></div>
                    </div>
                </div>
                <div className="propertybody-filterby-container-two">
                    <div className="propertybody-filterby-container-two-first">
                        <div></div>
                        <p>סנן תוצאות</p>
                    </div>
                    <div className="propertybody-filterby-container-two-second">
                        <div></div>
                        <p>סנן תוצאות</p>
                    </div>
                </div>
            </div>
            <Property />
        </div>
    );
};

export default PropertyBody;