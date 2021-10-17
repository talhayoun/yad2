import React, { useEffect, useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates"
import "moment/locale/he";

const Dates = (props) => {

    const [focused, setFocused] = useState(null);
    const [date, setDate] = useState(null);
    const [error, setError] = useState(false);

    const handleWeekDays = (day) => {
        day._locale._weekdaysMin = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"];
        return (day.format('D'));
    }

    const onDateChange = (date) => {
        setDate(date.date);
        let day = (date.date._d.getDate()).toString();
        let month = (date.date._d.getMonth() + 1).toString();
        let year = date.date._d.getFullYear().toString().slice(2);
        props.setDate(`${day} - ${month} - ${year}`)

    }

    useEffect(() => {
        console.log(props.displayError, "Disaaa")
        if (props.displayError[2]) setError(true);
        else setError(false);

    }, [props.displayError])

    return (
        <div>
            <h6>תאריך כניסה*</h6>
            <SingleDatePicker
                placeholder={"DD/MM/YYYY"}
                isRTL={true}
                displayFormat="DD/MM/YY"
                renderDayContents={handleWeekDays}
                monthFormat="YYYY MMMM"
                date={date}
                onDateChange={(date) => onDateChange({ date })}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                id="Date"
                numberOfMonths={1}
                readOnly={true}
            />
            {error && <p className="step-two-error-message">שדה חובה תאריך כניסה</p>}
        </div >
    )
}

export default Dates;