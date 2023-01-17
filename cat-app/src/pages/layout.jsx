import { Outlet } from "react-router-dom";
import "../css/layout.css"
// import ImageContextProvider from "../context/imageContext";

import BlackCat from "../../images/black-cat.png"
// import ColorCat from "../../images/color-cat.png"
import ColorCat from "../../images/color-cat.png"
import { Image, Row, Container, Col } from "react-bootstrap";
import Home from "./home";

//componenets
import NavComp from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <>
            {/* <ImageContextProvider> */}
            <div className="home-container">
                {/* <Container className="home-container" > */}
                <div className="home-div">
                    <NavComp />
                    {/* <nav>
                        <NavLink className="home-link" to="/">Home</NavLink>
                        <NavLink to="/search">Search</NavLink>
                    </nav> */}
                    {/* <Home /> */}
                    <Outlet />
                    {/* </Container> */}
                    <Footer />
                </div>

            </div>
            {/* </ImageContextProvider> */}
        </>
    );
}

export default Layout;