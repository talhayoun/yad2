import React, { useEffect, useState } from 'react';

const CheckBox = ({ paragraph, checkBox, setCheckBox, roomsCheckBox }) => {

    const [enable, setEnable] = useState(false);

    useEffect(() => {
        if (enable)
            setCheckBox([...checkBox, paragraph])
        else if (checkBox.length > 0)
            setCheckBox([...checkBox.filter((property) => property !== paragraph)])
    }, [enable])

    useEffect(() => {
        if (roomsCheckBox) setEnable(true)
    }, [roomsCheckBox])

    return (
        <div className="advanced-filter-checkbox">
            <input type="checkbox" onChange={() => setEnable(!enable)} checked={enable} />
            <p>{paragraph}</p>
        </div>
    );
};

export default CheckBox;