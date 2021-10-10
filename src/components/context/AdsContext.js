import React, { createContext, useReducer } from 'react';
import adsReducer, { adsInitialState } from '../reducers/AdsReducer';

export const AdsContext = createContext();

const AdsContextProvider = (props) => {
    const [adData, dispatchAdData] = useReducer(adsReducer, adsInitialState);

    return (
        <AdsContext.Provider value={{ adData, dispatchAdData }} >
            {props.children}
        </AdsContext.Provider>
    )
}

export default AdsContextProvider;