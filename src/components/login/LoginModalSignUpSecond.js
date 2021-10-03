import React, { useState } from 'react';

const LoginModalSignUpSecond = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("");
    const [numberingPhone, setNumberingPhone] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);

    const [errors, setErrors] = useState([false, false, false, false, false]);
    const [errorsMsg, setErrorsMsg] = useState(["", "", "", "", ""])

    const verifyFirstName = () => {
        if(firstName.length > 0){
            setErrors([false, errors[1], errors[2], errors[3], errors[4]])
            setErrorsMsg(["", errorsMsg[1], errorsMsg[2], errorsMsg[3], errorsMsg[4]]);
        }else{
            setErrors([true,  errors[1], errors[2], errors[3], errors[4]])
            setErrorsMsg(["שדה חובה",errorsMsg[1], errorsMsg[2], errorsMsg[3], errorsMsg[4]])
        }
    }
    // SETTING ERRORS FOR THE FIELDS, 

    return(
        <div className="loginmodal-signup-second signup-modal">
        <form>
            <h3>הרשמה</h3>
            <p>הזן את הפרטים כדי להירשם</p>
            <label>שם פרטי</label>
            <input 
                placeholder="הקלד שם פרטי" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={verifyFirstName}
            />
            {errors[0] && <p>{errorsMsg[0]}</p>}
            <label className="loginmodal-password-label">שם משפחה</label>
            <input
                placeholder="הקלד שם משפחה" 
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
            />
            <label className="loginmodal-password-label">מספר טלפון</label>
            <div className="loginmodal-secondform-phonediv">
                <input
                    placeholder="טלפון"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
                <select
                    defaultValue="קידומת"
                    onChange={(e)=> setNumberingPhone(e.target.value)}
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
            </div>
            <div className="loginmodal-secondform-checkbox">
                <input type="checkbox" />
                <p>קראתי ומאשר את <span>תקנון</span>האתר</p>
            </div>
            <div className="loginmodal-secondform-checkbox">
                <input type="checkbox" />
                <p>מאשר קבלת דיוור פרסומי כללי מיד 2</p>
            </div>
            <button
                type="submit" 
                disabled={disabledButton}
                className={disabledButton ? "loginmodal-secondform-button-disbaled" : ""}
            >המשך</button>
            <p className="loginmodal-notregisited">כבר רשום? <span>להתחברות</span></p>
        </form>
    </div>
    );
};

export default LoginModalSignUpSecond;