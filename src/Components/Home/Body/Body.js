import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Body = (props) => {
    const {name, price, picture, about} = props.info;
    return (
        <div>
                <Col>
                        <Card>
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                            <Card.Title>Course Name: {name}</Card.Title>
                            <Card.Text>
                               <h6>Price: {price} (Yearly)</h6>
                               <p><small>{about}</small></p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
               
           
        </div>
    );
};

export default Body;