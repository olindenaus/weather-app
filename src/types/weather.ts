interface WeatherMain {
    temp: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
    tempMax: number;
    tempMin: number;
}

interface WeatherSys {
    country: string;
    sunrise: number;
    sunset: number;
}

interface WeatherWind {
    deg: number;
    gust: number;
    speed: number;
}

export interface Weather {
    main: WeatherMain;
    sys: WeatherSys;
    wind: WeatherWind;
    timezone: number;
    visibility: number;
    name: string;
}