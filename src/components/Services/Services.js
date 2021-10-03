import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className='m-4 text-warning'>Our Services</h1>
            <Row xs={1} md={4} className="g-4">

                {
                    courses.map(service => <Service
                        key={service.courseName}
                        service={service}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;