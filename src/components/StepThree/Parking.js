import React, { useState } from 'react';

const Parking = ({ setParking }) => {

    const [activeClassParking, setActiveClassParking] = useState(["active", "", "", ""]);

    const handleOnClick = (num) => {
        switch (num) {
            case 1:
                setActiveClassParking(["active", "", "", ""]);
                setParking("ללא")
                break;
            case 2:
                setActiveClassParking(["", "active", "", ""]);
                setParking("1");
                break;
            case 3:
                setActiveClassParking(["", "", "active", ""]);
                setParking("2")
                break;
            case 4:
                setActiveClassParking(["", "", "", "active"])
                setParking("3")
                break;
            default:
                break;
        }
    }

    return (
        <div className="stepthree-park">
            <h6>חניה</h6>
            <div onClick={() => handleOnClick(1)} className={`stepthree-park-first ${activeClassParking[0]}`}>ללא</div>
            <div onClick={() => handleOnClick(2)} className={activeClassParking[1]}>1</div>
            <div onClick={() => handleOnClick(3)} className={activeClassParking[2]}>2</div>
            <div onClick={() => handleOnClick(4)} className={`stepthree-park-last ${activeClassParking[3]}`}>3</div>
        </div>
    );
};

export default Parking;