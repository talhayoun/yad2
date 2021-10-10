import React, { useEffect, useState } from 'react';
import { signUpUser } from '../../server/UserRequests';
import LoginModalSignUpFirst from './LoginModalSignUpFirst';
import LoginModalSignUpSecond from './LoginModalSignUpSecond';

const LoginModalSignUp = ({ setSignIn }) => {

    const [firstForm, setFirstForm] = useState(true);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("");
    const [numberingPhone, setNumberingPhone] = useState("");
    const [checkbox, setCheckBox] = useState(false);


    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, phone, numberingPhone, checkbox, password, email)
        signUpUser(email, password, phone, firstName, lastName).then(
            (res) => {
                if (res.message) {
                    setSignIn(true);
                }
            }
        )

        //SUBMIT FORM
    }

    useEffect(() => {
        console.log(firstForm)
    }, [firstForm])
    return (
        <>
            {firstForm ?
                <LoginModalSignUpFirst
                    setSignIn={setSignIn}
                    setFirstForm={setFirstForm}
                    password={password}
                    setPassword={setPassword}
                    email={email}
                    setEmail={setEmail}
                /> :
                <LoginModalSignUpSecond
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    phone={phone}
                    setPhone={setPhone}
                    numberingPhone={numberingPhone}
                    setNumberingPhone={setNumberingPhone}
                    checkbox={checkbox}
                    setCheckBox={setCheckBox}
                    onFormSubmit={onFormSubmit}
                />}
        </>
    )
}
export default LoginModalSignUp;