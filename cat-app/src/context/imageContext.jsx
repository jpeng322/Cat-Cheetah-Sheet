import { createContext, useState, useEffect} from "react";
import { useRouteLoaderData } from "react-router-dom";
import axios from "axios";

export const ImageContext = createContext()

const ImageContextProvider = (props) => {

    const [imageData, setImageData] = useState()
const [catDetail, setCatDetail]  = useState(useRouteLoaderData("breeds"))
    // function getCatDetails() {
    //     const catDetail = useRouteLoaderData("breeds")
    //     console.log(catDetail)
    // }

    // getCatDetails()
    console.log(catDetail)
    useEffect(() => {
        // const catDetail = useRouteLoaderData("breeds")
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
        <ImageContext.Provider value={{ imageData }}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider