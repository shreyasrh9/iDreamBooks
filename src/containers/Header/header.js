import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as config from '../../config'
import style from './header.less'
import GenreDropDown from '../../components/GenreDropdown/genreDropdown'
import MenuDropdowns from '../../components/MenuDropDowns/menuDropdowns'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            
        };
    }

    // Dropdown toggle
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    

    render() {
        const genres = config.GENRES
        const genresValue = config.GENRES_VALUES
        const lists = config.LISTS
        let genreComponents = []
        let listComponents = []

        // Building GenreDropDown components
        for (let i = 0; i < genres.length; i++) {
            genreComponents.push(<GenreDropDown key={i} genre={genresValue[i]} genreVal={genres[i]} />)
        }

        return (
            <Navbar color="light" light expand="md" >
                <NavbarBrand href="/"><img src={config.LOGO} /> </NavbarBrand>
                <Link to="/" ><span className={style.subTitle}>{config.SUBTITLE}</span></Link>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {/* Will uncomment this if it is required */}

                        {/* <MenuDropdowns heading="Genres" options={genreComponents} />
                        <NavItem>
                            <NavLink onClick={this.loginModal} className={style.loginModalLink}><b>Login</b></NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header