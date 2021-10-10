import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { setCookie } from '../../server/Cookie';
import { signInUser } from '../../server/UserRequests';
import { LoginAction } from '../actions/loginActions';
import { LoginContext } from '../context/LoginContext';

const SignIn = ({ setSignup }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("text");
    const [viewwPasswordClass, setViewPasswordClass] = useState("view-password");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();
    const { userData, dispatchUserData } = useContext(LoginContext);

    const onClickViewPassword = () => {
        setViewPasswordClass(viewwPasswordClass === "view-password" ? "view-password-disabled" : "view-password");
        setPasswordType(passwordType === "text" ? "password" : "text");
    }

    const onClickSignUp = () => {
        setSignup(true);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        signInUser(email, password).then(
            (res) => {
                console.log(res)
                if (res.err) {
                    setError(true)
                    setErrorMessage(res.err);
                }
                if (res.token && res.firstName && res.lastName && res.email) {
                    setCookie(res.email, res.token, res.firstName, res.lastName);
                    dispatchUserData(LoginAction(res.email, res.token, res.firstName, res.lastName));
                    history.push('/');
                }
            },
            (err) => {
                console.log(err.message)
                setError(true)
                setErrorMessage(err.message);
            }
        );
    }

    return (
        <>
            <div className="signin-div">
                <form onSubmit={onFormSubmit}>
                    <h2>היי, טוב לראות אותך</h2>
                    <label>מייל</label>
                    <input onBlur={() => setError(false)} className={error ? "steps-error-input" : ""} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@email.co.il" />
                    <label>סיסמה</label>
                    <div className="loginform-div-password">
                        <input onBlur={() => setError(false)} className={error ? "steps-error-input" : ""} value={password} onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="הקלדת סיסמא" />
                        <div onClick={onClickViewPassword} className={viewwPasswordClass}></div>
                        {error && <p className="step-two-error-message">{errorMessage}</p>}
                    </div>
                    <p className="login-forgot-password">שחכתי סיסמה</p>
                    <button className="login-button">התחברות</button>
                    <p className="login-no-account">אין לך חשבון? <span onClick={onClickSignUp}>להרשמה</span></p>
                </form>
            </div>
        </>
    );
};

export default SignIn;