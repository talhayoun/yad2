import React, { useEffect, useState } from 'react';
import { getAdById } from '../../server/propertyRequests';

const MiniAd = (props) => {
    console.log(props, "%")
    const [image, setImage] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    useEffect(() => {
        getAdById(props.ad.ad).then(
            (res => {
                console.log(res)
                if (res.ad) {
                    // if(res.ad.images.length > 0){
                    setImage(res.ad.images[0]?.image || "https://yad2-main.s3.eu-west-1.amazonaws.com/nodisplay.png");
                    setCity(res.ad.city);
                    setStreet(res.ad.street);
                }
            })
        )
    }, [props])
    return (
        <div className="miniad">
            <img src={image}></img>
            <div>
                <p>{city}</p>
                <p>{street}</p>
            </div>
        </div>
    );
};

export default MiniAd;