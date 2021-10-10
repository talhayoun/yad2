import React, { useState } from 'react';
import PropertyImageAndStreet from './PropertyImageAndStreet';
import SizeFloorRooms from './SizeFloorRooms';

const PropertyAfter = (props) => {

    const [showPhone, setShowPhone] = useState(false);

    return (
        <div className="property-after">
            <div className="property">
                <PropertyImageAndStreet data={{ ...props.data }} />
                <div onClick={() => props.setExtraData(!props.extraData)}>
                    <div className="property-one-second">
                        <div>
                            <p>{props.data.street}</p>
                            <div className="property-after-map">
                                <div></div>
                                <p>מפה </p>
                            </div>
                        </div>
                        <p className="property-one-second-secondp">{props.data.assetType}, {props.data.city}</p>
                    </div>
                    <SizeFloorRooms data={{ ...props.data }} />
                </div>
                <div className="property-three">
                    <div className="property-three-price">
                        <p>{props.data.price} ₪</p>
                    </div>
                    <div className="property-three-update">
                        <p></p>
                    </div>
                    <p className="property-three-bestac">המזגן הטוב ביותר שיצרנו</p>
                    <div onClick={() => setShowPhone(!showPhone)} className="property-three-phone">
                        <div className="property-three-phone-div"></div>
                        <p>הצגת מספר טלפון</p>
                        {showPhone &&
                            <div className="showphone">
                                <div>{props.data.username}</div>
                                <div>{props.data.phone}</div>
                                <div className="show-phone-email">שליחת דוא"ל למפרסם</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyAfter;