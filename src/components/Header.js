import React from 'react';
import './Header.css';
import Logo from './../Images/AirbnbLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div class="header">
            <img className="logo" src={Logo} alt=""/>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <KeyboardArrowDownIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
