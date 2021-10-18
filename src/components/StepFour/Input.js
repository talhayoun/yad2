import React, { useEffect, useState } from 'react';

const Input = ({ header, placeholder, func, must, displayError, value }) => {

    const [error, setError] = useState(false)

    const verifyChange = (value, func) => {
        if(!isNaN(value) && value.toString().length < 5){
            console.log(value, func, "bla")
            func(Math.abs(value))
        }
    }

    useEffect(() => {
        console.log(value)
        if (must) {
            if (displayError[1]) setError(true);
            else setError(false);
        }
    }, [displayError, must])

    return (
        <div className="stepfour-div">
            <h6>{header}</h6>
            <input className={error ? "steps-error-input" : ""} value={value} placeholder={placeholder} onChange={(e) => verifyChange(e.target.value, func)} />
            {error && <p className="step-two-error-message">שדה חובה גודל במ"ר סך הכל</p>}
        </div>
    )
}
export default Input;