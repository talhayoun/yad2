import React from 'react';

const LikedAds = () => {
    return (
        <div className="header-upper-two-divs header-liked-ads">
            <div className="header-upper-two-divs-likedads">
                <div className="header-upper-two-divs-two"></div>
                <p>מודעות שאהבתי</p>
            </div>
            <ul className="liked-ads-ul">
                <li>
                    <h1>מודעות שאהבתי</h1>
                    <p>הרשימה שלך עדיין ריקה אפשר להוסיף מודעות לרשימה בלחיצה על הסימן בפינה הימנית של כל מודעה</p>
                </li>
            </ul>
        </div>
    )
};

export default LikedAds;