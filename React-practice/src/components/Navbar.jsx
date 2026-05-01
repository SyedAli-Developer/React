import React from 'react'
import Logo from '../assets/Images/LOGO.png'
const Navbar = () => {
    return (
        <nav id='Navbar'>
            <div id='LOGO'>
                <img src={Logo} alt="LOGO" />
                <h1>Haxudio</h1>
            </div>
            <div id='Tab'>
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
                <li>Contact</li>

            </div>
        </nav>
    )
}

export default Navbar
