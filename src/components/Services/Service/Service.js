import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { courseName, courseThumb, price, courseDetail } = props.service;
    const imgStyle = {
        maxHeight: '100px'
    }
    return (
        <Col>
            <Card>
                <Card.Img style={imgStyle} variant="top" src={courseThumb} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>{courseDetail}</Card.Text>
                    <p>Price:${price}</p>
                </Card.Body>
                <Link to={'/contact'}><button className='btn btn-primary mb-2'>Buy now</button></Link>
            </Card>
        </Col>
    );
};

export default Service;