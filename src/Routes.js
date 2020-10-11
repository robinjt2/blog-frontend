import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
    return(
        // Switch component from react router matches the first matching route that is defined within it
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}