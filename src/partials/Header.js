import React from 'react'
import {Nav, Navbar, Container, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import logo from '../Static/DagemLogo.png'



export default function Header() {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }    
    return (
        <div>
            <Navbar sticky="top" variant='dark' expand='md'>
                    <Navbar.Brand>
                        {/* <Image src={logo} width="200" height="200"/> */}
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link style={linkStyle}>About</Nav.Link>
                        <Nav.Link style={linkStyle}>| Projects</Nav.Link>
                        <Nav.Link style={linkStyle}>| Contacts</Nav.Link>
                    </Nav>
     
            </Navbar>
        </div>
    )
}
