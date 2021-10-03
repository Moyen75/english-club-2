import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/How-to-Learn-Spoken-English_.png'
import './Courses.css'

const CourseOne = () => {
    return (
        <div className='mt-5 spoken'>
            <h1>Our courses</h1>
            <div className='d-flex justify-content-between mt-5 detail'>
                <div className='m-3 w-25 ms-5 text-justify'>
                    <h1>Basic Spoken</h1>
                    <p className=''>Get all the essential information about spoken and the most effective preparation tips from an ex-spoken examiner.</p>
                    <Link to={'/contact'}><button className='btn btn-primary'>Enroll now</button></Link>
                </div>
                <img width="500px" src={img} alt="" />
            </div>
        </div>
    );
};

export default CourseOne;