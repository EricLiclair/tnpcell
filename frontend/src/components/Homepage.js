import React, { Component } from 'react';
import LandingPage from "./Pages/LandingPage";
import StatsPage from "./Pages/StatsPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export class Homepage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path="/stats" component={StatsPage} />
                </Switch>
            </Router>
        );
    }
}

export default Homepage
