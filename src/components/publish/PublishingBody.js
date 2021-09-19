import React from 'react';
import StepOne from '../publishingSteps/StepOne';
import StepTwo from '../publishingSteps/StepTwo';

const PublishingBody = () => {
    return (
        <div className="publishing-body">
            <div className="step stepone">
                <StepOne />
            </div>
            <div className="step">
                <StepTwo />
            </div>
        </div>   
    );
};

export default PublishingBody;