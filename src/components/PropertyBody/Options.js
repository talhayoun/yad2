import React, { useContext, useState } from 'react';
import { filterAds, getAllAds } from '../../server/propertyRequests';
import { addAd, adFilters } from '../actions/adsActions';
import { AdsContext } from '../context/AdsContext';

const Options = ({ setOptions }) => {

    const [price, setPrice] = useState(false);
    const [image, setImage] = useState(false);

    const { adData, dispatchAdData } = useContext(AdsContext);

    const onClickFilter = () => {
        setOptions(false)
        let adsList = [];
        if (price && image) {
            for (let i = 0; i < adData.ads.length; i++) {
                if (adData.ads[i].price && adData.ads[i].images.length > 0) {
                    adsList.push(adData.ads[i]);
                }
            }
        }
        else if (image) {
            for (let i = 0; i < adData.ads.length; i++) {
                if (adData.ads[i].images.length > 0) {
                    adsList.push(adData.ads[i]);
                }
            }
        }
        else if (price) {
            for (let i = 0; i < adData.ads.length; i++) {
                if (adData.ads[i].price) {
                    adsList.push(adData.ads[i]);
                }
            }
        }
        if (adsList.length > 0)
            dispatchAdData(adFilters(adsList))
        else {
            getAllAds().then(
                (res) => {
                    dispatchAdData(adFilters([]))
                    dispatchAdData(addAd(res.ads))
                },
                (err) => {
                    console.log(err);
                }
            )
        }
    }
    return (
        <div className="propertybody-filterby-container-two-first-options">
            <div>
                <input type="checkbox" checked={price} onChange={() => setPrice(!price)} />
                <p>עם מחיר</p>
            </div>
            <div>
                <input type="checkbox" checked={image} onChange={() => setImage(!image)} />
                <p>עם תמונה</p>
            </div>
            <div className="property-filterby-container-two-first-options-lastdiv">
                <p>ניקוי</p>
                <span onClick={onClickFilter}>סינון</span>
            </div>
        </div>
    );
};

export default Options;