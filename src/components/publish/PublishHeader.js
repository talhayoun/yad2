import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteCookie } from '../../server/Cookie';
import { LogoutAction } from '../actions/loginActions';
import { LoginContext } from '../context/LoginContext';
import LoginModal from '../login/LoginModal';

const PublishHeader = () => {

    const { userData, dispatchUserData } = useContext(LoginContext);
    const [username, setUsername] = useState("התחברות")
    const [menu, setMenu] = useState(false)
    const [disconnect, setDisconnect] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const handleDisconnect = () => {
        setDisconnect(false);
        deleteCookie();
        dispatchUserData(LogoutAction());
    }

    const onClickLogo = () => {
        history.push("/")
    }

    const handleLogClick = () => {
        if (userData.email)
            setMenu(true)
        else
            setShowModal(true);
    }

    useEffect(() => {
        if (userData.firstName) {
            setUsername(userData.firstName)
        }
    }, [userData])

    return (
        <div className="publishheader">
            <div className="publishheader-first">
                <div onClick={onClickLogo}></div>
                <h2>פרסום מודעה חדשה</h2>
            </div>
            <div className="publisher-header-second">
                <div className="publisher-header-second-connect">
                    <div></div>
                    <p onClick={handleLogClick}>{username}</p>
                    {menu && userData.email &&
                        <ul className="publishheader-ul" onMouseLeave={() => setMenu(false)}>
                            <li>התחברות כמשתמש אחר</li>
                            <li onClick={() => setDisconnect(true)}>התנתקות</li>
                        </ul>
                    }
                </div>
                <div>
                    <p>צור קשר</p>
                </div>
            </div>
            {disconnect && <div className="loginmodal-blackbox"></div>}
            {disconnect &&
                <div className="publisher-header-disconnect">
                    <h1>התנתקות מהמשתמש</h1>
                    <p>בטוח שתרצה להתנתק מהמשתמש</p>
                    <p>{userData.firstName}</p>
                    <button className="publisher-header-disconnect-yes" onClick={handleDisconnect}>כן, תנתקו אותי</button>
                    <button className="publisher-header-disconnect-no" onClick={() => setDisconnect(false)}>לא, לחצתי בטעות</button>
                </div>
            }
            {showModal && <LoginModal setShowModal={setShowModal} />}
        </div>
    );
};

export default PublishHeader;