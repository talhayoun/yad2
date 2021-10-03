import React, { useEffect, useState } from 'react';

const Rooms = ({ rooms, setRooms, displayError }) => {

    const [error, setError] = useState(false)
    const [lastValue, setLastValue] = useState("");

    const handleOnBlur = () => {
        if (rooms !== lastValue) {
            setError(false);
        }
    }

    useEffect(() => {
        if (displayError[0]) setError(true);
        else setError(false);
    }, [displayError])

    useEffect(() => {
        setLastValue(rooms);
    }, [rooms])
    return (
        <div>
            <h6>מספר חדרים*</h6>
            <select value={rooms} onBlur={handleOnBlur} className={error ? "steps-error-input" : ""} placeholder="בחירת מספר חדרים" onChange={(e) => setRooms(e.target.value)}>
                <option hidden="hidden" disabled="disabled">בחירת מספר חדרים</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
                <option value="5.5">5.5</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9"> 9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="12.5">12.5</option>
            </select>
            {error && <p className="step-two-error-message">שדה חובה מספר חדרים</p>}
        </div>
    );
};

export default Rooms;