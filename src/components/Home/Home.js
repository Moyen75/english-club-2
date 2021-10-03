import React from 'react';
import CourseFour from '../Course/CourseFour';
import CourseOne from '../Course/CourseOne';
import CourseThree from '../Course/CourseThree';
import CourseTwo from '../Course/CourseTwo';
import MainHeader from '../MainHeader/MainHeader';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <CourseOne></CourseOne>
            <CourseTwo></CourseTwo>
            <CourseThree></CourseThree>
            <CourseFour></CourseFour>
        </div>
    );
};

export default Home;