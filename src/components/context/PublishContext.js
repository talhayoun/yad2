import React, { createContext, useReducer } from 'react';
import publishReducer, { publishInitialState } from '../reducers/PublishReducer';

export const PublishContext = createContext();

const PublishContextProvider = (props) => {

    const [publishData, dispatchPublishData] = useReducer(publishReducer, publishInitialState);

    return (
        <PublishContext.Provider value={{ publishData, dispatchPublishData }} >
            {props.children}
        </PublishContext.Provider>
    )
}

export default PublishContextProvider;