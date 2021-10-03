import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/shafins-logo-black.x44717.png'
import './Header.css'

const Header = () => {
    const linkStyle = {
        margin: '3px',
        textDecoration: 'none'
    }
    return (
        <div>
            <div className='d-flex justify-content-between mb-4 container'>
                <img className='logo' src={logo} alt="" />
                <div className='d-flex mt-2 '>
                    <Link style={linkStyle} to={'/home'}>Home</Link>
                    <Link style={linkStyle} to={'/about'}>About</Link>
                    <Link style={linkStyle} to={'/services'}>Services</Link>
                    <Link style={linkStyle} to={'/contact'}>Contact us</Link>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;