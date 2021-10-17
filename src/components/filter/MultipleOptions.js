import React, { useEffect, useState } from 'react';
import { getStreetsSuggested } from '../../server/publishRequests';

const MultipleOptions = ({ cities, setAssetName, assetName, setAssetTypeClass, setRoomsClass, showOptionsDiv, setShowOptionsDiv, setAssetType }) => {

    const [suggestedCities, setSuggestedCities] = useState([]);
    const [suggestedStreets, setSuggestedStreets] = useState([]);

    const handleClick = () => {
        setShowOptionsDiv(!showOptionsDiv)
        setAssetTypeClass("arrow-down")
        setRoomsClass("arrow-down")
    }

    const clickSuggested = (city, street) => {
        if (city) {
            setAssetName(city);
            setAssetType("city");
        }
        if (street) {
            console.log(street)
            setAssetName(`${street["שם_ישוב"]}, ${street["שם_רחוב"]}`)
            setAssetType("street");
        }
        setShowOptionsDiv(false)
    }

    useEffect(() => {
        if (assetName !== undefined && assetName.length > 1) {
            let suggestedList = [];
            for (let i = 0; i < cities.length; i++) {
                if (suggestedList.length === 4) break;
                if (cities[i]["שם_ישוב"].includes(assetName)) {
                    suggestedList.push(cities[i]["שם_ישוב"]);
                }
            }
            console.log(suggestedList)
            setSuggestedCities([...suggestedList])
            getStreetsSuggested(assetName).then(
                (res) => {
                    let suggestedStreet = [];
                    for (let i = 0; i < res.length; i++) {
                        if (suggestedStreet.length === 4) break;
                        suggestedStreet.push(res[i]);
                    }
                    setSuggestedStreets([...suggestedStreet]);
                }
            )
        }
    }, [assetName])

    useEffect(() => {
        console.log(suggestedCities)
    }, [suggestedCities])
    useEffect(() => {
        console.log(suggestedStreets)
    }, [suggestedStreets])

    return (
        <div className="filtercontent-one">
            <p>חפשו אזור, עיר, שכונה או רחוב</p>
            <input value={assetName} onClick={handleClick} onChange={(e) => setAssetName(e.target.value)} placeholder="לדוגמה: פלורנטין" />
            {showOptionsDiv &&
                <div className="filtercontent-showOptions">
                    <p className="multipleoptions-main">חפשו אזור,עיר, שכונה או רחוב</p>
                    {suggestedCities.length > 0 &&
                        <>
                            <div className="multipleoptions-header">מושב</div>
                            {suggestedCities.map((city) => (
                                <p className="multiple-options-suggested" onClick={() => clickSuggested(city)}>{city}</p>
                            ))}
                        </>
                    }
                    {suggestedStreets.length > 0 &&
                        <>
                            <div className="multipleoptions-header">רחוב</div>
                            {suggestedStreets.map((street) => (
                                <p className="multiple-options-suggested" onClick={() => clickSuggested(false, street)}>{street["שם_רחוב"]}, {street["שם_ישוב"]}</p>
                            ))}
                        </>
                    }
                </div>
            }
        </div>
    )
};

export default MultipleOptions;