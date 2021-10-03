import React, { useContext, useEffect, useState } from 'react';
import { StepFiveAction } from '../actions/publishActions';
import { PublishContext } from '../context/PublishContext';
import WeCheck from '../wecheck/WeCheck';
import ImagePreview from './ImagePreview';
import VideoPreview from './VideoPreview';

const StepFive = ({ setStepsFinished }) => {


    const { dispatchPublishData } = useContext(PublishContext);
    const [mainImg, setMainImg] = useState("");
    const [allImages, setAllImages] = useState([])



    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log("hmmm")
        console.log(allImages, ":::")
        dispatchPublishData(StepFiveAction(allImages, mainImg));
        setStepsFinished([true, true, true, true, true, false, false, false])
    }
    useEffect(() => {
        console.log(mainImg, "###@#@#@#@")
    }, [mainImg])

    useEffect(() => {
        console.log(allImages, "####$$$$$$$$$$$$$$$$")
    }, [allImages])

    return (
        <>
            <div className="stepfive-header">
                <div className="stepfive-header-firstdiv">
                    <span className="step-num">5</span>
                    <h3>תמונות וסרטונים</h3>
                </div>
                <div className="stepfive-header-seconddiv">
                    <div></div>
                    <div>לא לדאוג, גם אם רואים את התמונה באופן לא ברור כעת, לאחר הפרסום הכל יראה כמו שצריך</div>
                </div>
            </div>
            <form className="stepfive-form">
                <div className="stepfive-top">
                    <p>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?</p>
                    <p>לא להסס להעלות לפה תמונות (אפשר עד 10+ וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</p>
                    <div className="stepfive-top-video-image">
                        <VideoPreview />
                        <div className="stepfive-top-video-image-imgContainer">
                            <p>תמונה ראשית</p>
                            <ImagePreview setMainImg={setMainImg} />
                        </div>
                    </div>
                </div>
                <div className="stepfive-images">
                    <h6>תמונות שיופיעו בגוף המודעה</h6>
                    <div className="stepfive-images-container">
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                        <ImagePreview setAllImages={setAllImages} allImages={allImages} />
                    </div>
                    <div className="stepfive-wecheck">
                        <WeCheck />
                    </div>
                </div>
                <div className="steptwo-form-buttons-div">
                    <button className="steptwo-form-button-first">חזרה</button>
                    <button type="submit" onClick={(e) => onSubmitForm(e)} className="steptwo-form-button-second">להמשיך לשלב הבא</button>
                </div>
            </form>
        </>
    );
};

export default StepFive;