import { weatherInstance } from "../axios";
const UNITS = 'metric';

export const fetchWeatherForCity = (city: string) => {
    return weatherInstance.get("/weather", {
        params: {
            q: city,
            appid: process.env.REACT_APP_WEATHER_API_KEY,
            units: UNITS
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            alert(`Failed to fetch weather details for '${city}'`)
        }
    })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.error(err);
        })
}

export const fetchWeatherForCoords = (lat: number, lon: number) => {
    return weatherInstance.get("/weather", {
        params: {
            lat: lat,
            lon: lon,
            appid: process.env.REACT_APP_WEATHER_API_KEY,
            units: UNITS
        }
    }).then(response => {
        console.log(response)
        if (response.status === 200)
            return response.data;
        else
            alert('Failed to fetch weather details for your current location.')
    })
}