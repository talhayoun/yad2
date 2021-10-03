import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { LoginContext } from '../context/LoginContext';
import HeaderLogin from './HeaderLogin';
import LikedAds from './LikedAds';
import SecondaryHeader from './SecondaryHeader';

const Header = () => {

    const upperOneDivList = ["נדלן", "רכב", "יד שנייה", "דרושים IL", "עסקים למכירה", "חיות מחמד", "בעלי מקצוע", "ועוד..."]

    const { userData, dispatchUserData } = useContext(LoginContext);
    const history = useHistory();

    const onClickNewPublish = () => {
        history.push('/publish')
    }


    return (
        <div className="header-container">
            <div className="header-upper-grid">
                <div className="header-upper-one">
                    <div className="header-upper-one-div"></div>
                    {upperOneDivList.map((data, index) =>
                        (<p key={index} className="header-upper-one-divs">{data}</p>))}
                </div>
                <div className="header-upper-two">
                    <div className="header-upper-two-divs">
                        <div className="header-upper-two-divs-one"></div>
                        <p>התראות</p>
                    </div>
                    <LikedAds />
                    <HeaderLogin userData={userData} dispatchUserData={dispatchUserData} />
                    <div className="header-upper-two-addpost">
                        <div className="header-upper-two-divs-four">+</div>
                        <p onClick={onClickNewPublish}>פרסום מודעה חדשה</p>
                    </div>
                </div>

            </div>
            <SecondaryHeader />
        </div>
    );
};

export default Header;