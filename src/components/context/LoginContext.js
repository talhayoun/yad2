import React, { createContext, useEffect, useReducer } from 'react';
import { deleteCookie, getCookie } from '../../server/Cookie';
import { verifyCookie, verifyToken } from '../../server/UserRequests';
import { LoginAction, LogoutAction } from '../actions/loginActions';
// import { verifyCookie } from '../../server/UserRequests';
import LoginReducer, { initialUserData } from '../reducers/LoginReducer';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

    const cookieData = getCookie();

    useEffect(() => {
        verifyCookie(cookieData.email, cookieData.token).then(
            (res) => {
                console.log(res)
                console.log(cookieData.email, cookieData.token, cookieData.lastName)
                if (res.message === 'Verified')
                    dispatchUserData(LoginAction(cookieData.email, cookieData.token, cookieData.firstName, cookieData.lastName))
                else
                    dispatchUserData(LogoutAction())
            },
            (err) => {
                console.log(err)
                deleteCookie();
                dispatchUserData(LogoutAction())
            }
        )
    }, [cookieData.token])

    const [userData, dispatchUserData] = useReducer(LoginReducer, cookieData || initialUserData)

    return (
        <LoginContext.Provider value={{ userData, dispatchUserData }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;