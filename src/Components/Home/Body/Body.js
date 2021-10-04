import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Body = (props) => {
    const {name, price, picture, about} = props.info;
    return (
        <div>
           <Row xs={1} md={2} className="g-4">
               
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                               <h6>Price: {price} (Yearly)</h6>
                               <p><small>{about}</small></p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
               
            </Row>
        </div>
    );
};

export default Body;