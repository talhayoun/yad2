import React from 'react';
import Filter from '../filter/Filter';
import FilterPhone from '../filter/FilterPhone';
import PropertyBody from '../PropertyBody/PropertyBody';
import SecondaryAd from '../secondaryAd/SecondaryAd';
import TopAd from '../topAd/TopAd';

const Body = () => {


    return (
        <div className="body">
            <FilterPhone />
            <div className="body-container">
                <TopAd />
                <Filter />
                <SecondaryAd />
                <PropertyBody />
            </div>
            <div className="body-body"></div>
        </div>
    )
};

export default Body;