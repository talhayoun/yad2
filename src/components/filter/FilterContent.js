import React from 'react';

const FilterContent = () => {

    return (
        <form className="filtercontent">
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
            <div className="filtercontent-five">
                <div>
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
        </form>
    );
};

export default FilterContent;