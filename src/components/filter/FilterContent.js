import React, { useContext, useEffect, useState } from 'react';
import { filterAds } from '../../server/propertyRequests';
import { getCitySuggested } from '../../server/publishRequests';
import { adFilters } from '../actions/adsActions';
import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';
import { AdsContext } from '../context/AdsContext';
import AssetType from './AssetType';
import MultipleOptions from './MultipleOptions';
import Rooms from './Rooms';

const FilterContent = () => {
    const [advancedFilter, setAdvancedFilter] = useState(false);
    const [assetType, setAssetType] = useState(undefined);
    const [assetName, setAssetName] = useState(undefined);
    const [roomFrom, setRoomFrom] = useState(undefined);
    const [roomTo, setRoomTo] = useState(undefined);
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
    const [showOptionsDiv, setShowOptionsDiv] = useState(false);

    const [cities, setCities] = useState([]);


    const { dispatchAdData } = useContext(AdsContext);

    const handleFilterAd = () => {
        setAllCheckBoxList([...otherCheckBoxList, ...housesCheckBoxList, ...roomsCheckBoxList])
        filterAds(assetName, [...otherCheckBoxList, ...housesCheckBoxList, ...roomsCheckBoxList], roomFrom, roomTo, priceFrom, priceTo, assetType).then(
            (res) => {
                if (res.length > 0) {
                    dispatchAdData(adFilters(res))
                    setAdvancedFilter(undefined);
                    setAssetType(undefined);
                    setAssetName(undefined);
                    setRoomFrom(undefined);
                    setRoomTo(undefined);
                    setPriceFrom(undefined);
                    setPriceTo(undefined);
                }
            }
        )
    }

    useEffect(() => {
        getCitySuggested().then(
            (res) => {
                if (res.length > 0) {
                    setCities([...res]);
                }
            },
            (err) => {
                console.log(err)
            }
        )
    }, [])


    const handleAssetTypeClick = () => {
        setAssetTypeClass(assetTypeClass === "arrow-down" ? "arrow-up" : "arrow-down")
        setRoomsClass("arrow-down");
        setShowOptionsDiv(false)
    }

    const handleRoomClick = () => {
        setRoomsClass(roomsClass === "arrow-down" ? "arrow-up" : "arrow-down");
        setAssetTypeClass("arrow-down");
        setShowOptionsDiv(false)
    }

    return (
        <form className="filtercontent">
            <MultipleOptions cities={cities} setAssetType={setAssetType} setAssetName={setAssetName} assetName={assetName} setAssetTypeClass={setAssetTypeClass} setRoomsClass={setRoomsClass} showOptionsDiv={showOptionsDiv} setShowOptionsDiv={setShowOptionsDiv} />
            <div className="filtercontent-two">
                <p>סוג נכס</p>
                <div onClick={handleAssetTypeClick}>
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
                <div onClick={handleRoomClick}>
                    <p>חדרים</p>
                    <p className={roomsClass}></p>
                </div>
            </div>
            {roomsClass === "arrow-up" &&
                <Rooms setRoomFrom={setRoomFrom} setRoomTo={setRoomTo} />
            }
            <div className="filtercontent-four">
                <p>מחיר</p>
                <div>
                    <input placeholder="מ-" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)}></input>
                    <input placeholder="עד-" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
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