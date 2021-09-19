import React from 'react';
import SecondaryHeader from './SecondaryHeader';

const Header = () => {

    const upperOneDivList = ["נדלן", "רכב", "יד שנייה", "דרושים IL", "עסקים למכירה", "חיות מחמד", "בעלי מקצוע", "ועוד..."]

    return (
        <div className="header-container">
            <div className="header-upper-grid">
                <div className="header-upper-one">
                    <div className="header-upper-one-div"></div>
                    {upperOneDivList.map((data) =>
                        (<p className="header-upper-one-divs">{data}</p>))}
                </div>
                <div className="header-upper-two">
                    <div className="header-upper-two-divs">
                        <div className="header-upper-two-divs-one"></div>
                        <p>התראות</p>
                    </div>
                    <div className="header-upper-two-divs">
                        <div className="header-upper-two-divs-two"></div>
                        <p>מודעות שאהבתי</p>
                    </div>
                    <div className="header-upper-two-divs">
                        <div className="header-upper-two-divs-three">
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <p>התחברות</p>
                    </div>
                    <div className="header-upper-two-addpost">
                        <div className="header-upper-two-divs-four">+</div>
                        <p>פרסום מודעה חדשה</p>
                    </div>
                </div>

            </div>
            <SecondaryHeader />
        </div>
    );
};

export default Header;