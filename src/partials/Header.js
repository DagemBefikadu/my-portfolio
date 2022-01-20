import React from 'react'
import {Nav, Navbar, Container, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Static/DagemLogo.png'



export default function Header() {
    const backgroundStyle = {
        backgroundColor: '#7c6c89'
    }    
    return (
        <div>
            <Navbar variant='dark' expand='md'>
                    <Navbar.Brand>
                        <Image src={logo} width="200" height="200"/>
                    </Navbar.Brand>
                    <Nav.Link></Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
            </Navbar>
        </div>
    )
}
