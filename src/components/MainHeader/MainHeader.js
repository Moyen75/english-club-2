import React from 'react';
import { NavLink } from 'react-bootstrap';
import logo from '../../images/A3K_HomeHeader_large_eQJwdRV.original.png'
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div className=' banner'>
            <div className='banner-text'>
                <h1>Study Shows Engaged Students Attain
                    up to 4.4X Their Expected Lexile Gains!</h1>
                <NavLink><button className='btn btn-primary'>Enroll now</button></NavLink>
            </div>
        </div>
    );
};

export default MainHeader;