import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';

function Dropdown(props) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return  (
        <>
            <ul onClick={handleClick} 
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Dropdown;