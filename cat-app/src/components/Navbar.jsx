import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import { useState } from "react";
const NavComp = () => {


    return (
        <nav className="home-nav">
            <Navbar  expand="lg">
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to="/">
                    <h3>Cat </h3>
                    <h3>Cheetah-</h3>
                    <h3>Sheet</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/breeds">Breeds</Nav.Link>
                        <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
                    </Nav>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/breeds">Breeds</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </nav>
    );
}

export default NavComp;