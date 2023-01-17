import axios from "axios";

const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = import.meta.env.VITE_API_KEY


export const getBreeds = async () => {
    try {
        // const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${api_key}`)

        const response = await axios.get("https://api.thecatapi.com/v1/breeds/")
        const data = response.data
        // console.log(data)
        return data
    }
    catch (e) {
        console.log(e)
    }
}

// export const getBreedInfo = async (catName) => {
//     const response = await axios.get("https://api.thecatapi.com/v1/breeds/")
//     const data = response.data
//     // console.log(data, catName)
//     const catData = data.find(cat => cat.id === catName)
//     // console.log(catData)
//     return catData
// }


export const getBreedInfo = async (catName) => {
    const dataObject = {}
    const detailsResponse = await axios.get("https://api.thecatapi.com/v1/breeds/")
    const data = detailsResponse.data
    // console.log(data, catName)
    const catData = data.find(cat => cat.id === catName)
    dataObject["catData"] = catData

    const imagesResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catName}&api_key=${api_key}`)
    const imagesData = imagesResponse.data
    // console.log(catData)
    dataObject["catImages"] = imagesData

    return dataObject
}

// export const getImages = async (catName) => {
//     const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catName}&api_key=${api_key}`)

//     const imageData = response.data
//     console.log(imageData)
//     return imageData
// }