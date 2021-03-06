import React, { useContext, useEffect, useState } from 'react';
import { getAllAds } from '../../server/propertyRequests';
import { addAd, adEmpty } from '../actions/adsActions';
import { AdsContext } from '../context/AdsContext';
import FilterBy from './FilterBy';
import Options from './Options';
import Property from './Property';

const PropertyBody = () => {

    const [arrow, setArrow] = useState("arrow-down")
    const [options, setOptions] = useState(false);
    const [filterBy, setFilterBy] = useState(false);

    const changeArrowStyle = () => {
        setArrow(arrow === "arrow-down" ? "arrow-up" : "arrow-down");
        setFilterBy(!filterBy)
    }

    const { adData, dispatchAdData } = useContext(AdsContext);


    useEffect(() => {
        dispatchAdData(adEmpty())
        getAllAds().then(
            (res) => {
                if (res.ads.length > 0) {
                    let adsList = [];
                    for (let i = 0; i < res.ads.length; i++) {
                        adsList.push(res.ads[i]);
                        dispatchAdData(addAd(res.ads[i]));

                    }
                    // setAds([...adsList]);
                }
            },
            (err) => {
                console.log(err);
            }
        )
    }, [])

    useEffect(() => {
        console.log(adData, "&*")
    }, [adData])

    return (
        <div className="propertybody">
            <div className="propertybody-topheader">
                <h1>נדל"ן להשכרה</h1>
                <p>מציג {adData.length} מודעות</p>
            </div>
            <div className="propertybody-filter">
                <div className="propertybody-filterby-container">
                    <p>מיין לפי</p>
                    <div className="propertybody-filterby" onClick={changeArrowStyle}>
                        <p>לפי תאריך</p>
                        <div className={arrow}></div>
                    </div>
                    {filterBy && <FilterBy />}
                </div>
                <div className="propertybody-filterby-container-two">
                    <div className="propertybody-filterby-container-two-first" onClick={() => setOptions(!options)}>
                        <div></div>
                        <p>סנן תוצאות</p>
                    </div>
                    {options && <Options setOptions={setOptions} />}
                    <div className="propertybody-filterby-container-two-second">
                        <div></div>
                        <p>תצוגת מפה</p>
                    </div>
                </div>
            </div>
            {adData.ads.length > 0 && adData.ads.map((ad) => (
                <Property
                    data={{ ...ad }}
                    key={ad._id}
                />
            ))}
        </div>
    );
};

export default PropertyBody;