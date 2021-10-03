import React from 'react';
import { useHistory } from 'react-router';
import { deleteCookie } from '../../server/Cookie';
import { LogoutAction } from '../actions/loginActions';

const HeaderLogin = ({ userData, dispatchUserData }) => {

    const history = useHistory()

    const loginClick = () => {
        if (userData.email)
            history.push('/profile')
        else
            history.push("/login")
    }

    const onClickLogOut = () => {
        deleteCookie();
        dispatchUserData(LogoutAction());
        history.push('/')
    }

    return (
        <div className="header-upper-two-divs header-login" >
            <div className="header-upper-two-divs-login-container" onClick={loginClick} >
                <div className="header-upper-two-divs-three">
                    <div className={userData.email ? "header-connected-container" : "header-connect-container"}>
                        {userData.email ? <div className="header-connected-div">{userData.firstName}</div> : <div className="header-connect-div"></div>}
                    </div>
                </div>
                {userData.email ? <p className="header-connected-user-hover">{userData.firstName} {userData.lastName}</p> : <p>התחברות</p>}
            </div>
            <ul className="headerlogin-container">
                {userData.firstName && <li>
                    <div className="headerlogin-profile">
                        <div></div>
                        <p>איזור אישי</p>
                    </div>
                </li>}
                <li>
                    <div className="headerlogin-cars">
                        <div></div>
                        <p>השוואת רכבים</p>
                    </div>
                </li>
                <li>
                    <div className="headerlogin-lastsearch">
                        <div></div>
                        <p>חיפושים אחרונים</p>
                    </div>
                </li>
                {userData.firstName && <li>
                    <div onClick={onClickLogOut} className="headerlogin-logout">
                        <div></div>
                        <p>התנתקות</p>
                    </div>
                </li>}
            </ul>
        </div>
    );
};

export default HeaderLogin;
