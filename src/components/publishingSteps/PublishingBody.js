import React, { useState } from 'react';
import StepClosed from './StepClosed';
import StepFive from './StepFive';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepSeven from './StepSeven';
import StepSix from './StepSix';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const PublishingBody = () => {
    const [steps, setStepsFinished] = useState([false, false, false, false, false, false, false]);

    return (
        <div className="publishing-body">
            <div className="step stepone">
                {!steps[0] ?
                    <StepOne setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={1} header={"אני רוצה להשכיר נכס"} setStepsFinished={setStepsFinished} showEditButton={steps[0] ? true : false} />
                }
            </div>
            <div className="step">
                {steps[0] && !steps[1] ?
                    <StepTwo setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={2} header={"כתובת הנכס"} setStepsFinished={setStepsFinished} showEditButton={steps[1] ? true : false} />
                }
            </div>
            <div className="step">
                {steps[1] && !steps[2] ?
                    <StepThree setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={3} header={"על הנכס"} setStepsFinished={setStepsFinished} showEditButton={steps[2] ? true : false} />
                }
            </div>
            <div className="step">
                {steps[2] && !steps[3] ?
                    <StepFour setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={4} header={"תשלומים, תאריכים ועוד"} setStepsFinished={setStepsFinished} showEditButton={steps[3] ? true : false} />
                }
            </div>
            <div className="step">
                {steps[3] && !steps[4] ?
                    <StepFive setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={5} header={"תמונות וסרטונים"} setStepsFinished={setStepsFinished} showEditButton={steps[4] ? true : false} />
                }
            </div>
            <div className="step">
                {steps[4] && !steps[5] ?
                    <StepSix setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={6} header={"פרטים ליצירת קשר"} setStepsFinished={setStepsFinished} showEditButton={steps[5] ? true : false} />
                }
            </div>
            <div className="step">
                {steps[5] && !steps[6] ?
                    <StepSeven setStepsFinished={setStepsFinished} /> :
                    <StepClosed num={7} header={"סיום פרסום"} setStepsFinished={setStepsFinished} showEditButton={steps[6] ? true : false} />
                }
            </div>
        </div>
    );
};

export default PublishingBody;