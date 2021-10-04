
import { Card, Col, Row } from 'react-bootstrap';

const Data = (props) => {
const {name,picture, about} = props.data;

    return (
        <div className="">
                    <Row xs={1} md={2} className="g-4 d-flex mr-auto">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={picture} />
                                <Card.Body>
                                <Card.Title>Course: {name}</Card.Title>
                                <Card.Text>
                                    {about}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
        </div>
    );

};

export default Data;