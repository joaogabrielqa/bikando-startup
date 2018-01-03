import React, { Component } from 'react';

import NavbarMain from '../templates/navbar/NavbarMain';
import NavbarButton from '../templates/navbar/NavbarButton';
import NavbarBrand from '../templates/navbar/NavbarBrand';
import NavbarList from '../templates/navbar/NavbarList';
import NavbarListItem from '../templates/navbar/NavbarListItem';

class Navbar extends Component {
    render() {
        return (
            <NavbarMain minWidth='md' background='success' paddingValue='0'>
                <NavbarButton position='right' />
                <NavbarBrand image='mlogo.png' alt='' width='50' height='50' value='Bikando'/>
                <NavbarList alignment='r'>
                    <NavbarListItem route='/home' value='Como Funciona'/>
                    <NavbarListItem route='/work' value='Comece'/>
                    <NavbarListItem route='#' value='Adicione um Biko'/>
                </NavbarList>
                <NavbarList alignment='l'>
                    <NavbarListItem route='#' value='Entrar' faIcon='fa fa-users'/>
                </NavbarList>
            </NavbarMain>
        );
    }
}

export default Navbar;