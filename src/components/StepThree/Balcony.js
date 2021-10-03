import React, { useState } from 'react';

const Balcony = ({ setBalcony }) => {

    const [activeClassBalcony, setActiveClassBalcony] = useState(["active", "", "", ""]);

    const handleOnClick = (num) => {
        switch (num) {
            case 1:
                setActiveClassBalcony(["active", "", "", ""]);
                setBalcony("ללא")
                break;
            case 2:
                setActiveClassBalcony(["", "active", "", ""]);
                setBalcony("1");
                break;
            case 3:
                setActiveClassBalcony(["", "", "active", ""]);
                setBalcony("2")
                break;
            case 4:
                setActiveClassBalcony(["", "", "", "active"])
                setBalcony("3")
                break;
            default:
                break;
        }
    }


    return (
        <div className="stepthree-balcony">
            <h6>מרפסת</h6>
            <div onClick={() => handleOnClick(1)} className={`stepthree-park-first ${activeClassBalcony[0]}`}>ללא</div>
            <div onClick={() => handleOnClick(2)} className={activeClassBalcony[1]}>1</div>
            <div onClick={() => handleOnClick(3)} className={activeClassBalcony[2]}>2</div>
            <div onClick={() => handleOnClick(4)} className={`stepthree-park-last ${activeClassBalcony[3]}`}>3</div>
        </div>
    );
};

export default Balcony;
