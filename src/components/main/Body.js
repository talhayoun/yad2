import React from 'react';
import Filter from '../filter/Filter';
import PropertyBody from '../PropertyBody/PropertyBody';
import SecondaryAd from '../secondaryAd/SecondaryAd';
import TopAd from '../topAd/TopAd';

const Body = () => (
    <div className="body">
        <div className="body-container">
            <TopAd />
            <Filter />
            <SecondaryAd />
            <PropertyBody />
        </div>
    </div>
);

export default Body;