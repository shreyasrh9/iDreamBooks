import React from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

const menuDropdowns = (props) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                <b>{props.heading}</b>
            </DropdownToggle>
            <DropdownMenu right>
                {props.options}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default menuDropdowns