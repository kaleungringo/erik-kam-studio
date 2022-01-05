import React, { useState }from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri' ;
import logo from '../../logo.svg';
import './navbar.css';

import Social from '../social/Social';

const Menu = () => { 
    return(
    <>
    <p><Link to = '/'>主頁</Link></p>
    <p><Link to = '/about'>導師簡介</Link></p>
    <p><Link to = '/features'>畫室特色</Link></p>
    <p><Link to = '/goals'>辦學宗旨</Link></p>
    <p><Link to = '/studentworks'>學生作品</Link></p>
    <p><a href="http://wa.me/+85297912938" target="_blank" >聯絡我們</a></p>
    </>)
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false); // useState hook, 1. using menu, 2. function changing the variable

    return (
    <div className='kam__navbar'>
    <div className='kam__navbar-container'>
        <div className='kam__navbar-logo'>
            <img src= {logo} />
        </div>
        <div className='kam__navbar-links'>
            <div className='kam__navbar-links_container'>
                <Menu />
            </div>
            <div className='kam__navbar-social'>
                <Social />
            </div>
        </div>
        <div className='kam__navbar-menu'>
        {toggleMenu
          ? <></> //<RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        </div>
        {toggleMenu && (
        <div className="kam__navbar-menu_overlay scale-up-center" onClick={() => setToggleMenu(false)} >
            <div className="kam__navbar-menu_container">
                <Menu />
                <div className='kam__navbar-menu_social'>
                    <Social />
                </div>
            <p><RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} /></p>
            </div>
        </div>
        )}
    </div>
    </div>
    )
}

export default Navbar
