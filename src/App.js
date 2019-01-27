import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LandingPage from './containers/landingPage'
import Review from './containers/Review/review'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/review" component={Review} />
                    <Route path="/" exact component={LandingPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);