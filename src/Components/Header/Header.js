import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
             <div className="menu-bar">
                  
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/home">LOGO HERE</Navbar.Brand>
                    <Nav className="me-center">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/services">Our Services</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

             </div>
             
             <div className="footer">
            

             </div>
           
        </div>
    );
};

export default Header;