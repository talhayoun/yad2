import React, { useContext, useEffect, useState } from 'react';
import { filterAdsExtra } from '../../server/propertyRequests';
import { adFilters } from '../actions/adsActions';
import { AdsContext } from '../context/AdsContext';
import Properties from './Properties';
import SecondRow from './SecondRow';

const AdvancedFilter = ({ setAdvancedFilter }) => {

    const [checkBox, setCheckBox] = useState([]);
    const [floorFrom, setFloorFrom] = useState(undefined);
    const [floorTo, setFloorTo] = useState(undefined);

    const [sizeFrom, setSizeFrom] = useState(undefined)
    const [sizeTo, setSizeTo] = useState(undefined)

    const [date, setDate] = useState(undefined)
    const [search, setSearch] = useState(undefined)

    const { adData, dispatchAdData } = useContext(AdsContext);

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(checkBox, floorFrom, floorTo, sizeFrom, sizeTo, date, search)
        filterAdsExtra(checkBox, floorFrom, floorTo, sizeFrom, sizeTo, date, search).then(
            (res) => {
                console.log(res)
                setAdvancedFilter(false)
                if (res.length > 0) {
                    dispatchAdData(adFilters(res));
                }
            }
        );

    }

    useEffect(() => {
        console.log(checkBox)
    }, [checkBox])
    useEffect(() => {
        console.log('date: ', date)
        console.log('sizefrom: ', sizeFrom)
        console.log('sizeto ', sizeTo)
        console.log('search: ', search)
        console.log('floorfrom: ', floorFrom)
        console.log('floorto: ', floorTo)
    }, [date, sizeFrom, sizeTo, search, floorFrom, floorTo])

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