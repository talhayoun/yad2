import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Publish from '../components/publish/Publish';
import Rent from "../routers/Rent";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Rent} exact={true} />
                <Route path="/publish" component={Publish} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;