import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/pte.jfif'

const CourseThree = () => {
    return (
        <div className='ielts'>
            <div className='d-flex justify-content-between mt-5 detail'>
                <div className='m-3 w-25 ms-5 text-justify'>
                    <h1 className='warning'>PTE</h1>
                    <p className=''>Get all the essential information about PTE and the most effective preparation tips from an ex-PTE examiner.</p>
                    <Link to={'/contact'}><button className='btn btn-primary'>Enroll now</button></Link>
                </div>
                <img width="500px" src={img} alt="" />
            </div>
        </div>
    );
};

export default CourseThree;