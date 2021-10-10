import React, { useContext, useEffect, useState } from 'react';
import { addAd } from '../../server/publishRequests';
import { PublishContext } from '../context/PublishContext';
import StepSevenTick from './StepSevenTick';
import { LoginContext } from "../context/LoginContext";
import Spinner from '../spinner/Spinner';
import { useHistory } from 'react-router-dom';
const StepSeven = () => {

    const { publishData } = useContext(PublishContext);
    const { userData } = useContext(LoginContext);
    const [spinner, setSpinner] = useState(false);


    const history = useHistory()

    useEffect(() => {
        console.log(publishData, "seven")
    }, [publishData])

    const submitForm = () => {
        console.log(publishData, "%")
        console.log(userData)
        setSpinner(true);
        addAd(publishData, userData).then(
            (res) => {
                setSpinner(false);
                history.push('/')
            }
        )
    }

    return (
        <>
            <div className="stepseven-header">
                <span className="step-num">7</span>
                <h6>סיום פרסום</h6>
            </div>
            <div className="stepseven-top">
                <p>זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.</p>
                <p>אגב רצינו לספר לך שיש באתר עוד <span className="stepseven-top-same-amount">64</span> מודעות דומות לשלך באזור צפון השרון</p>
                <p>המלצה שלנו? <span className="stepseven-top-highlight">לשדרג</span><div className="stepseven-rocket-image"></div>את המודעה, להופיע לני כולם והתקדם להסכם תיק תק</p>
            </div>
            <div className="stepseven-body">
                <h6>באיזה מסלול לפרסם את המודעה? זה הרגע לבלוט מעל כולם</h6>
                <div className="stepseven-options-container">
                    <div className="stepseven-option-VIP">
                        <div className="stepseven-option-VIP-top">
                            <h3>VIP</h3>
                            <div className="stepseven-option-VIP-top-recommended">
                                <div></div>
                                <p>מומלץ</p>
                            </div>
                            <div className="stepseven-option-VIP-top-rocket"></div>
                        </div>
                        <div className="stepseven-option-VIP-pros">
                            <StepSevenTick paragraph={"מודעה מודגשת בצבע צהוב"} />
                            <StepSevenTick paragraph={"הקפצה אוטומטית לחסכון בזמן"} />
                            <StepSevenTick paragraph={"הופעה לפני מודעות רגילות וורודות"} />
                            <StepSevenTick paragraph={"מסלול זה מייצר יותר חשיפות ופניות"} />
                        </div>
                        <button className="stepseven-options-VIP-button">135 ₪ \ 28 ימים</button>
                    </div>
                    <div className="stepseven-option-basic">
                        <h3>בסיסי</h3>
                        <div className="stepseven-option-basic-clouds"></div>
                        <StepSevenTick paragraph={"מודעה רגילה"} />
                        <div className="stepseven-option-basic-cons">
                            <div>X</div>
                            <p>הקצפה אטומטית לחסכון בזמן</p>
                        </div>
                        <button onClick={submitForm}>חינם \ 40 ימים</button>
                    </div>
                    <div className="stepseven-option-highlighted">
                        <h3>מודגשת</h3>
                        <div className="stepseven-option-highlighted-rocket"></div>
                        <StepSevenTick paragraph={"מודעה מודגשת בצבע ורוד"} />
                        <StepSevenTick paragraph={"הקפצה אוטומטית לחסכון בזמן"} />
                        <StepSevenTick paragraph={"הופעה לפני מודעות רגילות"} />
                        <button>109 ₪ \ 28 ימים</button>
                    </div>
                </div>
                <div className="stepseven-checkbox">
                    <input type="checkbox" checked="checked" />
                    <p>אני מאשר קבלת דיוור פרסומי הקשור למודעה שפרסמתי באתר יד 2 (להסרה - יש להוריד את הסימון בתיבה)</p>
                </div>
            </div>
            {spinner && <Spinner />}
        </>
    );
};

export default StepSeven;