import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/navBar.css';

function Navbar() {
    return (
        <div className = 'header'>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
            
                <li>
                    <Link to='/About-me'>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
