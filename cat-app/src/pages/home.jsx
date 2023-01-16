import "../css/layout.css"
// import ImageContextProvider from "../context/imageContext";
import NavComp from "../components/Navbar";
import BlackCat from "../../images/black-cat.png"
// import ColorCat from "../../images/color-cat.png"
import ColorCat from "../../images/color-cat.png"
import { Image, Row, Container, Col } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="home-main" fluid>
            {/* <main> */}
            {/* <Row> */}
            {/* <Container> */}
            <Row>
                <Col>
                    {/* <div className="cat-image-container"> */}
                    <Image className="black-cat" src={BlackCat}></Image>
                    <div className="flaticon">Flaticon by: rungreangfangsai</div>
                    {/* </div> */}
                </Col>
                {/* <img className="black-cat" src={BlackCat} alt="" /> */}
                <Col>
                    <h1> Welcome to my page!</h1>
                </Col>
                {/* <img className="color-cat" src={ColorCat} alt="" /> */}
                {/* <div className="cat-image-container"> */}
                <Col>
                    <Image className="color-cat" src={ColorCat}></Image>
                    <div className="flaticon color">Flaticon by: Freepik</div>
                </Col>
                {/* </div> */}
            </Row>
            {/* Ima */}
            {/* </Row> */}
            {/* </Container> */}
            {/* </main> */}
        </Container>

    );
}

export default Home;