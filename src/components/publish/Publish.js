import React, { useState } from 'react';
import PublishBody from './PublishBody';
import PublishHeader from './PublishHeader';
import PublishingBody from '../publishingSteps/PublishingBody';

const Publish = () => {

    const [publishingBody, setPublishingBody] = useState(false);

    const onClickPublishing = () => {
        setPublishingBody(!publishingBody);
    }

    return (
        <div className="publish">
            <PublishHeader />
            {publishingBody ? <PublishingBody /> : <PublishBody onClickPublishing={onClickPublishing} />}
        </div>
    );
};

export default Publish;