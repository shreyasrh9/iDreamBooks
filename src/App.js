import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LandingPage from './containers/landingPage'
import BookReviewDetails from './containers/BookReviewDetails/bookReviewDetails'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Setting the route path components */}
                <Switch>
                    <Route path="/review" component={BookReviewDetails} />
                    <Route path="/idreambook" exact component={LandingPage} />
                    <Redirect to="/idreambook" />
                </Switch>
                
            </div>
        );
    }
}

export default withRouter(App);