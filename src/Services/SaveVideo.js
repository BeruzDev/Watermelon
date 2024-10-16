import axios from 'axios'
export const apiUrl = process.env.REACT_APP_API_URL;

const saveVideo = async (videoData, onVideoSubmit) => {
    try {
        const response = await axios.post(`${apiUrl}/api/videoRoutes/`, videoData)
        onVideoSubmit(response.data)
        console.log('Video guardado con éxito: ', response.data)
    } catch (error) {
        console.error('Error al guardar el video: ', error)
    }
}

export default saveVideo
