import React, { useState } from 'react';
import StepContinueButton from './StepContinueButton';

const StepFour = ({ setStepsFinished }) => {

    const [paymentAmount, setPaymentAmount] = useState("בחירת מספר תשלומים")

    const onSubmitForm = (e) => {
        e.preventDefault();
        setStepsFinished([true, true, true, true, false, false, false])
    }
    return (
        <>
            <div className="stepfour-header">
                <div className="stepfour-header-firstdiv">
                    <span className="step-num">4</span>
                    <h3>תשלומים, תאריכים ועוד</h3>
                </div>
                <div className="stepfour-header-seconddiv">
                    <div></div>
                    <h5>גם לנו היה קשה להאמין!</h5>
                    <div>מודעות שעולות עם מחירים לא עגולים מוכרות מהר יותר</div>
                </div>
            </div>
            <form onSubmit={onSubmitForm} className="stepfour-form">
                <div>
                    <h6>מספר תשלומים*</h6>
                    <select value={paymentAmount} placeholder="בחירת מספר תשלומים" onChange={(e) => setPaymentAmount(e.target.value)}>
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
                        <option value="whatever">גמיש</option>
                    </select>
                </div>
                <div>
                    <h6>ועד בית</h6>
                    <input placeholder="הכנסת סכום תשלום לועד בית" />
                </div>
                <div>
                    <h6>ארנונה לחודשיים</h6>
                    <input placeholder="סכום הארנונה לתשלום" />
                </div>
                <div>
                    <h6>מ"ר בנוי</h6>
                    <input placeholder='כמה מ"ר יש בנכס' />
                </div>
                <div>
                    <h6>גודל במ"ר סך הכל *</h6>
                    <input />
                </div>
                <div>
                    <h6>מחיר</h6>
                    <input placeholder="סכום מינימלי 100" />
                </div>
                <div>
                    <h6>תאריך כניסה*</h6>
                    {/* Add here dates picker like the udemy video */}
                </div>
                <div className="stepfour-checkbox">
                    <input type="checkbox" />
                    <label>לטווח הארוך</label>
                </div>
                <StepContinueButton />
            </form>
        </>
    );
};

export default StepFour;