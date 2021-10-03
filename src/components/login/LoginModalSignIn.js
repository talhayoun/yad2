import React, { useContext, useState } from 'react';
import { setCookie } from '../../server/Cookie';
import { signInUser } from '../../server/UserRequests';
import { LoginAction } from '../actions/loginActions';
import { LoginContext } from '../context/LoginContext';

const LoginModalSignIn = ({ setConnect, setSignIn}) => {

    const { userData, dispatchUserData } = useContext(LoginContext)

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [passwordClass, setPasswordClass] = useState("loginmodal-viewpass")
    const [passwordType, setPasswordType] = useState('password');

    const onClickViewPass = () => {
        setPasswordClass(passwordClass === "loginmodal-viewpass" ? "loginmodal-disablepass" : "loginmodal-viewpass")
        setPasswordType(passwordType === "password" ? "text" : "password")
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log("trying to submit")
        signInUser(email, password).then(
            (res) => {
                if (res.err) {
                    setError(true)
                    setErrorMsg("Invalid username or password");
                }
                else {
                    setCookie(res.email, res.token, res.firstName, res.lastName);
                    dispatchUserData(LoginAction(res.email, res.token, res.firstName, res.lastName));
                    setError(false)
                    setErrorMsg("")
                    if (setConnect) {
                        setConnect(true)
                        setTimeout(() => {
                            setConnect(false);
                        }, 1500);
                    }
                }
            },
            (err) => {
                console.log(err)
                setError(true);
                setErrorMsg(err.message)
            }
        )
    }
    
    return(
        <div className="loginmodal-logindata">
                    <form onSubmit={onFormSubmit}>
                        <h3>התחברות</h3>
                        <p>הזן את הפרטים כדי להתחבר</p>
                        <label>כתובת מייל</label>
                        <div>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <label className="loginmodal-password-label">סיסמה</label>
                        <div className="loginmodal-password-div">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordType} required />
                            <div className={passwordClass} onClick={onClickViewPass}></div>
                        </div>
                        {error && <p className="step-two-error-message">{errorMsg}</p>}
                        <span>שכחתי סיסמה</span>
                        <button type="submit">התחבר</button>
                        <p className="loginmodal-notregisited">לא רשום? <span onClick={() => setSignIn(false)}>להרשמה</span></p>
                    </form>
                </div>
    );
};

export default LoginModalSignIn;