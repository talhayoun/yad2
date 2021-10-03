import React, { useState } from 'react';

const StepThreeProperty = ({ header, setProprties, proprties }) => {

    const [active, setActive] = useState("")

    const handleOnClick = () => {
        setActive(active === "" ? "active" : "")
        setProprties([...proprties, header]);
    }

    return (
        <div onClick={handleOnClick} className={active}>
            <div></div>
            <p>{header}</p>
        </div>
    )
}
export default StepThreeProperty;