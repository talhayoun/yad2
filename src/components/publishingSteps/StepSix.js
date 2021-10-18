import React, { useContext, useEffect, useState } from 'react';
import { StepSixAction } from '../actions/publishActions';
import { PublishContext } from '../context/PublishContext';

const StepSix = ({ setStepsFinished }) => {

    const { dispatchPublishData } = useContext(PublishContext);
    // const [displayError, setDisplayError] = useState([false, false, false, false]);
    const [errors, setErrors] = useState([false, false, false, false]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);


    const onSubmitForm = (e) => {
        e.preventDefault()
        let noErrors = validateErrors();
        if(noErrors && !errors[0] && !errors[1] && !errors[2] && !errors[3] ){
            dispatchPublishData(StepSixAction(name, phone, email))
            setStepsFinished([true, true, true, true, true, true, false, false])
        }
        // console.log(nameValue, displayError)
        // setDisplayError([nameValue, phoneValue, emailValue, checkboxValue]);
    }

    const validateErrors = () => {
        if(name.toString().length > 0 && email.toString().length > 0 && phone.toString().length > 0 && checkbox) return true;
        let copyErrors = [...errors];
        if(name.toString().length === 0)copyErrors[0] = true;
        if(phone.toString().length === 0)copyErrors[1] = true;
        if(email.toString().length === 0)copyErrors[2] = true;
        if(!checkbox) copyErrors[3] = true
        setErrors(copyErrors)
        return false;
    }

    const verifyPhone = (value) => {
        const res = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(value);
        if(!res) handleError(1, true);
        else handleError(1, false);
        setPhone(value)
    }

    const verifyEmail = (value) => {
        const res = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
        if(!res) handleError(2, true);
        else handleError(2, false);
        setEmail(value);
    }

    const handleError = (index, isError) =>{
        let copyErrors = [...errors];
        copyErrors[index] = isError;
        setErrors(copyErrors)
    }

    useEffect(()=>{
        if(checkbox) handleError(3, false);
        else handleError(3, true);
    },[checkbox])

    return (
        <>
            <div className="stepsix-header">
                <span className="step-num">6</span>
                <h6>פרטים ליצרת קשר</h6>
            </div>
            <form onSubmit={onSubmitForm} className="stepsix-form">
                <h3>רגע לפני שמפרסמים את המודעה נבדוק שפרטי הקשר נכונים</h3>
                <div className="stepsix-contact-name">
                    <h6>שם איש קשר*</h6>
                    <div>
                        <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={errors[0] ? "steps-error-input" : ""}
                        onBlur={()=> name.toString().length > 0 ? handleError(0, false) : handleError(0, true)}
                        />
                        <div>X</div>
                    </div>
                    {errors[0] && <p className="step-two-error-message">שדה אינו תקין</p>}
                </div>
                <div className="stepsix-phone">
                    <h6>טלפון ראשי</h6>
                    <div>
                        <input value={phone} min={9} max={9} onChange={(e) => verifyPhone(e.target.value)} className={errors[1] ? "steps-error-input" : ""} />
                        <div className="stepsix-phone-div-container">
                            <div>+</div>
                        </div>
                    </div>
                    {errors[1] && <p className="step-two-error-message">שדה אינו תקין</p>}
                </div>
                <div className="stepsix-add-contact">
                    <div>+</div>
                    <p>הוספת איש קשר נוסף</p>
                </div>
                <div className="stepsix-email">
                    <h6>דוא"ל</h6>
                    <input
                        value={email}
                        onChange={(e) => verifyEmail(e.target.value)}
                        className={errors[2] ? "steps-error-input" : ""} 
                    />
                    {errors[2] && <p className="step-two-error-message">שדה חובה דואר אלקטורני</p>}
                </div>
                <div className="stepsix-first-checkbox">
                    <input checked={checkbox} onChange={() => setCheckbox(!checkbox)} type="checkbox" />
                    <h3>קראתי ואישרתי את <span>התקנון</span>*</h3>
                    {errors[3] && <p className="step-two-error-message">חובה לסמן אם תרצו להמשיך</p>}
                </div>
                <div className="stepsix-second-checkbox">
                    <input type="checkbox" />
                    <h3>אני רוצה שתשלחו לי עדכונים במייל</h3>
                </div>
                <div className="stepsix-button">
                    <button>המשך לבחירת מסלול</button>
                </div>
            </form>
        </>
    );
};

export default StepSix;