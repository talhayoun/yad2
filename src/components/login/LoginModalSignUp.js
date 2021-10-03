import React, { useEffect, useState } from 'react';
import LoginModalSignUpFirst from './LoginModalSignUpFirst';
import LoginModalSignUpSecond from './LoginModalSignUpSecond';

const LoginModalSignUp = ({setSignIn}) => {
    
    const [firstForm, setFirstForm] = useState(true);

    useEffect(()=>{
        console.log(firstForm)
    },[firstForm    ])
    return(
        <>
            {firstForm ? <LoginModalSignUpFirst setSignIn={setSignIn} setFirstForm={setFirstForm} /> : <LoginModalSignUpSecond />}
        </>
    )
}
export default LoginModalSignUp;