import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div className=' banner'>
            <div className='banner-text'>
                <h1>Study Shows Engaged Students Attain
                    up to 4.4X Their Expected Lexile Gains!</h1>
                <Link to={'/contact'}><button className='btn btn-primary'>Enroll now</button></Link>
            </div>
        </div>
    );
};

export default MainHeader;