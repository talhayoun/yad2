import React, { useState } from 'react';
import { checkUserExists } from '../../server/UserRequests';

const LoginModalSignUpFirst = ({ setSignIn, setFirstForm, password, setPassword, email, setEmail }) => {

    const [errors, setErrors] = useState([false, false, false]);
    const [errorsMsg, setErrorsMsg] = useState(["", "", ""]);

    const [repeatPassword, setRepeatPassword] = useState("");



    const [passwordClass, setPasswordClass] = useState("loginmodal-viewpass")
    const [passwordType, setPasswordType] = useState('password');

    const [repeatPasswordClass, setRepeatPasswordClass] = useState("loginmodal-viewpass")
    const [repeatPasswordType, setRepeatPasswordType] = useState('password');

    const onClickViewPass = (passType) => {
        if (passType === "password") {
            setPasswordClass(passwordClass === "loginmodal-viewpass" ? "loginmodal-disablepass" : "loginmodal-viewpass")
            setPasswordType(passwordType === "password" ? "text" : "password")
        } else {
            setRepeatPasswordClass(repeatPasswordClass === "loginmodal-viewpass" ? "loginmodal-disablepass" : "loginmodal-viewpass")
            setRepeatPasswordType(repeatPasswordType === "password" ? "text" : "password");
        }
    }

    const verifyEmail = (text) => {
        setEmail(text);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isEmailValid = re.test(email);
        if (!isEmailValid) {
            setErrors([true, errors[1], errors[2]]);
            setErrorsMsg(["אימייל לא תקין", errorsMsg[1], errorsMsg[2]])
        } else {
            setErrors([false, errors[1], errors[2]]);
            setErrorsMsg(["", errorsMsg[1], errorsMsg[2]]);
        }
    }

    const verifyPassword = (pass) => {
        setRepeatPassword(pass)
        if (password !== pass) {
            setErrors([errors[0], true, errors[2]]);
            setErrorsMsg([errorsMsg[0], "סיסמאות לא זהות", errorsMsg[2]])
        } else if (password === pass) {
            setErrors([errors[0], false, errors[2]]);
            setErrorsMsg([errorsMsg[0], "", errorsMsg[2]]);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!errors[0] && !errors[1]) {
            checkUserExists(email).then(
                (res) => {
                    if (res.message === 'False') {
                        setErrors([errors[0], errors[1], false]);
                        setErrorsMsg([errorsMsg[0], errorsMsg[1], ""]);
                        setFirstForm(false);
                    } else {
                        setErrors([errors[0], errors[1], true])
                        setErrorsMsg([errorsMsg[0], errorsMsg[1], "משתמש קיים במערכת, אנא נסה להתחבר"]);
                    }
                },
                (err) => {
                    console.log(err)
                }
            )
        }
        // signUpUser()
    }

    return (
        <div className="loginmodal-logindata signup-modal">
            <form onSubmit={onFormSubmit}>
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
                <label>כתובת מייל</label>
                <div className={errors[0] ? "steps-error-input" : ""}>
                    <input type="email" value={email} onChange={(e) => verifyEmail(e.target.value)} required />
                </div>
                {errors[0] && <p className="step-two-error-message">{errorsMsg[0]}</p>}
                <label className="loginmodal-password-label">סיסמה</label>
                <div className="loginmodal-password-div">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordType} required />
                    <div className={passwordClass} onClick={() => onClickViewPass('password')}></div>
                </div>
                <div className={errors[1] ? "loginmodal-password-div steps-error-input" : "loginmodal-password-div"}>
                    <input placeholder="חזור על הסיסמה שהקדלת" value={repeatPassword} onChange={(e) => verifyPassword(e.target.value)} type={repeatPasswordType} required />
                    <div className={repeatPasswordClass} onClick={() => onClickViewPass('repeatPassword')}></div>
                </div>
                {errors[1] && <p className="step-two-error-message">{errorsMsg[1]}</p>}
                {errors[2] && <p className="step-two-error-message">{errorsMsg[2]}</p>}
                <button type="submit">המשך</button>
                <p className="loginmodal-notregisited">כבר רשום? <span onClick={() => setSignIn(true)}>להתחברות</span></p>
            </form>
        </div>
    );
};

export default LoginModalSignUpFirst;