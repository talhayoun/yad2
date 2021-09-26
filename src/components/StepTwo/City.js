import React, { useEffect, useState } from 'react';

const City = ({ citiesList, cityValue, setCityValue, displayError }) => {

    const [suggestedCities, setSuggestedCities] = useState([]);
    const [lastCityValue, setLastCityValue] = useState("");
    const [error, setError] = useState(false);

    const onChangeCityValueInput = (e) => {
        setCityValue(e.target.value);
        if (e.target.value.length > 1) {
            let cityList = [];
            for (let i = 0; i < citiesList.length; i++) {
                if (Object.entries(citiesList[i])[0][1].includes(e.target.value)) {
                    cityList.push(Object.entries(citiesList[i])[0][1]);
                }
            }
            let topTen = [];
            for (let i = 0; i < 10; i++) {
                topTen.push(cityList[i]);
            }
            setSuggestedCities([...topTen])
        } else {
            setSuggestedCities([])
        }
    }

    const onBlurInput = () => {
        if(cityValue.length > 0) setError(false)
        if(cityValue !== lastCityValue){
            setCityValue("");
            setTimeout(() => {
                setSuggestedCities([])
            }, 200);
        }
    }

    const onClickSuggestedCity = (city) => {
        console.log("CLICKED")
        setCityValue(city);
        setLastCityValue(city);
        setSuggestedCities([]);
    }

    useEffect(()=>{
        if(displayError[1]){
            setError(true)
        }else{
            setError(false);
        }
    },[displayError])
    return (
        <div className="steptwo-city">
            <h6>ישוב*</h6>
            <input placeholder="איפה נמצא הנכס?"
                value={cityValue}
                onChange={(e) => onChangeCityValueInput(e)}
                onBlur={()=> onBlurInput()}
                className={error ? "steps-error-input" : ""}
            />
            <div className="steptwo-city-x" onClick={() => setCityValue("")}>X</div>
            {suggestedCities.length > 0 &&
                <div className={cityValue.length > 0 ? "step-two-suggestedcity" : "none"}>{
                    suggestedCities.map((city, index) => (
                        <p key={index} onClick={() => onClickSuggestedCity(city)} className="step-two-suggested-city">{city}</p>
                    ))}
                </div>}
            {error && <p className="step-two-error-message">יש לבחור ישוב מתוך הרשימה</p>}
        </div>
    );
};

export default City;