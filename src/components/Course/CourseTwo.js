import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/IELTS-Exam-Pattern.jpg'
import './Courses.css'

const CourseTwo = () => {
    return (
        <div className='ielts'>
            <div className='d-flex justify-content-between mt-5 container p-4'>
                <img width="500px" src={img} alt="" />
                <div className='m-3 w-25 ms-5 text-justify'>
                    <h1 className='warning'>IELTS</h1>
                    <p className=''>Get all the essential information about IELTS and the most effective preparation tips from an ex-IELTS examiner.</p>
                    <Link to={'/contact'}><button className='btn btn-primary'>Enroll now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseTwo;