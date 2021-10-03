import React, { useEffect, useState } from 'react';

const Input = ({ header, placeholder, func, must, displayError }) => {

    const [error, setError] = useState(false)


    useEffect(() => {
        if (displayError[1]) {
            console.log("bla")
        }
    }, [displayError])

    useEffect(() => {
        if (must) {
            if (displayError[1]) setError(true);
            else setError(false);
        }
    }, [displayError, must])

    return (
        <div className="stepfour-div">
            <h6>{header}</h6>
            <input className={error ? "steps-error-input" : ""} placeholder={placeholder} onChange={(e) => func(e.target.value)} />
            {error && <p className="step-two-error-message">שדה חובה גודל במ"ר סך הכל</p>}
        </div>
    )
}
export default Input;