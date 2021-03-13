import axios from 'axios'

//https://api.hgbrasil.com/weather?key=aec2ddf8&lat=-23.682&lon=-46.875

export const key = 'aec2ddf8'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api