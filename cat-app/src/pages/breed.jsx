import { useLoaderData, Link } from "react-router-dom";
import noImage from '../../images/error-image.png'
import { useState } from "react";
import { Form, Row, Col, Image, Container } from "react-bootstrap"
import PaginationBasic from "../components/PaginationBasic";
import "../css/navbar.css"


const BreedsPage = () => {
    const breedData = useLoaderData()

    const [selectedCat, setSelectedCat] = useState()

    const length = selectedCat && selectedCat.length
    const filteredCats = breedData.filter(cat => cat.name.toLowerCase().substring(0, length) === selectedCat)


    // const breeds = useRouteLoaderData("breeds");
    const numberOfImages = 18
    const numberOfPages = (Math.ceil(breedData.length / numberOfImages))

    const [pageNumber, setPageNumber] = useState(1)
    const currentImages = pageNumber === 1 ? breedData.slice(0, pageNumber * numberOfImages) : breedData.slice((pageNumber - 1) * numberOfImages, pageNumber * numberOfImages)


    const mapData = selectedCat ? filteredCats : currentImages
    return (
        <div>
            {/* <nav>
                <NavComp />
            </nav> */}
            <Container className="breed-container" fluid>
                {/* <Row>
                <input className="breed-filter" type="text" onChange={(e) => setSelectedCat(e.target.value)} placeholder="Filter by Cat Name" />
            </Row> */}
                {/* <Row>
                    <PaginationBasic pageNumber={pageNumber} numberOfPages={numberOfPages} setPageNumber={setPageNumber} />
                </Row> */}
                <Row className="filter-row">
                    <Col>
                        <div className="breed-filter-container input-group mb-3 ">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg></span>
                            <input type="text" className="form-control breed-filter" placeholder="Filter by Cat Name" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setSelectedCat(e.target.value)} />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <PaginationBasic pageNumber={pageNumber} numberOfPages={numberOfPages} setPageNumber={setPageNumber} />
                        </div>
                    </Col>
                </Row>
                <Row className="breed-row">
                    {mapData.length === 0 ? <div className="no-cat-text">No cat found </div> : mapData.map(cat => {
                        // console.log(src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`})
                        return <Col key={cat.id} className="breed-column" xs={8} md={5} xxl={3} >
                            <div>
                                <Link to={cat.id}> {<Image className="breed-img" src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} loading="lazy" alt={cat.name} fluid thumbnail />} </Link>
                                <h3> {cat.name} </h3>
                                {/* <Link to={cat.id}> {<Image className="breed-img" src={cat.reference_image_id ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg` : waitForImage(cat.id)} alt={cat.name} fluid thumbnail />} </Link>
                            <h3> {cat.name} </h3> */}
                            </div>
                        </Col>
                    }
                    )}
                </Row>
            </Container>
        </div>
    );
}



export default BreedsPage;