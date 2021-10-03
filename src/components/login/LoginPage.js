import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import LoginInfo from './LoginInfo';

const LoginPage = () => {

    useEffect(() => {
        console.log("ga")
    }, [])

    return (
        <div className="LoginPage">
            <div className="LoginPage-logo"></div>
            <div className="loginContainer">
                <LoginForm />
                <LoginInfo />
            </div>
        </div>
    );
};

export default LoginPage;
