import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import LoginInfo from './LoginInfo';
import { useHistory } from 'react-router-dom';
const LoginPage = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }


    return (
        <div className="LoginPage">
            <div className="LoginPage-logo" onClick={handleClick}></div>
            <div className="loginContainer">
                <LoginForm />
                <LoginInfo />
            </div>
        </div>
    );
};

export default LoginPage;
