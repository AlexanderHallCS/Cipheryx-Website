import React, { useState } from 'react'
import '../styles/Navbar.css'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { AppMenuItems, AppPrivacyItems } from './MenuItems';

function Navbar() {
    const [click, setClick] = useState(false);
    const [appDropdown, setAppDropdown] = useState(false);
    const [appPrivacyDropdown, setAppPrivacyDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnterAppDropdown = () => window.innerWidth < 960 ? setAppDropdown(false) : setAppDropdown(true);
    const onMouseLeaveAppDropdown = () => setAppDropdown(false);
    const onMouseEnterAppPrivacyDropdown = () => window.innerWidth < 960 ? setAppPrivacyDropdown(false) : setAppPrivacyDropdown(true);
    const onMouseLeaveAppPrivacyDropdown = () => setAppPrivacyDropdown(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Cipheryx
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterAppDropdown}
                        onMouseLeave={onMouseLeaveAppDropdown}>
                        <Link to='/apps' className='nav-links' onClick={closeMobileMenu}>
                            Apps <i className='fas fa-caret-down'/>
                        </Link>
                        {appDropdown && <Dropdown menuItems={AppMenuItems} />}
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnterAppPrivacyDropdown}
                        onMouseLeave={onMouseLeaveAppPrivacyDropdown}>
                        <Link to='/app-privacy' className='nav-links' onClick={closeMobileMenu}>
                            App Privacy <i className='fas fa-caret-down'/>
                        </Link>
                        {appPrivacyDropdown && <Dropdown menuItems={AppPrivacyItems} />}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;