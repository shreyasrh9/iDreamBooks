import React, { Component } from 'react';
import BookListing from '../containers/BooksListing/bookListing'

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
                <BookListing />
            </div>
        )
    }
}

export default LandingPage