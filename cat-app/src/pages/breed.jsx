import { useLoaderData, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
const BreedsPage = () => {
    const breedData = useLoaderData()
// console.log(breedData.map(cat => cat.reference_image_id))
// console.log(breedData)
    return (
        <Container fluid>
            <Row className="breed-row">

                {breedData.map(cat =>
                    <Col className="breed-column" xs={3} >
                        <div key={cat.id}>
                            <Link to={cat.id}> {<Image className="breed-img" src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.name} fluid thumbnail/>} </Link>
                            <h3> {cat.name} </h3>
                            {/* <img src={cat.reference_image_id
                    } alt="" /> */}
                            {/* <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt="" /> */}
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}



export default BreedsPage;