import axios from "axios";

export const weatherInstance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    timeout: 3000,
    headers: {}
})