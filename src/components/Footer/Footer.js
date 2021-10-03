import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-3 bg-dark'>
            <small>&copy;2021 all rights reserved.</small>
            <small><a href="">Terms</a></small>
            <small><a href="">Privacy</a></small>
            <small><a href="">Security</a></small>
        </div>
    );
};

export default Footer;