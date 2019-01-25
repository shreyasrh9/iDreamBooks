import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as config from '../config'
import style from './landingPage.less'
import Header from './Header/header'
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
                <Header />
                <br/>
                <BookListing />
            </div>
        )
    }
}

export default LandingPage