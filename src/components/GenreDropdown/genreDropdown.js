import React from 'react'
import style from './genreDropdown.less'
import './genreDropdown.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Row,
    Col

} from 'reactstrap';


const genreDropdown = (props) => {
    return (
        
        <DropdownItem className={style.genreList}>
            <Row className="dropDownValue">
                <Col className={style.colMenu}>{props.genre}</Col>
            </Row>
        
        </DropdownItem>

    );
}

export default genreDropdown