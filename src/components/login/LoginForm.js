import React, { useEffect, useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LoginForm = () => {

    const [signup, setSignup] = useState(false);

    useEffect(() => {
        console.log(signup, "%")
    }, [signup])

    return (
        <div>
            {!signup ? <SignIn setSignup={setSignup} /> : <SignUp setSignup={setSignup} />}
        </div>
    );
};

export default LoginForm;