import React from 'react';
import { NavLink } from 'react-bootstrap';
import logo from '../../images/shafins-logo-black.x44717.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-4 container'>
                <img className='logo' src={logo} alt="" />
                <div className='d-flex mt-2 '>
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/services'}>Services</NavLink>
                    <NavLink to={'/contact'}>Contact us</NavLink>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;