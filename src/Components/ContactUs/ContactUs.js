import React from 'react';
import { Form } from 'react-bootstrap';
import './ContactUs.css'



const ContactUs = () => {
   
    // export default ContactForm;

    return (
        <div className="form">            
           
           <div>
           <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label className="text-light">Your Email</Form.Label>
                            <Form.Control className="bg-info" type="email" placeholder="name@example.com" />
                    </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-light">Tell us what you want</Form.Label>
                            <Form.Control className="bg-info" as="textarea" rows={3} />
                            <button className="bg-success">Post</button>
                    </Form.Group>
            </Form>
            </div>  

            <div className="form-fonts">
                <h1>Location</h1>
                <h4>House:SW (i) 1/A,
                    Road: 22,
                    Gulshan-o2,
                    <br />
                    Dhaka-1213.
                    
                </h4>
                <h6>
                    Phone: 0196535754322
                    <br />
                    e-mail: fitnessclub@hotmail.com
                    
                </h6>

            </div>         

        </div>
    );
};

export default ContactUs;