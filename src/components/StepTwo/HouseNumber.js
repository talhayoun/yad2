import React, { useEffect, useState } from 'react';

const HouseNumber = ({setHouseNumberValue, houseNumberValue, streetValue, displayError}) => {
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(displayError[3]) setError(true);
        else setError(false);
    },[displayError])
    
    const verifyField = (value, param) => {
        if(!isNaN(value) && value.toString().length < 4) {
            param(Math.abs(value));
        }
    }

    return(
        <div>
            <h6 className={streetValue === "" ? "steps-disabled-header" : ""}>מס' בית*</h6>
            <input className={streetValue === "" ? `steptwo-housenumber steps-disabled-input ${error ? "steps-error-input" : ""}` : `steptwo-housenumber ${error ? "steps-error-input" : ""}`}
                disabled={streetValue === "" ? true : false}
                value={houseNumberValue}
                onChange={(e) => verifyField(e.target.value, setHouseNumberValue)} 
                onBlur={() => houseNumberValue.toString().length > 0 ? setError(false) : setError(true)}
            />
            {error && <p className="step-two-error-message">שדה חובה מס' דירה</p>}
        </div>
    );
};

export default HouseNumber;