import { NavLink, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Layout = () => {
    return (
        <>
            <Container fluid>
                <NavLink to="/breeds">Home</NavLink>
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;