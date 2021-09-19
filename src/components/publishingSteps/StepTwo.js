import React from 'react';

const StepTwo = () => {

    return(
        <>
        <div className="steptwo-header">
            <div className="steptwo-header-firstdiv">
                <span className="step-num">2</span>
                <h3>כתובת הכנס</h3>
            </div>
            <div className="steptwo-header-seconddiv">
                <h5><span>המלצה שלנו</span> העלאת וידאו של הנכס תמשוך יותר מתעניינים למודעה שלך</h5>
            </div>
        </div>
        <p>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</p>
        <form className="steptwo-form">
            <div>
                <h6>סוג הנכס*</h6>
                <select placeholder="דירה או אולי פנטהאוז?">
                    <option disabled="true" hidden="true">דירה או אולי פנטהאוז?</option>
                    
                </select>
            </div>
        </form>
        </>
    )
};

export default StepTwo;