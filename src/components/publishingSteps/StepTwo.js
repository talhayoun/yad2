import React, { useEffect, useState } from 'react';
import StepContinueButton from './StepContinueButton';
import WeCheck from '../wecheck/WeCheck';
import { getCitySuggested } from '../../server/publishRequests';
import City from '../StepTwo/City';
import Street from '../StepTwo/Street';
import AssetType from '../StepTwo/AssetType';
import HouseNumber from '../StepTwo/HouseNumber';
import Floor from '../StepTwo/Floor';
import Neighborhood from '../StepTwo/Neighborhood';
import RentalLocation from '../StepTwo/RentalLocation';
import { StepTwoAction } from '../actions/publishActions';

const StepTwo = ({ setStepsFinished, publishData, dispatchPublishData }) => {

    const [cityValue, setCityValue] = useState("");
    const [streetValue, setStreetValue] = useState("");
    const [houseNumberValue, setHouseNumberValue] = useState("");
    const [assetType, setAssetType] = useState("דירה או אולי פנטהאוז");
    const [citiesList, setCitiesList] = useState([]);
    const [floorNumber, setFloorNumber] = useState("");
    const [totalFloorNumbers, setTotalFloorNumbers] = useState("");
    const [displayError, setDisplayError] = useState([false, false, false, false, false, false]);


    const onClickFormSubmit = (e) => {
        e.preventDefault();
        let assetError = assetType === "דירה או אולי פנטהאוז" ? true : false;
        let cityError = cityValue.length > 0 ? false : true;
        let streetError = streetValue.length > 0 ? false : true;
        let houseNumberError = houseNumberValue.toString().length > 0 ? false : true;
        let floorError = floorNumber.toString().length > 0 ? false : true;
        let totalFloorError = totalFloorNumbers.toString().length > 0 ? false : true;
        console.log([assetError, cityError, streetError, houseNumberError, floorError, totalFloorError])
        setDisplayError([assetError, cityError, streetError, houseNumberError, floorError, totalFloorError]);
        if (!assetError && !cityError && !streetError && !houseNumberError && !floorError && !totalFloorError) {
            dispatchPublishData(StepTwoAction(assetType, cityValue, streetValue, houseNumberValue, floorNumber, totalFloorNumbers))
            setStepsFinished([true, true, false, false, false, false, false]);
        }
    }

    // useEffect(() => {
    //     console.log(displayError, "##")
    //     if (streetValue.length > 0 && floorNumber.length > 0 && totalFloorNumbers > 0 && cityValue.length > 0 && assetType !== "דירה או אולי פנטהאוז") {
    //         if (!displayError[0] && !displayError[1] && !displayError[2] && !displayError[3] && !displayError[4] && !displayError[5]) {
    //             dispatchPublishData(StepTwoAction(assetType, cityValue, streetValue, houseNumberValue, floorNumber, totalFloorNumbers))
    //             setStepsFinished([true, true, false, false, false, false, false]);
    //         }
    //     }
    // }, [displayError, setStepsFinished, dispatchPublishData, floorNumber, houseNumberValue, assetType, cityValue, streetValue, totalFloorNumbers])

    useEffect(() => {
        getCitySuggested().then(
            (res) => {
                if (res.length > 0) {
                    setCitiesList([...res])
                }
            }
        );
    }, [])

    return (
        <>
            <div className="steptwo-header">
                <div className="steptwo-header-firstdiv">
                    <span className="step-num">2</span>
                    <h3>כתובת הכנס</h3>
                </div>
                <div className="steptwo-header-seconddiv">
                    <div></div>
                    <h5><span>המלצה שלנו</span> העלאת וידאו של הנכס תמשוך יותר מתעניינים למודעה שלך</h5>
                </div>
            </div>
            <p className="steptwo-paragraph">סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</p>
            <form className="steptwo-form" onSubmit={onClickFormSubmit}>
                <AssetType assetType={assetType} setAssetType={setAssetType} displayError={displayError} setDisplayError={setDisplayError} />
                <City citiesList={citiesList} cityValue={cityValue} setCityValue={setCityValue} displayError={displayError} />
                <Street cityValue={cityValue} setStreetValue={setStreetValue} streetValue={streetValue} displayError={displayError} />
                <HouseNumber setHouseNumberValue={setHouseNumberValue} houseNumberValue={houseNumberValue} streetValue={streetValue} displayError={displayError} />
                <Floor assetType={assetType} floorNumber={floorNumber} totalFloorNumbers={totalFloorNumbers} setFloorNumber={setFloorNumber} setTotalFloorNumbers={setTotalFloorNumbers} displayError={displayError} />
                <Neighborhood assetType={assetType} displayError={displayError} />
                <RentalLocation assetType={assetType} displayError={displayError} />
                <div className="steptwo-subscribe-checkbox">
                    <input type="checkbox" />
                    <label>אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן</label>
                </div>
                <WeCheck />
                <StepContinueButton />
            </form>

        </>
    )
};

export default StepTwo;