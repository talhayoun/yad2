import React, { useContext, useState } from 'react';
import PaymentAmount from '../StepFour/PaymentAmount';
import Input from '../StepFour/Input';
import StepContinueButton from './StepContinueButton';
import Dates from '../StepFour/Dates';
import { PublishContext } from '../context/PublishContext';
import { StepFourAction } from '../actions/publishActions';

const StepFour = ({ setStepsFinished }) => {

    const { dispatchPublishData } = useContext(PublishContext);

    const [paymentAmount, setPaymentAmount] = useState("בחירת מספר תשלומים")
    const [date, setDate] = useState("");
    const [totalSize, setTotalSize] = useState("");
    const [size, setSize] = useState("");
    const [houseCommitte, setHouseCommitte] = useState("");
    const [propertyTax, setPropertyTax] = useState("");
    const [price, setPrice] = useState("");
    const [displayError, setDisplayError] = useState([false, false, false]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        let paymentValue = paymentAmount === "בחירת מספר תשלומים" ? true : false;
        let totalSizeValue = totalSize === "" ? true : false;
        let dateValue = date === "" ? true : false;
        setDisplayError([paymentValue, totalSizeValue, dateValue]);
        if (!paymentValue && !totalSizeValue && !dateValue) {
            dispatchPublishData(StepFourAction(paymentAmount, houseCommitte, propertyTax, size, totalSize, price, date))
            setStepsFinished([true, true, true, true, false, false, false])
        }
    }

    return (
        <>
            <div className="stepfour-header">
                <div className="stepfour-header-firstdiv">
                    <span className="step-num">4</span>
                    <h3>תשלומים, תאריכים ועוד</h3>
                </div>
                <div className="stepfour-header-seconddiv">
                    <div></div>
                    <h5>גם לנו היה קשה להאמין!</h5>
                    <div>מודעות שעולות עם מחירים לא עגולים מוכרות מהר יותר</div>
                </div>
            </div>
            <form onSubmit={onSubmitForm} className="stepfour-form">
                <PaymentAmount paymentAmount={paymentAmount} setPaymentAmount={setPaymentAmount} displayError={displayError} />
                <Input header={"ועד בית"} placeholder={"הכנסת סכום תשלום לועד בית"} must={false} func={setHouseCommitte} displayError={displayError} value={houseCommitte} />
                <Input header={"ארנונה לחודשיים"} placeholder={"סכום הארנונה לתשלום"} func={setPropertyTax} displayError={displayError} value={propertyTax} />
                <Input header={'מ"ר בנוי'} placeholder={'כמה מ"ר בנוי יש בנכס'} must={false} func={setSize} displayError={displayError} value={size} />
                <Input header={'גודל במ"ר סך הכל'} func={setTotalSize} must={true} displayError={displayError} value={totalSize} />
                <Input header={"מחיר"} placeholder={"סכום מינימלי 100"} must={false} func={setPrice} displayError={displayError} value={price} />
                <Dates setDate={setDate} displayError={displayError} />
                <div className="stepfour-checkbox">
                    <input type="checkbox" />
                    <label>לטווח הארוך</label>
                </div>
                <StepContinueButton />
            </form>
        </>
    );
};

export default StepFour;