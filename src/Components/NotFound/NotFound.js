import React from 'react';
import { Card } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
           <>
  <Card className="rounded mx-auto d-block">
    <Card.Img variant="top" src="https://img.freepik.com/free-vector/404-error-page-found-minimalist-dark-concept-cryptocurrency-website_111925-130.jpg?size=626&ext=jpg" />
    <Card.Body>
      <Card.Text>
       <h1> Search by a valid name, please.</h1>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
 
</>
        </div>
    );
};

export default NotFound;