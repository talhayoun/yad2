import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdsContextProvider from '../components/context/AdsContext';
import LoginContextProvider from '../components/context/LoginContext';
import PublishContextProvider from '../components/context/PublishContext';
import FilterPhoneBody from '../components/filter/FilterPhoneBody';
import LoginPage from '../components/login/LoginPage';
import Profile from '../components/profile/Profile';
import Publish from '../components/publish/Publish';
import Rent from "../routers/Rent";

const AppRouter = () => {


    return (
        <BrowserRouter>
            <LoginContextProvider>
                <AdsContextProvider >
                    <Switch>
                        <Route path="/" component={Rent} exact={true} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/mobile/filter" component={FilterPhoneBody} />
                        <PublishContextProvider>
                            <Route path="/publish" component={Publish} />
                        </PublishContextProvider>
                    </Switch>
                </AdsContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRouter;