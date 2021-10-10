import React, { useEffect, useState } from 'react';
import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';
import AssetType from './AssetType';

const FilterContent = () => {
    const [advancedFilter, setAdvancedFilter] = useState(false);
    const [assetName, setAssetName] = useState(undefined);
    const [assetType, setAssetType] = useState(undefined);
    const [rooms, setRooms] = useState(undefined);
    const [priceFrom, setPriceFrom] = useState(undefined);
    const [priceTo, setPriceTo] = useState(undefined);


    const [roomsCheckBoxList, setRoomsCheckBoxList] = useState([]);
    const [housesCheckBoxList, setHousesCheckBoxList] = useState([]);
    const [otherCheckBoxList, setOtherCheckBoxList] = useState([]);
    const [allCheckBoxList, setAllCheckBoxList] = useState([])

    const [roomsCheckBox, setRoomsCheckBox] = useState(false);
    const [housesCheckBox, setHousesCheckBox] = useState(false);
    const [otherCheckBox, setOtherCheckBox] = useState(false);
    const [allCheckBox, setAllCheckBox] = useState(false);

    const [assetTypeClass, setAssetTypeClass] = useState("arrow-down")
    const [roomsClass, setRoomsClass] = useState("arrow-down");

    useEffect(() => {
        console.log(roomsCheckBoxList)
    }, [roomsCheckBoxList])
    useEffect(() => {
        console.log(housesCheckBoxList)
    }, [housesCheckBoxList])
    useEffect(() => {
        console.log(otherCheckBoxList)
    }, [otherCheckBoxList])

    useEffect(() => {
        console.log(allCheckBoxList)
    }, [allCheckBoxList])

    const handleFilterAd = () => {
        setAllCheckBoxList([...otherCheckBoxList, ...housesCheckBoxList, ...roomsCheckBoxList])

    }

    return (
        <form className="filtercontent">
            <div className="filtercontent-one">
                <p>חפשו אזור, עיר, שכונה או רחוב</p>
                <input value={assetName} onChange={(e) => setAssetName(e.target.value)} placeholder="לדוגמה: פלורנטין" />
            </div>
            <div className="filtercontent-two">
                <p>סוג נכס</p>
                <div onClick={() => setAssetTypeClass(assetTypeClass === "arrow-down" ? "arrow-up" : "arrow-down")}>
                    <p>בחרו סוגי נכסים</p>
                    <p className={assetTypeClass}></p>
                </div>
            </div>
            {assetTypeClass === "arrow-up" &&
                <AssetType
                    clickClose={setAssetTypeClass}
                    roomsCheckBox={roomsCheckBox} setRoomsCheckBox={setRoomsCheckBox}
                    roomsCheckBoxList={roomsCheckBoxList} setRoomsCheckBoxList={setRoomsCheckBoxList}
                    housesCheckBox={housesCheckBox} setHousesCheckBox={setHousesCheckBox}
                    housesCheckBoxList={housesCheckBoxList} setHousesCheckBoxList={setHousesCheckBoxList}
                    otherCheckBox={otherCheckBox} setOtherCheckBox={setOtherCheckBox}
                    otherCheckBoxList={otherCheckBoxList} setOtherCheckBoxList={setOtherCheckBoxList}
                    allCheckBox={allCheckBox} setAllCheckBox={setAllCheckBox}
                    allCheckBoxList={allCheckBoxList} setAllCheckBoxList={setAllCheckBoxList}

                />}
            <div className="filtercontent-three">
                <p>חדרים</p>
                <div onClick={() => setRoomsClass(roomsClass === "arrow-down" ? "arrow-up" : "arrow-down")}>
                    <p>חדרים</p>
                    <p className={roomsClass}></p>
                </div>
            </div>
            <div className="filtercontent-four">
                <p>מחיר</p>
                <div>
                    <input placeholder="מ-"></input>
                    <input placeholder="עד-"></input>
                </div>
            </div>
            <div className="filtercontent-five" onClick={() => setAdvancedFilter(!advancedFilter)}>
                <div className="filtercontent-five-container">
                    <div>+</div>
                    <p>חיפוש מתקדם</p>
                </div>
            </div>
            <div className="filtercontent-six" onClick={handleFilterAd}>
                <div>
                    <div></div>
                    <p>חיפוש</p>
                </div>
            </div>
            {advancedFilter && <AdvancedFilter setAdvancedFilter={setAdvancedFilter} />}
        </form>
    );
};

export default FilterContent;