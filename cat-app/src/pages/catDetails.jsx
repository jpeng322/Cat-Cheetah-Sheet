import { useEffect, useState } from "react";
import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { Image } from "react-bootstrap";

const CatDetails = () => {
   
    const [imageData, setImageData] = useState()
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

            <NavLink to="/breeds">Home</NavLink>
            {imageData && <Image src={imageData[0].url} fluid/>}
            {/* <Image  src={imageData[0].url} alt="" /> */}
            <div>
                <h1>{catDetail.name}</h1>
                <p>Lifespan: {catDetail.life_span} years</p>
                <p>Weight: {catDetail.weight.imperial} lbs</p>
                <p>Affection Level: {catDetail.affection_level}</p>
                <p>Adaptability: {catDetail.adaptability} </p>
                <p>Child Friendly: {catDetail.child_friendly}</p>
                <p>Intelligence: {catDetail.intelligence}</p>
                <p>More information: <a href={catDetail.cfa_url} target="_blank">{catDetail.cfa_url} </a> </p>
            </div>

            <Outlet />
        </div>
    );
}

export default CatDetails;