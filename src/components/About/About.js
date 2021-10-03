import React from 'react';
import img from '../../images/shafin-ahmed-e1542102458724.jpg'

const About = () => {
    return (
        <div>
            <div className='bg-warning p-5 text-light'>
                <h1>ABOUT US</h1>
            </div>
            <div className='d-flex mt-4'>
                <div className='mx-3'>
                    <h1>Welcome to SHAFIN'S</h1>
                    <div>
                        <h3>Our mission</h3>
                        <p className='text-right'>To be the premier educational institution in providing high-quality, affordable and accessible educational programmes serving the needs of business, industry and the diverse campus communities and facilitating the personal and professional development of its students, faculty and staff. To offer opportunities to students/Learners from across the globe by encouraging them to reach their potentials through communicative and flexible teaching and learning strategies. Also to contribute a fair share in societal development by offering opportunities of employment as well as career development to our students. Satisfying the diverse needs and expectations of all members of this institute and community by creating an environment of tolerance, care, professionalism and regulatory compliance.</p>
                    </div>
                    <div>
                        <h3>Our vission</h3>
                        <p className='text-right'>Our vision is to become the ‘provider of choice’ of learning and development solutions in the market we serve. We design and deliver high quality, original learning and development solutions that meet our client’s organizational needs. We are devoted to inspiring people to realize their full potential through a wealth of learning solutions that is engaging, innovative and challenging.” To be a student-centered, dynamic and innovative, unique class campus of SHAFIN’S Center, promoting excellence in teaching and learning, serving diverse communities and producing lifelong learners who can compete globally.</p>
                    </div>
                </div>
                <div className='mx-3'>
                    <img width='400px' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;