import React, { useState } from 'react';
import StepContinueButton from './StepContinueButton';
import StepThreeProperty from './StepThreeProperty';

const StepThree = ({ setStepsFinished }) => {

    const [activeClassParking, setActiveClassParking] = useState(["", "", "", ""]);
    const [activeClassBalcony, setActiveClassBalcony] = useState(["", "", "", ""]);
    const [textarea, setTextArea] = useState("")


    const onFormSubmit = (e) => {
        e.preventDefault();
        setStepsFinished([true, true, true, false, false, false, false]);
    }

    return (
        <>
            <div className="stepthree-header">
                <span className="step-num">3</span>
                <h2>על הנכס</h2>
            </div>
            <form onSubmit={onFormSubmit} className="stepthree-form">
                <div>
                    <h6>מספר חדרים*</h6>
                    <select placeholder="בחירת מספר חדרים">
                        <option hidden="hidden" disabled="disabled">בחירת מספר חדרים</option>
                    </select>
                </div>
                <div className="stepthree-park">
                    <h6>חניה</h6>
                    <div onClick={() => setActiveClassParking(["active", "", "", ""])} className={`stepthree-park-first ${activeClassParking[0]}`}>ללא</div>
                    <div onClick={() => setActiveClassParking(["", "active", "", ""])} className={activeClassParking[1]}>1</div>
                    <div onClick={() => setActiveClassParking(["", "", "active", ""])} className={activeClassParking[2]}>2</div>
                    <div onClick={() => setActiveClassParking(["", "", "", "active"])} className={`stepthree-park-last ${activeClassParking[3]}`}>3</div>
                </div>
                <div className="stepthree-balcony">
                    <h6>מרפסת</h6>
                    <div onClick={() => setActiveClassBalcony(["active", "", "", ""])} className={`stepthree-park-first ${activeClassBalcony[0]}`}>ללא</div>
                    <div onClick={() => setActiveClassBalcony(["", "active", "", ""])} className={activeClassBalcony[1]}>1</div>
                    <div onClick={() => setActiveClassBalcony(["", "", "active", ""])} className={activeClassBalcony[2]}>2</div>
                    <div onClick={() => setActiveClassBalcony(["", "", "", "active"])} className={`stepthree-park-last ${activeClassBalcony[3]}`}>3</div>
                </div>
                <div className="stepthree-properties">
                    <h5>מאייפני הכנס</h5>
                    <StepThreeProperty header={"מיזוג"} />
                    <StepThreeProperty header={'ממ"ד'} />
                    <StepThreeProperty header={'מחסן'} />
                    <StepThreeProperty header={'דלתות פנדור'} />
                    <StepThreeProperty header={'ריהוט'} />
                    <StepThreeProperty header={'גישה לנכים'} />
                    <StepThreeProperty header={'מעלית'} />
                    <StepThreeProperty header={'מזגן תדיראן'} />
                    <StepThreeProperty header={'משופצת'} />
                    <StepThreeProperty header={'סורגים'} />
                    <StepThreeProperty header={'לשותפים'} />
                    <StepThreeProperty header={'חיות מחמד'} />
                    <StepThreeProperty header={'מטבח כשר'} />
                    <StepThreeProperty header={'דוד שמש'} />
                </div>
                <div className="stepthree-textarea">
                    <h6>מה חשוב לך שידעו על הנכס?</h6>
                    <div>
                        <p>פירוט הנכס</p>
                        <span>{textarea.length}/400</span>
                        <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} maxLength="400" cols="5" placeholder="זה המקום לתאר את הפרטים הבולטים, למשל האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"></textarea>
                    </div>
                </div>
                <StepContinueButton />
            </form>
        </>
    );
};

export default StepThree;