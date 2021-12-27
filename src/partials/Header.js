import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>Image</Navbar.Brand>
                    <Nav.Link></Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}
