import React, { useEffect, useState } from 'react';

const LoginModalSignUpSecond = ({ firstName, setFirstName, lastName, setLastName, phone, setPhone, numberingPhone, setNumberingPhone, checkbox, setCheckBox, onFormSubmit }) => {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("")
    // const [phone, setPhone] = useState("");
    // const [numberingPhone, setNumberingPhone] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);
    // const [checkbox, setCheckBox] = useState(false);

    const [errors, setErrors] = useState([false, false, false, false, true]);
    const [errorsMsg, setErrorsMsg] = useState(["", "", "", "", "שדה חובה"])

    const verifyField = (index, nameValue, message) => {
        const copyErrors = [...errors];
        const copyErrorsMsg = [...errorsMsg];
        console.log(nameValue.length, "#")
        if (nameValue.length > 0) {
            copyErrors[index] = false;
            copyErrorsMsg[index] = "";
        } else {
            copyErrors[index] = true;
            copyErrorsMsg[index] = message;
        }

        setErrors(copyErrors);
        setErrorsMsg(copyErrorsMsg);
    }

    useEffect(() => {
        if (!errors[0] && !errors[1] && !errors[2] && !errors[3] && !errors[4]) {
            setDisabledButton(false)
        } else {
            console.log("nope")
        }
    }, [errors])


    return (
        <div className="loginmodal-signup-second signup-modal">
            <form onSubmit={onFormSubmit}>
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
                <label>שם פרטי</label>
                <input
                    placeholder="הקלד שם פרטי"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => verifyField(0, firstName, "שדה חובה")}
                    className={errors[0] ? "steps-error-input" : ""}
                />
                {errors[0] && <p className="step-two-error-message">{errorsMsg[0]}</p>}
                <label className="loginmodal-password-label">שם משפחה</label>
                <input
                    placeholder="הקלד שם משפחה"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={() => verifyField(1, lastName, "שדה חובה")}
                    className={errors[1] ? "steps-error-input" : ""}
                />
                {errors[1] && <p className="step-two-error-message">{errorsMsg[1]}</p>}
                <label className="loginmodal-password-label">מספר טלפון</label>
                <div className="loginmodal-secondform-phonediv">
                    <input
                        placeholder="טלפון"
                        value={phone}
                        onChange={(e) => setPhone(isNaN(e.target.value) ? phone : e.target.value)}
                        onBlur={() => verifyField(2, phone, "שדה חובה")}
                        className={errors[2] ? "steps-error-input" : ""}
                    />
                    <div className="loginmodal-secondform-selectdiv">
                        <select
                            defaultValue="קידומת"
                            onChange={(e) => setNumberingPhone(e.target.value)}
                            onBlur={() => verifyField(3, numberingPhone, "שדה חובה")}
                            className={errors[3] ? "steps-error-input" : ""}
                        >
                            <option hidden="hidden" disabled="disabled" selected>קידומת</option>
                            <option value="050">050</option>
                            <option value="051">051</option>
                            <option value="052">052</option>
                            <option value="053">053</option>
                            <option value="054">054</option>
                            <option value="055">055</option>
                            <option value="058">058</option>
                        </select>
                        {errors[3] && <p className="step-two-error-message secondform-select-error">{errorsMsg[3]}</p>}
                    </div>
                    {errors[2] && <p className="step-two-error-message">{errorsMsg[2]}</p>}
                </div>
                <div className="loginmodal-secondform-checkbox">
                    <input
                        type="checkbox"
                        onChange={() => setCheckBox(!checkbox)}
                        onBlur={() => setErrors([errors[0], errors[1], errors[2], errors[3], !checkbox])}
                    />
                    <p>קראתי ומאשר את <span> תקנון</span> האתר</p>
                </div>
                {errors[4] && <div className="step-two-error-message"> {errorsMsg[4]}</div>}
                <div className="loginmodal-secondform-checkbox">
                    <input type="checkbox" />
                    <p>מאשר קבלת דיוור פרסומי כללי מיד 2</p>
                </div>
                <button
                    type="submit"
                    disabled={disabledButton}
                    className={disabledButton ? "loginmodal-secondform-button-disbaled" : ""}
                >שלח</button>
            </form>
        </div>
    );
};

export default LoginModalSignUpSecond;