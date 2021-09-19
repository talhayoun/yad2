import React from 'react';
import FilterContent from './FilterContent';

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter-container">
                <div className="filter-upper-div">
                    <p>איזה נכס ל<span>השכרה</span> תרצו לחפש?</p>
                    <div>
                        <div></div>
                        <p>קבלו התראות במייל על החיפוש</p>
                    </div>
                </div>
                <div className="filter-down-div">
                    <FilterContent />
                </div>
            </div>
        </div>
    );
};

export default Filter;