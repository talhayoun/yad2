import React, { useState } from 'react';
import { useHistory } from 'react-router';
import MobileHeaderDropDown from './MobileHeaderDropDown';

const HeaderPhoneStyle = () => {
    const history = useHistory();
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="header-upper-one-phonestyle">
            <div className="header-upper-one-phonestyle-dropdown" onClick={() => setShowNav(!showNav)}></div>
            <div className="header-upper-one-phonestyle-whitelogo"></div>
            <div className="header-upper-one-phonestyle-whitechat" onClick={() => history.push("/login")}></div>
            {showNav && <MobileHeaderDropDown setShowNav={setShowNav} />}
        </div>
    );
};

export default HeaderPhoneStyle;