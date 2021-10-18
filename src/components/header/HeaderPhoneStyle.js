import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { LoginContext } from '../context/LoginContext';
import MobileHeaderDropDown from './MobileHeaderDropDown';

const HeaderPhoneStyle = () => {
    const history = useHistory();
    const [showNav, setShowNav] = useState(false);

    const { userData } = useContext(LoginContext);

    return (
        <div className="header-upper-one-phonestyle">
            <div className="header-upper-one-phonestyle-dropdown" onClick={() => setShowNav(!showNav)}></div>
            <div className="header-upper-one-phonestyle-whitelogo"></div>
            {!userData.email && <div className="header-upper-one-phonestyle-whitechat" onClick={() => history.push("/login")}></div>}
            {showNav && <MobileHeaderDropDown setShowNav={setShowNav} />}
        </div>
    );
};

export default HeaderPhoneStyle;