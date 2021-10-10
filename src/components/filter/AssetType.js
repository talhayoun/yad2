import React, { useEffect, useState } from 'react';
import CheckBox from '../AdvancedFilter/CheckBox';

const AssetType = (props) => {

    const [roomsClass, setRoomsClass] = useState("arrow-down");
    const [housesClass, setHousesClass] = useState("arrow-down");
    const [otherClass, setOtherClass] = useState("arrow-down");

    useEffect(() => {
        if (props.roomsCheckBox)
            props.setRoomsCheckBoxList(["דירה", "דירת גן", "גג\\פנטהאוז", "דופלקס", "דירת נופש", "מרתף\\פרטר", "טריפלקס", "יחידת דיור", "החלפת דירות", "סטודיו\\לופט", "סאבלט"])
        else {
            props.setRoomsCheckBoxList([])
        }
    }, [props.roomsCheckBox])


    useEffect(() => {
        if (props.housesCheckBox)
            props.setHousesCheckBoxList(['בית פרטי\\קוט"ג', "דו משפחתי", "משק חקלאי\\נחלה", "משק עזר"])
        else
            props.setHousesCheckBoxList([])
    }, [props.housesCheckBox])

    useEffect(() => {
        if (props.otherCheckBox)
            props.setOtherCheckBoxList(["מגרשים", "דיור מוגן", "בניין מגורים", "מחסן", "חניה", "קב' רכישה\\ זכות לנכס", "כללי"])
        else
            props.setOtherCheckBoxList([]);
    }, [props.otherCheckBox])

    useEffect(() => {
        if (props.allCheckBox) {
            props.setOtherCheckBox(true);
            props.setHousesCheckBox(true);
            props.setRoomsCheckBox(true);
        } else {
            props.setOtherCheckBox(false)
            props.setHousesCheckBox(false);
            props.setRoomsCheckBox(false);
        }
    }, [props.allCheckBox])

    return (
        <div className="filtercontent-assettype-container">
            <div>
                <input type="checkbox" value={props.allCheckBox} onChange={() => props.setAllCheckBox(!props.allCheckBox)} checked={props.allCheckBox} />
                <p>כל סוגי הנכסים</p>
            </div>
            <div onClick={() => setRoomsClass(roomsClass === 'arrow-down' ? "arrow-up" : "arrow-down")}>
                <input type="checkbox" onChange={() => props.setRoomsCheckBox(!props.roomsCheckBox)} checked={props.roomsCheckBox} />
                <p>דירות</p>
                <span className={roomsClass}></span>
            </div>
            {roomsClass === "arrow-up" &&
                <>
                    <CheckBox paragraph="דירה" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="דירת גן" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="גג\פנטהאוז" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="דופלקס" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="דירת נופש" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="מרתף\פרטר" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="טריפלקס" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="יחידת דיור" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="החלפת דירות" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="סאבלט" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                    <CheckBox paragraph="סטודיו\לופט" checkBox={props.roomsCheckBoxList} setCheckBox={props.setRoomsCheckBoxList} roomsCheckBox={props.roomsCheckBox} />
                </>
            }
            <div onClick={() => setHousesClass(housesClass === "arrow-down" ? "arrow-up" : "arrow-down")} >
                <input type="checkbox" onChange={() => props.setHousesCheckBox(!props.housesCheckBox)} checked={props.housesCheckBox} />
                <p>בתים</p>
                <span className={housesClass}></span>
            </div>
            {housesClass === "arrow-up" &&
                <>
                    <CheckBox paragraph="בית פרטי\קוט'ג" checkBox={props.housesCheckBoxList} setCheckBox={props.setHousesCheckBoxList} roomsCheckBox={props.housesCheckBox} />
                    <CheckBox paragraph="דו משפחתי" checkBox={props.housesCheckBoxList} setCheckBox={props.setHousesCheckBoxList} roomsCheckBox={props.housesCheckBox} />
                    <CheckBox paragraph="משק חקלאי\נחלה" checkBox={props.housesCheckBoxList} setCheckBox={props.setHousesCheckBoxList} roomsCheckBox={props.housesCheckBox} />
                    <CheckBox paragraph="משק עזר" checkBox={props.housesCheckBoxList} setCheckBox={props.setHousesCheckBoxList} roomsCheckBox={props.housesCheckBox} />
                </>
            }
            <div onClick={() => setOtherClass(otherClass === "arrow-down" ? "arrow-up" : "arrow-down")}>
                <input type="checkbox" onChange={() => props.setOtherCheckBox(!props.otherCheckBox)} checked={props.otherCheckBox} />
                <p>סוגים נוספים</p>
                <span className={otherClass}></span>
            </div>
            {otherClass === "arrow-up" &&
                <>
                    <CheckBox paragraph="מגרשים" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                    <CheckBox paragraph="דיור מוגן" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                    <CheckBox paragraph="בניין מגורים" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                    <CheckBox paragraph="מחסן" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                    <CheckBox paragraph="חניה" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                    <CheckBox paragraph="קב' רכישה\זכות לנכס" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                    <CheckBox paragraph="כללי" checkBox={props.otherCheckBoxList} setCheckBox={props.setOtherCheckBoxList} roomsCheckBox={props.otherCheckBox} />
                </>
            }
            <span onClick={() => props.clickClose("arrow-down")}>בחירה</span>
        </div>
    );
};

export default AssetType;