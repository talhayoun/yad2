import React, { useEffect, useState } from 'react';
import Properties from './Properties';
import SecondRow from './SecondRow';

const AdvancedFilter = () => {

    const [checkBox, setCheckBox] = useState([]);
    const [floorFrom, setFloorFrom] = useState("");
    const [floorTo, setFloorTo] = useState("");

    const [sizeFrom, setSizeFrom] = useState("")
    const [sizeTo, setSizeTo] = useState("")

    const [date, setDate] = useState("")
    const [search, setSearch] = useState("")

    const onFormSubmit = () => {
        console.log(checkBox, floorFrom, floorTo, sizeFrom, sizeTo, date, search)
    }

    useEffect(() => {
        console.log(checkBox)
    }, [checkBox])
    useEffect(() => {
        console.log(date, "$")
    }, [date])

    return (
        <div className="advanced-filter">
            <Properties checkBox={checkBox} setCheckBox={setCheckBox} />
            <SecondRow date={date} setDate={setDate} floorFrom={floorFrom} setFloorFrom={setFloorFrom} floorTo={floorTo} setFloorTo={setFloorTo} sizeFrom={sizeFrom} setSizeFrom={setSizeFrom} sizeTo={sizeTo} setSizeTo={setSizeTo} />
            <div>
                <div className="advanced-filter-thirdrow">
                    <div>
                        <label>חיפוש חופשי</label>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className="advanced-filter-thirdrow-seconddiv">
                        <input type="checkbox" />
                        <p>הצגת מושבים וקיבוצים בלבד</p>
                    </div>
                </div>
            </div>
            <div className="advanced-filter-fourthrow">
                <button onClick={onFormSubmit}>חיפוש</button>
                <span>נקה</span>
            </div>
        </div>
    );
};

export default AdvancedFilter;