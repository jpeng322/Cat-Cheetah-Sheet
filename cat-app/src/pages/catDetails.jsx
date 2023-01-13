import { useEffect, useState } from "react";
import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import "../css/catDetails.css"
import { startSession } from "mongoose";

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

    const createStars = (rating) => {
        let stars = ""
        for (let i = 0; i < rating; i++) {
            stars += '<svg class="filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg> '
        }

        for (let i = 0; i < 5 - rating; i++) {
            stars += '<svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg> '
        }
        return stars
    }

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
                    <Col xs={12} md={10} xxl={6}>
                        <div> {imageData && <Image fluid thumbnail className="detail-image" src={imageData[imageNumber].url} />}</div>
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
                    {/* <Row className="detail-row  d-flex justify-content-center">
                        <Col className="col"> <h3>{catDetail.temperament.replaceAll(",", " 🐾 ")}</h3></Col>
                    </Row> */}
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
                            <div>Affection Level: </div>
                            <div dangerouslySetInnerHTML={{ __html: createStars(catDetail.affection_level) }}></div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Adaptability: </div>
                            <div dangerouslySetInnerHTML={{ __html: createStars(catDetail.adaptability) }}></div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Child Friendly:</div>
                            <div dangerouslySetInnerHTML={{ __html: createStars(catDetail.child_friendly) }}></div>
                        </Col>
                        <Col className="col border border-primary d-flex justify-content-center">
                            <div>Intelligence:</div>
                            <div dangerouslySetInnerHTML={{ __html: createStars(catDetail.intelligence) }}></div>
                        </Col>
                    </Row>
                    <Row className=" detail-row d-flex">
                        {catDetail.cfa_url ? <div>More information: <a href={catDetail.cfa_url} target="_blank">{catDetail.cfa_url} </a> </div> : "" }
                    </Row>
                </div>
            </Container>
            {/* <Outlet /> */}
        </div>
    );
}

export default CatDetails;