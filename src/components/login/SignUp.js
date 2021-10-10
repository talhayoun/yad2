import React, { useState } from 'react';
import { signUpUser } from '../../server/UserRequests';
import SignUpFirstForm from './SignUpFirstForm';
import SignUpSecondForm from './SignUpSecondForm';

const SignUp = ({ setSignup }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [checkbox, setCheckBox] = useState(true);

    const [firstFormClicked, setFirstFormClicked] = useState(false);


    const onFormSubmit = (e) => {
        // e.preventDefault()
        let firstNameError = firstName === "" ? true : false;
        let lastNameError = lastName === "" ? true : false;
        let phoneError = phone.length < 9 ? true : false;
        let emailError = email === "" ? true : false;
        let passwordError = password === "" ? true : false;
        if (!firstNameError && !lastNameError && !phoneError && !emailError && !passwordError && checkbox) {
            signUpUser(email, password, phone, firstName, lastName).then(
                (res) => {
                    if (res.message) {
                        setSignup(false);
                    } else {
                        throw new Error(res.err);
                    }
                },
                (err) => {
                    console.log(err);
                }
            )
        }
    }


    return (
        <>
            <div className="signup-div">
                {firstFormClicked ?
                    <SignUpSecondForm
                        firstName={firstName}
                        setFirstName={setFirstName}
                        phone={phone}
                        setPhone={setPhone}
                        setLastName={setLastName}
                        lastName={lastName}
                        checkbox={checkbox}
                        setCheckBox={setCheckBox}
                        onFormSubmit={onFormSubmit}
                    /> :
                    <SignUpFirstForm
                        setSignUp={setSignup}
                        setFirstFormClicked={setFirstFormClicked}
                        password={password}
                        setPassword={setPassword}
                        email={email}
                        setEmail={setEmail} />}
            </div>
        </>
    );
};

export default SignUp;