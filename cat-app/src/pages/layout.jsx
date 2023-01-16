import { NavLink, Outlet } from "react-router-dom";
import "../css/layout.css"
// import ImageContextProvider from "../context/imageContext";
import NavComp from "../components/Navbar";
import BlackCat from "../../images/black-cat.png"
// import ColorCat from "../../images/color-cat.png"
import ColorCat from "../../images/color-cat.png"
import { Image, Row, Container, Col } from "react-bootstrap";
import Home from "./home";
const Layout = () => {
    return (
        <>
            {/* <ImageContextProvider> */}
            <div className="home-container">
                {/* <Container className="home-container" > */}
                <div className="home-div">
                    <nav className="home-nav">
                        <NavComp />
                    </nav>
                    {/* <nav>
                        <NavLink className="home-link" to="/">Home</NavLink>
                        <NavLink to="/search">Search</NavLink>
                    </nav> */}
                    {/* <Home /> */}
                    <Outlet />
                    {/* </Container> */}
                </div>
            </div>
            {/* </ImageContextProvider> */}
        </>
    );
}

export default Layout;