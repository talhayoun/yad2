import React, { useState } from 'react';

const SignUpSecondForm = ({ firstName, setFirstName, lastName, setLastName, phone, setPhone, checkbox, setCheckBox, onFormSubmit }) => {

    const [errors, setErrors] = useState([false, false, false]);
    const [errorsMsg, setErrorsMsg] = useState(["", "", "",]);

    const verifyField = (index, nameValue, minLength) => {
        const copyErrors = [...errors];
        const copyErrorsMsg = [...errorsMsg];
        console.log(nameValue.length, "#")
        if (nameValue.length > 0) {
            copyErrors[index] = false;
            copyErrorsMsg[index] = "";
        } else {
            console.log("er yep")
            copyErrors[index] = true;
            copyErrorsMsg[index] = "שדה חובה";
        }

        setErrors(copyErrors);
        setErrorsMsg(copyErrorsMsg);
    }


    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log("bla")
        verifyField(0, firstName, 2)
        verifyField(1, lastName, 2)
        verifyField(2, phone, 9)
        if (firstName.length > 1 && lastName.length > 1 && phone.length > 8) {
            onFormSubmit(e)
            console.log("glallala")
        }
    }

    return (
        <form>
            <h2>היי, נעים להכיר</h2>
            <label>שם פרטי*</label>
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="הקלדת שם פרטי"
                onBlur={() => verifyField(0, firstName, 2)}
                className={errors[0] ? "steps-error-input" : ""}
            />
            {errors[0] && <p className="step-two-error-message">{errorsMsg[0]}</p>}
            <label>שם משפחה*</label>
            <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="הקלדת שם משפחה"
                onBlur={() => verifyField(1, lastName, 2)}
                className={errors[1] ? "steps-error-input" : ""}
            />
            {errors[1] && <p className="step-two-error-message">{errorsMsg[1]}</p>}
            <label>מספר טלפון*</label>
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                onBlur={() => verifyField(2, phone, 9)}
                className={errors[2] ? "steps-error-input" : ""}
            />
            {errors[2] && <p className="step-two-error-message">{errorsMsg[2]}</p>}
            <div className="loginform-signup-firstdiv">
                <input type="checkbox" checked={checkbox} onChange={() => setCheckBox(!checkbox)} />
                <p>קראתי ואישרתי את <span>תקנון</span> האתר*</p>
            </div>
            <div className="loginform-signup-seconddiv">
                <input type="checkbox" />
                <p>אני רוצה לקבל דיוור פרסומי כללי מיד2</p>
            </div>
            <button onClick={onSubmitForm} className="login-button">סיום הרשמה</button>
        </form>
    )
}
export default SignUpSecondForm;