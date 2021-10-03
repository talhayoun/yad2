import React, { useEffect, useState } from 'react';

const CheckBox = ({ paragraph, checkBox, setCheckBox }) => {

    const [enable, setEnable] = useState(false);

    useEffect(() => {
        if (enable)
            setCheckBox([...checkBox, paragraph])
        else if (checkBox.length > 0)
            setCheckBox([...checkBox.filter((property) => property !== paragraph)])
    }, [enable, checkBox, setCheckBox, paragraph])

    return (
        <div className="advanced-filter-checkbox">
            <input type="checkbox" onChange={() => setEnable(!enable)} />
            <p>{paragraph}</p>
        </div>
    );
};

export default CheckBox;