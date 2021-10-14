import { Weather } from "../../types/weather"
import { toTime } from "../../utils/date-utils";
import "./WeatherDetails.css"

interface WeatherDetailsProps {
    details?: Weather;
    shouldShow?: boolean
}

export const WeatherDetails = ({ details, shouldShow=true }: WeatherDetailsProps) => {
    const show = details !== undefined && shouldShow;
    return (
        <>
            {show &&
                <div className="weather-details">
                    <h2>{details?.name}</h2>
                    <div className="main weather-details__grid">
                        <p>Temperature: {details?.main.temp}</p>
                        <p>Feels like: {details?.main.feelsLike}</p>
                        <p>Humidity: {details?.main.humidity}</p>
                        <p>Pressure: {details?.main.pressure}</p>
                        <p>Sunrise: {toTime(details?.sys.sunrise || 1)}</p>
                        <p>Sunset: {toTime(details?.sys.sunset || 1)}</p>
                    </div>
                </div>
            }
        </>
    )
}