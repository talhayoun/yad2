import React, { useEffect, useState } from 'react';
import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';

const FilterContent = () => {
    const [advancedFilter, setAdvancedFilter] = useState(false);


    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="filtercontent" onSubmit={onFormSubmit}>
            <div className="filtercontent-one">
                <p>חפשו אזור, עיר, שכונה או רחוב</p>
                <input placeholder="לדוגמה: פלורנטין" />
            </div>
            <div className="filtercontent-two">
                <p>סוג נכס</p>
                <div>
                    <p>בחרו סוגי נכסים</p>
                    <p>X</p>
                </div>
            </div>
            <div className="filtercontent-three">
                <p>חדרים</p>
                <div>
                    <p>חדרים</p>
                    <p>X</p>
                </div>
            </div>
            <div className="filtercontent-four">
                <p>מחיר</p>
                <div>
                    <input placeholder="מ-"></input>
                    <input placeholder="עד-"></input>
                </div>
            </div>
            <div className="filtercontent-five" onClick={() => setAdvancedFilter(!advancedFilter)}>
                <div className="filtercontent-five-container">
                    <div>+</div>
                    <p>חיפוש מתקדם</p>
                </div>
            </div>
            <div className="filtercontent-six">
                <div>
                    <div></div>
                    <p>חיפוש</p>
                </div>
            </div>
            {advancedFilter && <AdvancedFilter />}
        </form>
    );
};

export default FilterContent;