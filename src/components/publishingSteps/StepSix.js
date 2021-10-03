import React, { useContext, useEffect, useState } from 'react';
import { StepSixAction } from '../actions/publishActions';
import { PublishContext } from '../context/PublishContext';

const StepSix = ({ setStepsFinished }) => {

    const { dispatchPublishData } = useContext(PublishContext);
    const [displayError, setDisplayError] = useState([false, false, false, false]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);


    const onSubmitForm = (e) => {
        e.preventDefault()
        let nameValue = name === "" ? true : false;
        let phoneValue = phone === "" ? true : false;
        let emailValue = email === "" ? true : false;
        let checkboxValue = !checkbox ? true : false;
        console.log(nameValue, displayError)
        setDisplayError([nameValue, phoneValue, emailValue, checkboxValue]);
    }

    useEffect(() => {
        if (name.length > 0 && phone.length > 0 && email.length > 0 && checkbox) {
            if (!displayError[0] && !displayError[1] && !displayError[2] && !displayError[3]) {
                dispatchPublishData(StepSixAction(name, phone, email))
                setStepsFinished([true, true, true, true, true, true, false, false])
            }
        }
    }, [displayError, dispatchPublishData, name, phone, email, setStepsFinished])

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
                        <input onChange={(e) => setName(e.target.value)} className={displayError[0] ? "steps-error-input" : ""} />
                        <div>X</div>
                    </div>
                    {displayError[0] && <p className="step-two-error-message">שדה חובה שם איש קשר</p>}
                </div>
                <div className="stepsix-phone">
                    <h6>טלפון ראשי</h6>
                    <div>
                        <input onChange={(e) => setPhone(e.target.value)} className={displayError[1] ? "steps-error-input" : ""} />
                        <div className="stepsix-phone-div-container">
                            <div>+</div>
                        </div>
                    </div>
                    {displayError[1] && <p className="step-two-error-message">שדה חובה מספר טלפון</p>}
                </div>
                <div className="stepsix-add-contact">
                    <div>+</div>
                    <p>הוספת איש קשר נוסף</p>
                </div>
                <div className="stepsix-email">
                    <h6>דוא"ל</h6>
                    <input onChange={(e) => setEmail(e.target.value)} className={displayError[2] ? "steps-error-input" : ""} />
                    {displayError[2] && <p className="step-two-error-message">שדה חובה דואר אלקטורני</p>}
                </div>
                <div className="stepsix-first-checkbox">
                    <input onChange={(e) => setCheckbox(!checkbox)} type="checkbox" />
                    <h3>קראתי ואישרתי את <span>התקנון</span>*</h3>
                    {displayError[3] && <p className="step-two-error-message">חובה לסמן אם תרצו להמשיך</p>}
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