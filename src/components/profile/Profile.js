import React, { useContext, useEffect, useState } from 'react';
import { getUserProfile } from '../../server/UserRequests';
import { LoginContext } from '../context/LoginContext';
import Header from '../header/Header';
import MiniAd from './MiniAd';

const Profile = () => {

    const {userData} = useContext(LoginContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [ads, setAds] = useState([]);

    useEffect(()=>{
        console.log("going in user profile")
        getUserProfile(userData.email, userData.token).then(
            (res)=>{
                console.log(res)
                if(res.user){
                    setFirstName(res.user.firstName)
                    setLastName(res.user.lastName)
                    setEmail(res.user.email)
                    setPhone(res.user.phone)
                    setAds([...res.user.ads])
                }
            },
            (err)=>{
                console.log(err)
            }
        )
    },[userData])
    
    
    return(
        <>
            <Header />
            <div className="profile">
                <div className="profile-nav">
                    <h3>מידע אישי</h3>
                    <div className="profile-personal">
                        <div className="profile-personal-name">
                                <div></div>
                                <p>{firstName} {lastName}</p>
                            </div>
                        <div className="profile-personal-email">
                            <div></div>
                            <p>{email}</p>
                        </div>
                        <div className="profile-personal-phone">
                            <div></div>
                            <p>{phone || "-"}</p>
                        </div>
                    </div>
                </div>
                <div className="profile-body">
                    <h1>המודעות שלי</h1>
                    <div className="profile-miniads-container">
                        {ads.length > 0 && ads.map((ad)=><MiniAd ad={ad} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;