import React from 'react';
import WeCheck from '../wecheck/WeCheck';
import ImagePreview from './ImagePreview';
import StepContinueButton from './StepContinueButton';
import VideoPreview from './VideoPreview';

const StepFive = ({ setStepsFinished }) => {

    const onSubmitForm = () => {
        setStepsFinished([true, true, true, true, true, false, false, false])
    }
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
            <form onClick={onSubmitForm} className="stepfive-form">
                <div className="stepfive-top">
                    <p>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?</p>
                    <p>לא להסס להעלות לפה תמונות (אפשר עד 10+ וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</p>
                    <div className="stepfive-top-video-image">
                        <VideoPreview />
                        <div className="stepfive-top-video-image-imgContainer">
                            <p>תמונה ראשית</p>
                            <ImagePreview />
                        </div>
                    </div>
                </div>
                <div className="stepfive-images">
                    <h6>תמונות שיופיעו בגוף המודעה</h6>
                    <div className="stepfive-images-container">
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                        <ImagePreview />
                    </div>
                    <div className="stepfive-wecheck">
                        <WeCheck />
                    </div>
                </div>
                <StepContinueButton />
            </form>
        </>
    );
};

export default StepFive;