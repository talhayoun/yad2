import React, { useEffect, useState } from 'react';

const AssetType = ({ assetType, setAssetType, displayError }) => {
    const [error, setError] = useState(false)

    const onBlurSelect = () => {
        if(assetType !== "דירה או אולי פנטהאוז"){
            setError(false)
        }
    }

    useEffect(()=>{
        if(displayError[0]){
            setError(true);
        }else{
            setError(false)
        }
    },[displayError])

    return (
        <div>
            <h6>סוג הנכס*</h6>
            <select
             value={assetType}
             onChange={(e) => setAssetType(e.target.value)}
             placeholder="דירה או אולי פנטהאוז?"
             className={error ? "steps-error-input" : ""}
             onBlur={onBlurSelect}
             >
                <option hidden="hidden">דירה או אולי פנטהאוז?</option>
                <option>דירה</option>
                <option>דירת גן</option>
                <option>בית פרטי\קוטג'</option>
                <option>גג\פנטאהוז</option>
                <option>מגרשים</option>
                <option>דופלקס</option>
                <option>דירת נופש</option>
                <option>דו משפחתי</option>
                <option>מרתף\פרטר</option>
                <option>טריפליקס</option>
                <option>יחידות דיור</option>
                <option>משק חקלאי\נחלה</option>
                <option>משק עזר</option>
                <option>דיור מוגן</option>
                <option>בניין מגורים</option>
                <option>סטודיו\לופט</option>
                <option>מחסן</option>
                <option>חנייה</option>
                <option>קב' רכישה\זכות לנכס </option>
                <option>כללי</option>
            </select>
            {error && <p className="step-two-error-message">שדה חובה סוג הנכס</p>}
        </div>
    );
};

export default AssetType;