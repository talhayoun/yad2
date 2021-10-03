import React, { useState } from 'react';

const SignUpSecondForm = ({ firstName, setFirstName, lastName, setLastName, phone, setPhone, onFormSubmit }) => {


    return (
        <form onSubmit={onFormSubmit}>
            <h2>היי, נעים להכיר</h2>
            <label>שם פרטי*</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="הקלדת שם פרטי" required />
            <label>שם משפחה*</label>
            <div className="loginform-div-password">
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="הקלדת שם משפחה" required />
            </div>
            <label>מספר טלפון*</label>
            <div className="loginform-div-password">
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" required />
            </div>
            <div className="loginform-signup-firstdiv">
                <input type="checkbox" defaultChecked={true} />
                <p>קראתי ואישרתי את <span>תקנון</span> האתר*</p>
            </div>
            <div className="loginform-signup-seconddiv">
                <input type="checkbox" />
                <p>אני רוצה לקבל דיוור פרסומי כללי מיד2</p>
            </div>
            <button className="login-button">סיום הרשמה</button>
        </form>
    )
}
export default SignUpSecondForm;