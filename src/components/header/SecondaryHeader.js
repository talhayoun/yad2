import React from 'react';

const SecondaryHeader = () => {

    return (
        <div className="secondaryheader">
            <div className="secondaryheader-div-one">
                <p>מכירה</p>
                <p>השכרה</p>
                <p>דירות שותפים</p>
                <p>נדל"ן מסחרי</p>
            </div>
            <div className="secondaryheader-div-two">
                <div className="secondary-div-two-hammer">
                    <div className="secondaryheader-img-style"></div>
                    <p>כונס נכסים</p>
                </div>
                <div className="secondary-div-two-smalldoron">
                    <div className="secondaryheader-img-style"></div>
                    <p>דורון - העוזר האישי</p>
                </div>
                <div className="secondary-div-two-yad1">
                    <div className="secondaryheader-img-style"></div>
                    <p>יד1 דירות חדשות</p>
                </div>
                <div className="secondary-div-two-yadata div">
                    <div className="secondaryheader-img-style"></div>
                    <p>הערכת שווי נכס</p>
                </div>
            </div>
        </div>
    );
};

export default SecondaryHeader;