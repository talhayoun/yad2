import React from 'react';
import CheckBox from './CheckBox';

const Properties = ({ checkBox, setCheckBox }) => {
    return (
        <div className="advanced-filter-properties">
            <h3>מאפייני הדירה</h3>
            <CheckBox paragraph={"דלתות פנדור"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={'ממ"ד'} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"מרוהטת"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"חניה"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"סורגים"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"חיות מחמד"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"מעלית"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"מחסן"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"לשותפים"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"מיזוג"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"לטווח ארוך"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"גישה לנכים"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"מרפסת"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"משופצת"} checkBox={checkBox} setCheckBox={setCheckBox} />
            <CheckBox paragraph={"בבלעדיות"} checkBox={checkBox} setCheckBox={setCheckBox} />
        </div>
    );
};


export default Properties