import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaHotel} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const NavBar = () => {
    //Navbar component used is from react-bootstrap, the following is a responsible navbar
    //https://react-bootstrap.github.io/components/navbar/
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#/">
                <FaHotel className='nav-icon' />
                <span className='brand-name'>
                    Tokyo Night Resort
                </span> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#/rooms">Rooms</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#/about">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;