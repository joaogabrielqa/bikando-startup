import React, { Component } from 'react';

import Routes from '../../main/Routes';

class NavbarList extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={`navbar-nav m${this.props.alignment}-auto`}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default NavbarList;