import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="menu-bar">
                  
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand to="/home">FITNESS CLUB</Navbar.Brand>
                        <Nav className="links me-center ">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/services">Our Services</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Nav>
                    </Container>
                </Navbar>          

            </div>           
        </div>
    );
};

export default Header;