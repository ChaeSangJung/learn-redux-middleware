import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navi from "./Navi";
import CounterContainer from './CounterContainer';
import ThunkCounterContainer from './ThunkCounterContainer';
import PostListContainer from "./PostListContainer";
import PostContainer from "./PostContainer";

const Routers = () => {
    return (
        <BrowserRouter>
            <>
                <Navi />
                <Switch>
                    <Route path="/" exact component={CounterContainer} />
                    <Route path="/thunkcounter" component={ThunkCounterContainer} />
                    <Route path="/postlist" exact component={PostListContainer} />
                    <Route path="/postlist/:id" exact component={PostContainer} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </BrowserRouter>
    )
}

export default Routers;