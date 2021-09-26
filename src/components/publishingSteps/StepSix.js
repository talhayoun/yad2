import React from 'react';

const StepSix = ({ setStepsFinished }) => {

    const onSubmitForm = () => {
        setStepsFinished([true, true, true, true, true, true, false, false])
    }

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
                        <input />
                        <div>X</div>
                    </div>
                </div>
                <div className="stepsix-phone">
                    <h6>טלפון ראשי</h6>
                    <div>
                        <input />
                        <div className="stepsix-phone-div-container">
                            <div>+</div>
                        </div>
                    </div>
                </div>
                <div className="stepsix-add-contact">
                    <div>+</div>
                    <p>הוספת איש קשר נוסף</p>
                </div>
                <div className="stepsix-email">
                    <h6>דוא"ל</h6>
                    <input />
                </div>
                <div className="stepsix-first-checkbox">
                    <input type="checkbox" />
                    <h3>קראתי ואישרתי את <span>התקנון</span>*</h3>
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