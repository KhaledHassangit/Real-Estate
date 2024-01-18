import React from 'react'
import "./NavBar.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from "../../Assests/logo.png"
import { Fade, Roll } from "react-awesome-reveal";


const NavBar = () => {
    return(
        <Navbar expand="lg"  data-bs-theme="dark" className='bg sticky-lg-top ' >
            <Container className='d-flex justify-content-between'>
                <Roll duration={2000} >
                <Navbar.Brand href="#home" id='#home'>
                    <img className='logo' src={Logo} alt=''/>
                </Navbar.Brand>
                </Roll>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className='ms-auto'>
                    <Nav.Link href="#home">Residencies</Nav.Link>
                    <Nav.Link href="#features">Our Value</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    <Nav.Link href="#pricing">Get Started </Nav.Link>
                    <button className='navbar-button'>Contact</button>
                </Nav>
                </Navbar.Collapse>
                
        </Container>
        </Navbar>
    )
}

export default NavBar
