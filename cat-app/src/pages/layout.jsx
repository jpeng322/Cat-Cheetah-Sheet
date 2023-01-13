import { NavLink, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/layout.css"

const Layout = () => {
    return (
        <>
            <Container className="home-container" fluid >
                <NavLink className="home-link"to="/breeds">Home</NavLink>
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;