import React from 'react';

const InfoItems = ({ header, dataInfo }) => {
    return (
        <div className="propertyextra-infoitems">
            <p>{header}</p>
            <span>{dataInfo || '-'}</span>
        </div>
    );
};

export default InfoItems;