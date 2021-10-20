import React from 'react';
import './Header.css';
import Logo from './../Images/AirbnbLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div class="header">
            <Link to="/">
                <img className="logo" src={Logo} alt=""/>
            </Link>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon className="pointer"/>
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon className="pointer"/>
                <KeyboardArrowDownIcon className="pointer"/>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
