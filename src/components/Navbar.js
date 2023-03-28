import React, { useState } from 'react'
import '../styles/Navbar.css'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
    const onMouseLeave = () => setDropdown(false);

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
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to='/apps' className='nav-links' onClick={closeMobileMenu}>
                            Apps <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;