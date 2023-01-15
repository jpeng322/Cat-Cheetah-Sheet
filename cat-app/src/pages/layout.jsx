import { NavLink, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/layout.css"
import ImageContextProvider from "../context/imageContext";

const Layout = () => {
    return (
        <>
            <ImageContextProvider>
                <Container className="home-container" fluid >
                    <nav>
                        <NavLink className="home-link" to="/breeds">Home</NavLink>
                        <NavLink to="/search">Search</NavLink>
                    </nav>
                    <Outlet />
                </Container>
            </ImageContextProvider>
        </>
    );
}

export default Layout;