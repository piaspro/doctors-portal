import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container>
            <Navbar bg="transparent" expand="lg" className="pt-5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Link to="/home" className="mr-5 link" >Home</Link>
                        <Link to="/eventTasks" className="mr-5 link" >About</Link>
                        <Link to="/eventTasks" className="mr-5 link" >Dental Services</Link>
                        <Link to="/register" className="mr-5 link a" >Review</Link>
                        <Link to="/register" className="mr-5 link a" >Blog</Link>
                        <Link to="/login" className="mr-5 link a" >Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;