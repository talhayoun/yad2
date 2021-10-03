import React, { useEffect, useState } from 'react';
import { getStreetsSuggested } from '../../server/publishRequests';

const Street = ({ cityValue, streetValue, setStreetValue, displayError }) => {

    const [streets, setStreets] = useState([]);
    const [autoCompleteStreetNames, setAutoCompleteStreetNames] = useState([]);
    const [lastCityValue, setLastCityValue] = useState("");
    const [error, setError] = useState(false);

    const onChangeInput = (userInput) => {
        // console.log("lala", userInput)
        setStreetValue(userInput)
        // console.log("lala", userInput)
        let currentStreets = [];
        for (let i = 0; i < streets.length; i++) {
            if (streets[i].includes(userInput)) {
                if (currentStreets.length >= 10) break;
                currentStreets.push(streets[i]);
            }
        }
        setAutoCompleteStreetNames([...currentStreets]);
    }

    const onClickSuggested = (street) => {
        console.log("CLICKED")
        setStreetValue(street);
        setLastCityValue(street);
        setAutoCompleteStreetNames([]);
    }

    const onBlurInput = () => {
        if (streetValue.length > 0) setError(false)
        if (lastCityValue !== streetValue) {
            setStreetValue("");
            setTimeout(() => {
                setAutoCompleteStreetNames([]);
            }, 200);
        }
    }

    useEffect(() => {
        if (displayError[2]) setError(true);
        else setError(false);
    }, [displayError])

    useEffect(() => {
        if (cityValue !== "") {
            getStreetsSuggested(cityValue).then(
                (res) => {
                    console.log(res, "in street");
                    if (res.length > 0) {
                        let streets = [];
                        for (let i = 0; i < res.length; i++) {
                            streets.push(Object.entries(res)[i][1]["שם_רחוב"])
                        }
                        setStreets([...streets]);
                    }
                }
            )
        } else {
            setStreetValue("")
        }
    }, [cityValue, setStreetValue])

    return (
        <div className="steptwo-streets">
            <h6 className={cityValue === "" ? "steps-disabled-header" : ""}>רחוב*</h6>
            <input className={cityValue === "" ? `steps-disabled-input ${error === true ? "steps-error-input" : ""}` : `${error === true ? "steps-error-input" : ""}`}
                disabled={cityValue === "" ? "disabled" : false}
                placeholder="הכנסת שם הרחוב"
                value={streetValue}
                onChange={(e) => onChangeInput(e.target.value)}
                onBlur={() => onBlurInput()}
            />
            {autoCompleteStreetNames.length > 0 && <div className={streetValue.length > 0 ? "step-two-suggestedcity" : "none"}>
                {autoCompleteStreetNames.map((street, index) => (
                    <p key={index} className="step-two-suggested-city" onClick={() => onClickSuggested(street)}>{street}</p>
                ))}
            </div>}
            {error && <p className="step-two-error-message">יש לבחור רחוב מתוך הרשימה</p>}
        </div>
    );
};

export default Street;