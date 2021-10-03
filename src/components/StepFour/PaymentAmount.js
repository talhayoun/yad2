import React, { useEffect, useState } from 'react';

const PaymentAmount = ({ paymentAmount, setPaymentAmount, displayError }) => {

    const [error, setError] = useState(false);

    useEffect(() => {
        if (displayError[0]) setError(true);
        else setError(false);
    }, [displayError])

    return (
        <div className="stepfour-div">
            <h6>מספר תשלומים*</h6>
            <select value={paymentAmount} placeholder="בחירת מספר תשלומים" onChange={(e) => setPaymentAmount(e.target.value)} className={error ? "steps-error-input" : ""}>
                <option hidden="hidden" disabled="disabled">בחירת מספר תשלומים</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="גמיש">גמיש</option>
            </select>
            {error && <p className="step-two-error-message">שדה חובה מספר תשלומים</p>}
        </div>
    );
};

export default PaymentAmount;