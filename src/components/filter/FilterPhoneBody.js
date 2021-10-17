import React from 'react';
import HeaderPhoneStyle from '../header/HeaderPhoneStyle';

const FilterPhoneBody = () => {
    return (
        <>
            <HeaderPhoneStyle />
            <div className="filterphonebody-ad-container">
                <div className="filterphonebody-ad"></div>
            </div>
            <div className="filterphonebody-options">
                <div>מכירה</div>
                <div className="filterphonebody-options-rent">השכרה</div>
                <div>שותפים</div>
                <div>מסחרי</div>
                <div>כונס נכסים</div>
            </div>
            <div className="filterphonebody-filterbody">
                <div className="filterphonebody-filterbody-clear">
                    <div></div>
                    <p>נקה הכל</p>
                </div>
                <form>
                    <label>חפשו לפי</label>
                </form>
            </div>
        </>
    );
};

export default FilterPhoneBody;