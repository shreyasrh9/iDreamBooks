import React from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

import './menuDropdowns.less'

const menuDropdowns = (props) =>{
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {props.heading}
                            </DropdownToggle>
            <DropdownMenu className="dropdown-menu" right>
                {props.options}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default menuDropdowns