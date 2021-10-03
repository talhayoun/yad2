import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import LoginModalSignIn from './LoginModalSignIn';
import LoginModalSignUp from './LoginModalSignUp';

const LoginModal = ({ setConnect, setShowModal, removeX }) => {

    const { userData, dispatchUserData } = useContext(LoginContext)

    const [modalClass, setModalClass] = useState("");
    const [removeExitButton, setRemoveExitButton] = useState(false);

    const [signIn, setSignIn] = useState(true);

    const closeModal = () => {
        setModalClass(modalClass === "loginmodal-display" ? "loginmodal-display-none" : "loginmodal-display");
        if (setShowModal)
            setShowModal(false)
    }


    useEffect(() => {
        if (removeX) setRemoveExitButton(true)
    }, [removeX])

    useEffect(() => {
        if (!userData.email)
            setModalClass('loginmodal-display');
        else
            setModalClass("loginmodal-display-none")
    }, [userData])

    return (
        <div className={modalClass}>
            <div className="loginmodal-blackbox"></div>
            <div className="loginmodal-container">
                <div className="loginmodal-welcome">
                    {!removeExitButton && <div className="loginmodal-close" onClick={closeModal}>X</div>}
                    <div className="loginmodal-welcome-yad2logo"></div>
                    <h1>ברוכים הבאים לאתר יד2</h1>
                    <h3>טוב לראות אותך שוב!</h3>
                    <div className="loginmodal-welcome-couch"></div>
                </div>
                {signIn ? <LoginModalSignIn setConnect={setConnect} setSignIn={setSignIn} /> : <LoginModalSignUp setSignIn={setSignIn} />}
            </div>
        </div>
    );
};

export default LoginModal;