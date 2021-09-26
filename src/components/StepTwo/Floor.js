import React, { useEffect, useState } from 'react';

const Floor = ({assetType,floorNumber, totalFloorNumbers ,setFloorNumber, setTotalFloorNumbers, displayError}) => {
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    useEffect(()=>{
        if(displayError[4]) setError(true)
        else setError(false);

        if(displayError[5]) setError2(true)
        else setError2(true);
    }, [displayError])
    return (
        <div className="steptwo-floor-container">
            <div className="steptwo-floor-num">
                <h6 className={assetType === "דירה או אולי פנטהאוז" ? "steps-disabled-header" : ""}>קומה*</h6>
                <input
                    value={floorNumber}
                    className={assetType === "דירה או אולי פנטהאוז" ? `steps-disabled-input ${error ? "steps-error-input" : ""}` : `${error ? "steps-error-input" : ""}`}
                    disabled={assetType === "דירה או אולי פנטהאוז" ? true : false}
                    placeholder="הכנסת מספר קומה"
                    onChange={(e)=> setFloorNumber(e.target.value)}
                    onBlur={()=> floorNumber.length > 0 ? setError(false) : setError(true)}
                    />
                {error && <p className="step-two-error-message">שדה חובה קומה</p>}
            </div>
            <div className="steptwo-floor-num">
                <h6 className={assetType === "דירה או אולי פנטהאוז" ? "steps-disabled-header" : ""}>סה"כ קומות בבניין*</h6>
                <input
                    className={assetType === "דירה או אולי פנטהאוז" ? `steps-disabled-input ${error2 ? "steps-error-input" : ""}` : `${error2 ? "steps-error-input" : ""}`}
                    disabled={assetType === "דירה או אולי פנטהאוז" ? true : false}
                    placeholder='הכנסת סה"כ קומות'
                    onChange={(e)=> setTotalFloorNumbers(e.target.value)}
                    onBlur={()=> totalFloorNumbers.length > 0 ? setError2(false) : setError2(true)}
                    />
                {error2 && <p className="step-two-error-message">שדה חובה סה"כ קומות</p>}
            </div>
            <div className="steptwo-floor-check">
                <input type="checkbox" />
                <label>על עמודים</label>
            </div>
        </div>
    );
};

export default Floor;