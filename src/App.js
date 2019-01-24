import React, { Component } from 'react';
import style from "./App.less";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LandingPage from './containers/landingPage'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);