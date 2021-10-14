import React from 'react';
import './App.css';
import { CityInput } from './components//CityInput/CityInput';
import { WeatherDetails } from './components/WeatherDisplay/WeatherDetails';
import { Weather } from './types/weather';
import { mapToWeather } from "./utils/mapper";
import { fetchWeatherForCity, fetchWeatherForCoords } from './utils/axios';
import { Spinner } from './components/Spinner/Spinner';
import { FindMe } from './components/FindMe/FindMe';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const timeout = 300;

function App() {
  const [weather, setWeather] = React.useState<Weather>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");

  const fetchWeather = (city: string) => {
    setIsLoading(true);
    fetchWeatherForCity(city).then(data => {
      setWeather(mapToWeather(data));
    }).catch(err => {
      console.error(err);
      alert(`Failed to fetch weather details for '${city}'`)
    }).finally(() => {
      setTimeout(() => setIsLoading(false), timeout);
    });
  }

  const onCityInputChanged = (value: string) => {
    if (value.length > 0)
      fetchWeather(value);
  }

  const findMe = () => {
    setIsLoading(true);
    setMessage("");
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherForCoords(position.coords.latitude, position.coords.longitude).then(data => {
        setWeather(mapToWeather(data));
      }).catch(err => {
        console.error(err);
        alert("Failed to fetch weather for your current location.")
      }).finally(() => {
        setTimeout(() => setIsLoading(false), timeout);
      })
    });
  }

  const state = isLoading;

  return (
    <div className="App">
      <div className="weather-container">
        <div className="weather__inputs">
          <CityInput onInputChange={onCityInputChanged} />
          <FindMe onClick={findMe} />
        </div>
        {message.length === 0 ? null : <p>{message}</p>}
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={state ? "loading" : "weather"}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade'
            timeout={timeout}
          >
            {state ? <Spinner /> : <WeatherDetails details={weather} />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default App;
