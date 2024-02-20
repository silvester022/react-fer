export const getImagen = async () => {

    try {
        const apiKey = ''
        const resp = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`)
        const { data } = await resp.json()

        const { url } = data.images.original

        return url

    } catch (error) {
        // manejo del error
        // console.error(error)

        return 'No se encontro la imagen'
    }
}

getImagen();



