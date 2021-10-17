import React from 'react';
import { useHistory } from 'react-router';

const FilterPhone = () => {

    const history = useHistory();
    return (
        <div className="filterphone" onClick={() => history.push("/mobile/filter")}>
            <div className="filterphone-container">
                <div>
                    <div></div>
                    <p>נדל"ן להשכרה</p>
                </div>
                <span>חיפוש</span>
            </div>
        </div>
    );
};

export default FilterPhone;