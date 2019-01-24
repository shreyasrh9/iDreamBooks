import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as config from '../../config'
import style from './header.less'
import GenreDropDown from '../../components/GenreDropdown/genreDropdown'
import MenuDropdowns from '../../components/MenuDropdowns/menuDropdowns'

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

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const genres = config.GENRES
        const lists = config.LISTS
        let genreComponents = []
        let listComponents = []

        for (let i = 0; i < genres.length; i += 2) {
            genreComponents.push(<GenreDropDown key={i} genreLeft={genres[i]} genreRight={genres[i + 1]} />)
        }

        for (let i = 0; i < lists.length; i++) {
            listComponents.push(
                <DropdownItem key={i} className={style.genreList}>
                    <Col className={style.colMenu}>{lists[i]}</Col>
                </DropdownItem>)
        }

        return (
            <Navbar color="light" light expand="md" >
                <NavbarBrand href="/"><img src={config.LOGO} /> </NavbarBrand>
                <Link to="/" ><span className={style.subTitle}>{config.SUBTITLE}</span></Link>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <MenuDropdowns heading="Genres" options={genreComponents} />
                        <MenuDropdowns heading="Lists" options={listComponents} />
                        <MenuDropdowns heading="About" options={listComponents} />
                        <NavItem>
                            <NavLink onClick={this.loginModal} className={style.loginModalLink}>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header