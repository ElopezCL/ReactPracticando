export const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7koh4MJ0OftJAJDiZedhK6ArcS2TD1na&q="${categoria}"&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs
}   