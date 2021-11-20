import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://projectemotions-backend.herokuapp.com/',
})

export default api;