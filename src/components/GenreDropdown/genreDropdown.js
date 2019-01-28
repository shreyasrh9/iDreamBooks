import React from 'react'
import style from './genreDropdown.less'
import './genreDropdown.css'
import {
    DropdownItem,
    Row,
    Col
} from 'reactstrap';


const genreDropdown = (props) => {
    return (
        // Genre dropdown component
        <DropdownItem className={style.genreList}>
            <Row className={style.dropDownValue}>
                <Col className={style.colMenu} onClick={() => props.genreOptionChange(props.genreVal)}>{props.genre}</Col>
            </Row>
        </DropdownItem>

    );
}

export default genreDropdown