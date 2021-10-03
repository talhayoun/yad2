import React, { useContext, useEffect, useState } from 'react';
import { PublishContext } from '../context/PublishContext';

const TextArea = ({ textarea, setTextArea, displayError, textAreaMessageDisplay, setTextAreaMessageDisplay }) => {


    const { publishData } = useContext(PublishContext);

    const [error, setError] = useState(false);

    const handleNotNowButton = () => {
        setTextArea(" ");
        setError(false)
        setTextAreaMessageDisplay(true)
    }

    const handleContinueButton = () => {
        setError(false);
        setTextAreaMessageDisplay(true);
    }

    useEffect(() => {
        if (displayError[1]) setError(true);
        else setError(false);

        if (displayError[1] && textarea.length === 0) {
            setTextArea(`להשכרה,${publishData.assetType}, קומה ${publishData.floorNumber}, ב${publishData.city} `)
        }
    }, [displayError, publishData, textarea, setTextArea])

    return (
        <div className="stepthree-textarea">
            <h6>מה חשוב לך שידעו על הנכס?</h6>
            <div>
                <p>פירוט הנכס</p>
                <span>{textarea.length}/400</span>
                <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} maxLength="400" cols="5" placeholder="זה המקום לתאר את הפרטים הבולטים, למשל האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"></textarea>
            </div>
            {error && !textAreaMessageDisplay && <div className="steps-black-box"></div>}
            {error && !textAreaMessageDisplay &&
                <div className="stepthree-textarea-popupbox">
                    <div className="stepthree-textarea-popupbox-container">
                        <h2>בטוח שיש עוד מידע שכדאי שהגולשים ידעו</h2>
                        <p>אנחנו הוספנו את כל מה שידוע לנו לגבי הכנס.</p>
                        <p> לך נשאר להמשיך עם היתרונות שמוכרים רק לך.</p>
                        <div className="stepthree-textarea-popupbox-textcontainer">
                            <div className="stepthree-textarea-popupbox-textcontainer-firstdiv">
                                <h3>פרוט הנכס</h3>
                                <p>{textarea.length}/400</p>
                            </div>
                            <div className="stepthree-textarea-popupbox-textcontainer-seconddiv">
                                <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} maxLength="400" />
                                <div className="stepthree-textarea-popupbox-textcontainer-seconddiv-X" onClick={() => setTextArea("")}>X</div>
                                <div className="stepthree-textarea-popupbox-textcontainer-seconddiv-buttons">
                                    <button className="stepthree-textarea-popupbox-firstbutton" onClick={handleContinueButton}>עדכנתי, בואו נמשיך</button>
                                    <button className="stepthree-textarea-popupbox-secondbutton" onClick={handleNotNowButton}>לא כרגע</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TextArea;