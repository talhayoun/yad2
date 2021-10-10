import React, { useEffect, useState } from 'react';
import ShowImage from './showImage';

const PropertyImageAndStreet = (props) => {

    const [count, setCount] = useState(0);
    const [showImage, setShowImage] = useState(false);

    return (
        <div className="property-one">
            <div onClick={() => setShowImage(true)} className="property-one-first">
                <img src={props.data.mainImage || "https://yad2-main.s3.eu-west-1.amazonaws.com/nodisplay.png"}></img>
                <div className="property-one-heart">
                    <div className="property-one-heart-img"></div>
                    <div onClick={() => setShowImage(true)} className="property-one-heart-seconddiv">
                        <p>{props.data.images.length}+</p>
                    </div>
                </div>
            </div>
            <div className="property-one-second">
                <p>{props.data.street}</p>
                <p className="property-one-second-secondp">{props.data.assetType}, {props.data.city}</p>
            </div>
            {showImage && <ShowImage setShowImage={setShowImage} showImage={showImage} props={props.data.images} count={count} setCount={setCount} />}
        </div>
    );
};

export default PropertyImageAndStreet;