import { useEffect, useState } from "react";
import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import "../css/catDetails.css"

const CatDetails = () => {

    const [imageData, setImageData] = useState()
    const [imageNumber, setImageNumber] = useState(0)
    const catDetail = useLoaderData()


    useEffect(() => {
        const api_key = import.meta.env.VITE_API_KEY
        const getImages = async () => {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catDetail.id}&api_key=${api_key}`)

            const imageData = response.data
            // console.log(imageData)
            setImageData(imageData)
            return imageData
        }
        getImages()
    }
        , [])
    console.log(imageData)
    return (
        <div>
            <Container fluid className="detail-container p-5 d-flex flex-column gap-5">
                <NavLink to="/breeds">Home</NavLink>
                <Row className="detail-row top">
                    <Col>
                        <div><Button variant="outline-secondary" className="detail-button" onClick={() => {
                            console.log(imageNumber)
                            if (imageNumber === 0) {
                                setImageNumber(imageData.length - 1)
                            } else {
                                setImageNumber(imageNumber - 1)
                            }
                        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg></Button>
                        </div>
                    </Col>
                    <Col>
                        <div> {imageData && <Image className="detail-image" src={imageData[imageNumber].url} />}</div>
                    </Col>
                    {/* <Image  src={imageData[0].url} alt="" /> */}
                    <Col>
                        <div><Button variant="outline-secondary" className="detail-button" onClick={() => {
                            console.log(imageNumber)
                            if (imageNumber === imageData.length - 1) {
                                setImageNumber(0)
                            } else {
                                setImageNumber(imageNumber + 1)
                            }
                        }}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></Button>
                        </div>
                    </Col>
                </Row>


                <div>
                    <Row className="detail-row  d-flex justify-content-center">
                        <Col className="col"> <h1>{catDetail.name}</h1></Col>
                    </Row>
                    <Row className="detail-row">
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Lifespan: {catDetail.life_span} years</div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Weight: {catDetail.weight.imperial} lbs</div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Hypoallergenic: {catDetail.hypoallergenic === 0 ? "No" : "Yes"}</div>
                        </Col>
                    </Row>
                    <Row className=" detail-row d-flex">
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Affection Level: {catDetail.affection_level}</div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Adaptability: {catDetail.adaptability} </div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Child Friendly: {catDetail.child_friendly}</div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Intelligence: {catDetail.intelligence}</div>
                        </Col>
                    </Row>
                    <Row className=" detail-row d-flex">
                        <div>More information: <a href={catDetail.cfa_url} target="_blank">{catDetail.cfa_url} </a> </div>
                    </Row>
                </div>
            </Container>
            {/* <Outlet /> */}
        </div>
    );
}

export default CatDetails;