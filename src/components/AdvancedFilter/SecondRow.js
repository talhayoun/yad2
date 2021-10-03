import React, { useState } from 'react';
import CheckBox from './CheckBox';

const SecondRow = ({ floorFrom, setFloorFrom, floorTo, setFloorTo, sizeFrom, setSizeFrom, sizeTo, setSizeTo, date, setDate }) => {


    const onChangeSizeFrom = (text, func) => {
        if (!isNaN(text)) func(text);
    }

    return (
        <div className="advanced-filter-secondrow">
            <div className="advanced-filter-secondrow-floorContainer">
                <label>קומה</label>
                <select onChange={(e) => setFloorFrom(e.target.value)} defaultValue={"מ-"}>
                    <option hidden="hidden" disabled="disabled">מ-</option>
                    <option value="all">הכל</option>
                    <option value="basement">מרתף\פרטר</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                </select>
                <select onChange={(e) => setFloorTo(e.target.value)} defaultValue={"עד-"}>
                    <option hidden="hidden" disabled="disabled" selected>עד-</option>
                    <option value="all">הכל</option>
                    <option value="basement">מרתף\פרטר</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                </select>
            </div>
            <div className="advanced-filter-secondrow-sizeContainer">
                <label>גודל דירה (במ"ר)</label>
                <input value={sizeFrom} onChange={(e) => onChangeSizeFrom(e.target.value, setSizeFrom)} placeholder="מ-" />
                <input value={sizeTo} onChange={(e) => onChangeSizeFrom(e.target.value, setSizeTo)} placeholder="עד-" />
            </div>
            <div className="advanced-filter-secondrow-date">
                <label>תאריך כניסה</label>
                <input type="date" placeholder="אנא הכנס תאריך" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="advanced-filter-checkbox">
                <input type="checkbox" />
                <p>כניסה מיידית</p>
            </div>
        </div>
    );
};

export default SecondRow