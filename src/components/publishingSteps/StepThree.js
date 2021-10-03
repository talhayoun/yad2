import React, { useEffect, useState } from 'react';
import Balcony from '../StepThree/Balcony';
import TextArea from '../StepThree/Textarea';
import Parking from '../StepThree/Parking';
import Proprties from '../StepThree/Proprties';
import Rooms from '../StepThree/Rooms';
import StepContinueButton from './StepContinueButton';
import { StepThreeAction } from '../actions/publishActions';

const StepThree = ({ setStepsFinished, dispatchPublishData, publishData }) => {

    const [rooms, setRooms] = useState("בחירת מספר חדרים");
    const [textarea, setTextArea] = useState("");
    const [parking, setParking] = useState("ללא");
    const [balcony, setBalcony] = useState("ללא")
    const [proprties, setProprties] = useState([]);
    const [displayError, setDisplayError] = useState([false, false])
    const [formClicked, setFormClicked] = useState(false)
    const [textAreaMessageDisplay, setTextAreaMessageDisplay] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();
        let roomsValue = rooms === "בחירת מספר חדרים" ? true : false;
        let textareaValue = textarea === "" ? true : false;
        setDisplayError([roomsValue, textareaValue]);
        // setFormClicked(true)
        if (!roomsValue && !textareaValue) {
            dispatchPublishData(StepThreeAction(rooms, parking, balcony, proprties, textarea))
            setStepsFinished([true, true, true, false, false, false, false]);
        }
    }

    // useEffect(() => {
    //     if (formClicked && textAreaMessageDisplay) {
    //         if (!displayError[0]) {
    //             dispatchPublishData(StepThreeAction(rooms, parking, balcony, proprties, textarea))
    //             setStepsFinished([true, true, true, false, false, false, false]);
    //             setFormClicked(false)
    //         }
    //     }
    // }, [displayError, setStepsFinished, dispatchPublishData, rooms, parking, balcony, proprties, textarea, formClicked, textAreaMessageDisplay])

    useEffect(() => {
        console.log(publishData, "after step two")
    }, [publishData])


    return (
        <>
            <div className="stepthree-header">
                <span className="step-num">3</span>
                <h2>על הנכס</h2>
            </div>
            <form onSubmit={onFormSubmit} className="stepthree-form">
                <Rooms setRooms={setRooms} displayError={displayError} rooms={rooms} />
                <Parking setParking={setParking} />
                <Balcony setBalcony={setBalcony} />
                <Proprties setProprties={setProprties} proprties={proprties} />
                <TextArea setTextArea={setTextArea} textarea={textarea} displayError={displayError} setTextAreaMessageDisplay={setTextAreaMessageDisplay} textAreaMessageDisplay={textAreaMessageDisplay} />
                <StepContinueButton />
            </form>
        </>
    );
};

export default StepThree;