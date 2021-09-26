import React, { useEffect, useState } from 'react';

const StepClosed = (props) => {

    const [num, setNum] = useState("");
    const [header, setHeader] = useState("");

    useEffect(() => {
        setNum(props.num);
        setHeader(props.header);
    }, [props])

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
            {props.showEditButton && <div onClick={restartSteps}>
                <div></div>
                <span>עריכה</span>
            </div>}
        </div>
    )
}
export default StepClosed