import React, { useState } from 'react';

const StepThreeProperty = ({ header }) => {

    const [active, setActive] = useState("")

    return (
        <div onClick={() => setActive(active === "" ? "active" : "")} className={active}>
            <div></div>
            <p>{header}</p>
        </div>
    )
}
export default StepThreeProperty;