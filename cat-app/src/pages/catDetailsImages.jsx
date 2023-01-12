import { useLoaderData } from "react-router-dom";


const CatDetailsImages = () => {

    const imageData = useLoaderData()
    console.log(imageData)
    return (
        <div>hahaha</div>
    );
}

export default CatDetailsImages;