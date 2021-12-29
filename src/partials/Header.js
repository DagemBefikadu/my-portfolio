import React from 'react'
import {Nav, Navbar, Container, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Navbar variant='dark' expand='md'>
                    <Navbar.Brand>
                        <Image src="public/DagemLogo.png"/>
                    </Navbar.Brand>
                    <Nav.Link></Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
            </Navbar>
        </div>
    )
}
