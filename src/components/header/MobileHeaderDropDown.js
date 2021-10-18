import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';


const MobileHeaderDropDown = ({ setShowNav }) => {

    const history = useHistory();
    const { userData } = useContext(LoginContext);

    const handlePublishClick = () => {
        // setShowNav(false);
        history.push("/publish");
    }

    return (
        <>
            <div className="mobile-dropdown">
                <div className="mobile-dropdown-close" onClick={() => setShowNav(false)}>X</div>
                <div className="mobile-dropdown-header">
                    <div className="mobile-dropdown-header-user-container">
                        <div className="mobile-dropdown-header-user">
                            <div></div>
                        </div>
                    </div>
                    {userData.firstName ? <p>{userData.firstName} {userData.lastName}</p> : <p>התחברות</p>}
                    <button onClick={handlePublishClick}>פרסום מודעה</button>
                    <div className="mobile-dropdown-header-options">
                        <div className="mobile-dropdown-header-options-alert">
                            <div></div>
                            <p>התראות שלי</p>
                        </div>
                        <div className="mobile-dropdown-header-options-likedads">
                            <div></div>
                            <p>מודעות שאהבתי</p>
                        </div>
                        <div className="mobile-dropdown-header-options-lastsearch">
                            <div></div>
                            <p>חיפושים אחרונים</p>
                        </div>
                        <div className="mobile-dropdown-header-options-compare">
                            <div></div>
                            <p>השוואת רכבים</p>
                        </div>
                    </div>
                </div>
                <div className="mobile-dropdown-body">
                    <h3>חיפוש מהיר באתר</h3>
                    <p>נדל"ן</p>
                    <p>רכב</p>
                    <p>יד שנייה</p>
                    <p>עסקים למכירה</p>
                    <p>דרושים IL</p>
                    <p>חיות מחמד</p>
                    <p>תיירות ונופש</p>
                    <p>לימודים</p>
                </div>
                <div className="mobile-dropdown-categories">
                    <h3>ניווט לפי קטגוריות</h3>
                    <div>
                        <p>נדל"ן</p>
                        <div></div>
                    </div>

                    <div>
                        <p>רכב</p>
                        <div></div>
                    </div>

                    <div>
                        <p>יד שנייה</p>
                        <div></div>
                    </div>

                    <div>
                        <p>דרושים IL</p>
                        <div></div>
                    </div>

                    <div>
                        <p>עסקים למכירה</p>
                        <div></div>
                    </div>

                    <div>
                        <p>חיות מחמד</p>
                        <div></div>
                    </div>
                    <div>
                        <p>בעלי מקצוע</p>
                        <div></div>
                    </div>
                    <div>
                        <p>תיירות ונופש</p>
                    </div>
                    <div>
                        <p>לימודים</p>
                    </div>
                    <div>
                        <p>מגזין יד2</p>
                    </div>

                </div>
                <div className="mobile-dropdown-footer">
                    <div className="mobile-dropdown-footer-first">
                        <p>תקנון</p>
                        <p>פרטיות ותנאים</p>
                        <p>נגישות</p>
                    </div>
                    <div className="mobile-dropdown-footer-second">
                        <p>מענה לשאלות</p>
                        <p>יצירת קשר</p>
                    </div>
                </div>
            </div>
            <div className="mobile-blackbox"></div>
        </>
    );
};

export default MobileHeaderDropDown;