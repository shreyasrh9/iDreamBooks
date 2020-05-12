import React, { Component } from 'react';
import ReviewedBookListing from '../containers/ReviewedBooksListing/reviewedBookListing'

import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownItem,
    Col

} from 'reactstrap';

class LandingPage extends Component {

    render() {
        return (
            <div>
                {/* Loading reviewedBookListing componenet */}
                <h1>Test</h1>
                <ReviewedBookListing />
            </div>
        )
    }
}

export default LandingPage