import React, { useEffect, useState } from 'react';

const Floor = ({ assetType, floorNumber, totalFloorNumbers, setFloorNumber, setTotalFloorNumbers, displayError }) => {
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [errors, setErrors] = useState([false, false]);
    const [errorsMsg, setErrorsMsg] = useState(["", ""]);

    useEffect(() => {
        let copyErrors = [...errors];
        let copyErrorsMsg = [...errorsMsg];
        if(displayError[4]){
            copyErrors[0] = true;
            copyErrorsMsg[0] = "שדה חובה"
        } 
        if(displayError[5])
        {
            copyErrors[0] = true;
            copyErrorsMsg[1] = "שדה חובה"
        }
        setErrors(copyErrors);
        setErrorsMsg(copyErrorsMsg)
    }, [displayError])

    const verifyField = (index, value, msg) => {
        let copyErrors = [...errors];
        let copyErrorsMsg = [...errorsMsg]
        let valueLength = value.toString().length;
        if(valueLength === 0 || valueLength > 4 || isNaN(value)){
            copyErrors[index] = true;
            copyErrorsMsg[index] = msg;
        }else{
            copyErrors[index] = false;
            copyErrorsMsg[index] = "";
        }

        if(value === totalFloorNumbers  || value === floorNumber){
            if(Number(totalFloorNumbers) < Number(floorNumber)){
                copyErrors[1] = true;
                copyErrorsMsg[1] = "חייב להיות גדול מקומות"
            }
        }

        setErrors(copyErrors);
        setErrorsMsg(copyErrorsMsg);
    }

    const verifyValue = (value, param) =>{
        if(!isNaN(value) && value.toString().length < 4){
            param(value);
        }
    }

    return (
        <div className="steptwo-floor-container">
            <div className="steptwo-floor-num">
                <h6 className={assetType === "דירה או אולי פנטהאוז" ? "steps-disabled-header" : ""}>קומה*</h6>
                <input
                    value={floorNumber}
                    className={assetType === "דירה או אולי פנטהאוז" ? `steps-disabled-input ${errors[0] ? "steps-error-input" : ""}` : `${errors[0] ? "steps-error-input" : ""}`}
                    disabled={assetType === "דירה או אולי פנטהאוז" ? true : false}
                    placeholder="הכנסת מספר קומה"
                    onChange={(e) => verifyValue(e.target.value, setFloorNumber)}
                    onBlur={()=> verifyField(0, floorNumber, "הכנס שדה תקין")}
                />
                {errors[0] && <p className="step-two-error-message">{errorsMsg[0]}</p>}
            </div>
            <div className="steptwo-floor-num">
                <h6 className={assetType === "דירה או אולי פנטהאוז" ? "steps-disabled-header" : ""}>סה"כ קומות בבניין*</h6>
                <input
                    value={totalFloorNumbers}
                    className={assetType === "דירה או אולי פנטהאוז" ? `steps-disabled-input ${errors[1] ? "steps-error-input" : ""}` : `${errors[1] ? "steps-error-input" : ""}`}
                    disabled={assetType === "דירה או אולי פנטהאוז" ? true : false}
                    placeholder='הכנסת סה"כ קומות'
                    onChange={(e) => verifyValue(e.target.value, setTotalFloorNumbers)}
                    onBlur={()=> verifyField(1, totalFloorNumbers, "הכנס שדה תקין")}
                />
                {errors[1] && <p className="step-two-error-message">{errorsMsg[1]}</p>}
            </div>
            <div className="steptwo-floor-check">
                <input type="checkbox" />
                <label>על עמודים</label>
            </div>
        </div>
    );
};

export default Floor;