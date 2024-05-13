import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (categoria) => {
    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
        setisLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
