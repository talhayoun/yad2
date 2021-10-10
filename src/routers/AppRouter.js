import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdsContextProvider from '../components/context/AdsContext';
import LoginContextProvider from '../components/context/LoginContext';
import PublishContextProvider from '../components/context/PublishContext';
import LoginPage from '../components/login/LoginPage';
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