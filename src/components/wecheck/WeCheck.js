import React from 'react';

const WeCheck = () => {
    return (
        <div className="steptwo-wecheck">
            <div className="steptwo-wecheck-firstdiv">
                <div className="steptwo-wecheck-firstdiv-wechecklogo"></div>
                <h2>- שירות חינמי מדהים רק ללקוחות יד2!</h2>
                <span>בשותפות</span>
                <div className="steptwo-wecheck-firstdiv-yad2logo"></div>
                <div className="steptwo-wecheck-firstdiv-isracart"></div>
            </div>
            <div className="steptwo-wecheck-seconddiv">
                <h3>אל תסמוך על רושם ראשוני הכר את הדיירים שלך - זה בחינם!</h3>
            </div>
            <div className="steptwo-wecheck-thirddiv">
                <input type="checkbox" />
                <p>אני מאשר\ת העברת פרטיי ופרטי המודעה לWeCheck וקבלת SMS להפעלת השירות</p>
            </div>
            <div className="steptwo-wecheck-fourthdiv">
                <div></div>
            </div>
        </div>
    );
};

export default WeCheck;