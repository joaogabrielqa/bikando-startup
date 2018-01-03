import React, { Component } from 'react';

class NavbarListItemDropdown extends Component {
    render(){
        return(
            <li className="nav-item dropdown mr-3">
                <a href="" data-toggle='dropdown' className="nav-link dropdown-toggle">
                    <i className="fa fa-user"></i> 
                </a>
            </li>
        );
    }
}