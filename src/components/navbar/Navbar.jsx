import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/navBar.css';
import { ImHome } from 'react-icons/im'


function Navbar() {
    return (
        <div className = 'header'>
            <ul>
                <li>
                    <Link to='/'>
                        <ImHome size='38px'/>
                    </Link>
                </li>
            
                {/* <li>
                    <Link to='/About-me'>
                        About
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Navbar
