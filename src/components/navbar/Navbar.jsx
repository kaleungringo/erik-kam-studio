import React, { useState }from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri' ;
import logo from '../../logo.svg';
import './navbar.css';

import Social from '../social/Social';

const Menu = () => { 
    return(
    <>
    {/*<p><Link to = '/'>主頁</Link></p>*/}
    <nav className='navbar__links'>
        <ul>
            <li><Link to = '/about'>導師簡介</Link></li>
            <li><Link to = '/features'>畫室特色</Link></li>
            <li><Link to = '/goals'>辦學宗旨</Link></li>
            <li><Link to = '/courses'>課程介紹</Link></li>
            <li><Link to = '/tailor'>繪畫定製</Link></li>
            <li><Link to = '/teacherworks'>導師作品</Link></li>
            <li><Link to = '/studentworks'>學生作品</Link></li>
            <li><Link to = '/contact'>聯絡我們</Link></li>
        </ul>
    </nav>

    </>)
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false); // useState hook, 1. using menu, 2. function changing the variable

    return (
    <div className='navbar'>
    <div className='navbar__container'>
        <div className='navbar__logo'>
            <Link to = '/'><img src= {logo} /></Link>
        </div>
        <div className='navbar__bar__container'>
                <Menu />
                <Social />
        </div>
        <div className='navbar__menu'>
        {toggleMenu
          ? <></> //<RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        </div>
        {toggleMenu && (
        <div className="navbar__menu__overlay scale-up-center" onClick={() => setToggleMenu(false)} >
            <div className="navbar__menu__container">
                <Menu />
                <Social />
                <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
            </div>
        </div>
        )}
    </div>
    </div>
    )
}

export default Navbar
