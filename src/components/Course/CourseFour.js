import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/Pronunication-Practice-test-p96w5ux4pgu7bythdqwdzt0s6zmhyq8mpzj84wv4i0.png'

const CourseFour = () => {
    return (
        <div className='ielts'>
            <div className='d-flex justify-content-between mt-5 container p-4'>
                <img width="500px" src={img} alt="" />
                <div className='m-3 w-25 ms-5 text-justify'>
                    <h1 className='warning'>Pronunciation</h1>
                    <p className=''>In this course, you will improve your English pronunciation skills and learn about speaking English in today's globalised world.</p>
                    <Link to={'/contact'}><button className='btn btn-primary'>Enroll now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseFour;