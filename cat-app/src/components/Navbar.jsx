import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../css/navbar.css"

const NavComp = () => {
    return (

        <Navbar sm={3} md={6} fluid expand="lg">
            {/* <Container> */}
            <Navbar.Brand href="#home">
                <h3>Breed </h3>
                <h3>Cheetah-</h3>
                <h3>Sheet</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/breeds">Breeds</Nav.Link>
                </Nav>
                {/* <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/breeds">Breeds</Nav.Link>
                    </Nav> */}
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
}

export default NavComp;