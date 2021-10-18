import React, { useContext, useEffect, useState } from 'react';
import { adFilters } from '../actions/adsActions';
import { AdsContext } from '../context/AdsContext';

const FilterBy = () => {

    const [check, setCheck] = useState([false, false, false])

    const { adData, dispatchAdData } = useContext(AdsContext);

    const handleCheck = (index) => {
        const copyCheck = [false, false, false];
        copyCheck[index] = true;
        setCheck(copyCheck)
    }

    useEffect(() => {
        let adsList = adData.ads;
        if (check[0]) {
            adsList.sort((a, b) => {
                let dateA = a.date.split(" - ");
                dateA = new Date(`${dateA[1]}-${dateA[0]}-${dateA[2]}`)
                let dateB = b.date.split(" - ");
                dateB = new Date(`${dateB[1]}-${dateB[0]}-${dateB[2]}`)
                return dateA > dateB ? 1 : -1;
            });
        } else if (check[1]) {
            adsList.sort((a, b) => a.price > b.price ? 1 : -1);
        } else if (check[2]) {
            adsList.sort((a, b) => a.price < b.price ? 1 : -1);
        }
        dispatchAdData(adFilters(adsList))

    }, [check])

    return (
        <div className="filterby-container">
            <div>
                <input type="radio" checked={check[0]} onClick={() => handleCheck(0)} />
                <p>לפי תאריך</p>
            </div>
            <div>
                <input type="radio" checked={check[1]} onClick={() => handleCheck(1)} />
                <p>מחיר - מהזול ליקר</p>
            </div>
            <div>
                <input type="radio" checked={check[2]} onClick={() => handleCheck(2)} />
                <p>מחיר - מהיקר לזול</p>
            </div>
        </div>
    );
};

export default FilterBy;