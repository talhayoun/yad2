import React, { useContext, useEffect, useState } from 'react';
import { PublishContext } from '../context/PublishContext';

const StepClosed = (props) => {

    const { publishData } = useContext(PublishContext);

    const [num, setNum] = useState("");
    const [header, setHeader] = useState("");
    const [midHeader, setMidHeader] = useState("")

    useEffect(() => {
        setNum(props.num);
        setHeader(props.header);
        switch (props.num) {
            case 2:
                if (publishData.assetType)
                    setMidHeader(`${publishData.assetType} - ${publishData.city} - ${publishData.street} - קומה ${publishData.floorNumber}`)
                break;
            case 3:
                if (publishData.roomsNumber)
                    setMidHeader(`${publishData.roomsNumber} חדרים`)
                break;
            case 4:
                if (publishData.paymentAmount)
                    setMidHeader(`מס' תשלומים ${publishData.paymentAmount} ${publishData.totalSize ? ` - ${publishData.totalSize} מ"ר נטו` : ""} ${publishData.price ? ` - מחיר: ${publishData.price} ₪` : ""}`)
                break;
            case 6:
                if (publishData.username)
                    setMidHeader(`${publishData.username} - ${publishData.phone}`)
                break;
            default:
                break;
        }
    }, [publishData, props])


    const restartSteps = () => {
        switch (num) {
            case 1:
                props.setStepsFinished([false, false, false, false, false, false, false]);
                break;
            case 2:
                props.setStepsFinished([true, false, false, false, false, false, false]);
                break;
            case 3:
                props.setStepsFinished([true, true, false, false, false, false, false]);
                break;
            case 4:
                props.setStepsFinished([true, true, true, false, false, false, false]);
                break;
            case 5:
                props.setStepsFinished([true, true, true, true, false, false, false]);
                break;
            case 6:
                props.setStepsFinished([true, true, true, true, true, false, false]);
                break;
            case 7:
                props.setStepsFinished([true, true, true, true, true, true, false]);
                break;
            default:
                break;
        }
    }

    return (
        <div className="step-closed">
            <span className="step-num-closed">{num}</span>
            <h2>{header}</h2>
            <p className="step-num-closed-middleHeader">{midHeader}</p>
            {props.showEditButton && <div onClick={restartSteps}>
                <div></div>
                <span>עריכה</span>
            </div>}
        </div>
    )
}
export default StepClosed