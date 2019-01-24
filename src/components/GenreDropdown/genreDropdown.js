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
            <Row >
                <Col className={style.colMenu}>{props.genreLeft}</Col>
                <Col className={style.colMenu}>{props.genreRight}</Col>
            </Row>
        
        </DropdownItem>

    );
}

export default genreDropdown