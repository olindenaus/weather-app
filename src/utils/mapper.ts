import { Weather } from "../types/weather";

export const mapToWeather = (data: any): Weather => {
    return {
        main: {
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            pressure: data.main.pressure
        },
        sys: {
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        },
        timezone: data.timezone,
        visibility: data.visibility,
        wind: {
            deg: data.wind.deg,
            speed: data.wind.speed,
            gust: data.wind.gust
        },
        name: data.name
    }
}