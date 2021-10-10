import React from 'react';

const SizeFloorRooms = (props) => {
    return (
        <div className="property-two">
            <div className="property-two-data">
                <p>{props.data.roomsNumber}</p>
                <p>חדרים</p>
            </div>
            <div className="property-two-data">
                <p>{props.data.floorNumber}</p>
                <p>קומה</p>
            </div>
            <div className="property-two-data">
                <p>{props.data.size || props.data.totalSize}</p>
                <p>מ"ר</p>
            </div>
        </div>
    );
};

export default SizeFloorRooms;