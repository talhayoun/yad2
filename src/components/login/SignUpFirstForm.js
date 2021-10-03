import React, { useState } from 'react';
import { checkUserExists } from '../../server/UserRequests';

const SignUpFirstForm = ({ email, setEmail, password, setPassword, setFirstFormClicked, setSignup }) => {

    const [passwordType, setPasswordType] = useState("text");
    const [repeatedPasswordType, setRepeatedPasswordType] = useState("text");
    const [viewwPasswordClass, setViewPasswordClass] = useState("view-password");
    const [viewwRepeatedPasswordClass, setRepeatedViewPasswordClass] = useState("view-password");

    const [emailExistError, setEmailExistError] = useState(false);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [repeatPassword, setRepeatedPassword] = useState("");


    const onClickViewPassword = (type) => {
        if (type === "password") {
            setViewPasswordClass(viewwPasswordClass === "view-password" ? "view-password-disabled" : "view-password");
            setPasswordType(passwordType === "text" ? "password" : "text");
        } else {
            console.log("gggg")
            setRepeatedViewPasswordClass(viewwRepeatedPasswordClass === "view-password" ? "view-password-disabled" : "view-password");
            setRepeatedPasswordType(repeatedPasswordType === "text" ? "password" : "text");
        }
    }

    const onClickSignIn = () => {
        setSignup(false);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        let passwordMatch = repeatPassword === password ? true : false;
        let emailValueError = email.length === 0 ? true : false;

        if (emailValueError) setEmailError(true)
        if (!passwordMatch) {
            setPasswordErrorMessage("סיסמאות לא זהות")
            setPasswordError(true);
        }
        if (password.length === 0) {
            setPasswordErrorMessage("שדה סיסמה הוא חובה")
            setPasswordError(true);
        }

        checkUserExists(email).then(
            (res) => {
                console.log(res)
                if (res.message === 'True') {
                    setEmailExistError(true);
                } else if (passwordMatch && !emailValueError) {
                    setFirstFormClicked(true);
                }
            },
            (err) => {

            }
        )

    }

    return (
        <form onSubmit={onFormSubmit}>
            <h2>היי, נעים להכיר</h2>
            <label>מייל</label>
            <input className={emailError || emailExistError ? "steps-error-input" : ""} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@email.co.il" />
            {emailError && <p className="step-two-error-message">שדה מייל הוא חובה</p>}
            {emailExistError && <p className="step-two-error-message">המייל הזה כבר קיים אצלנו. כדאי לנסות להתחבר</p>}
            <label>סיסמה</label>
            <div className="loginform-div-password">
                <input onBlur={() => setPasswordError(false)} className={passwordError ? "steps-error-input" : ""} value={password} onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="הקלדת סיסמא" />
                <div onClick={() => onClickViewPassword('password')} className={viewwPasswordClass}></div>
            </div>
            <label>סיסמה</label>
            <div className="loginform-div-password">
                <input onBlur={() => setPasswordError(false)} className={passwordError ? "steps-error-input" : ""} value={repeatPassword} onChange={(e) => setRepeatedPassword(e.target.value)} type={repeatedPasswordType} placeholder="הקלדת סיסמא" />
                <div onClick={() => onClickViewPassword('repeatedPassword')} className={viewwRepeatedPasswordClass}></div>
                {passwordError && <p className="step-two-error-message">{passwordErrorMessage}</p>}
            </div>
            <button className="login-button">המשך</button>
            <p className="login-no-account">כבר יש לך חשבון? <span onClick={onClickSignIn}>להתחברות</span></p>
        </form>
    );
};

export default SignUpFirstForm;