import React, { useState, useEffect } from "react";

//axios, moment
import axios from "axios";
import moment from "moment";

//components
import ProjectWeather from "./ProjectWeather";
import DashboardWeather from "./DashboardWeather";
import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiSnow,
  WiSleet,
  WiStrongWind,
  WiFog,
  WiCloudy,
  WiDayCloudy,
  WiNightAltCloudy,
  WiHail,
  WiNightThunderstorm,
  WiTornado
} from "weather-icons-react";

// for dashboard import <Weather usage="dashboard"/>
// for project page import <Weather usage="project" city={} latitude={} longitude={} />

function Weather(props) {
  const [weatherData, setWeatherData] = useState();
  const [weatherPosition, setWeatherPosition] = useState({
    latitude: 0,
    longitude: 0
  });
  useEffect(() => {
    // get the latitude and longitude from the project page or navigator.geolocation.
    if (props.usage === "project") {
      setWeatherPosition({
        latitude: props.latitude,
        longitude: props.longitude
      });
    } else if (props.usage === "dashboard") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position);
          setWeatherPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        });
      } else {
        console.log("geolocation is not supported");
      }
    }
  }, [props]);

  // get the weather data from backend.
  useEffect(() => {
    if (weatherPosition.latitude !== 0) {
      axios
        .get(
          ` https://blitzbuild-weather.herokuapp.com/forecast/${weatherPosition.latitude},${weatherPosition.longitude}`
        )
        .then(res => {
          setWeatherData(res.data);
          console.log("get weather data", res.data);
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [weatherPosition]);

  // get time
  function getTime() {
    return `${moment().format("dddd")}, ${moment().format("LT")}`;
  }

  // convert weather info to weather icon - not finish!
  function getWeatherIcon() {
    var weatherIcon = null;

    if (weatherData.currently.icon === "clear-night") {
      weatherIcon = <WiNightClear size={110} color="#000" />;
    } else if (weatherData.currently.icon === "clear-day") {
      weatherIcon = <WiDaySunny size={110} color="#000" />;
    } else if (weatherData.currently.icon === "rain") {
      weatherIcon = <WiRain size={110} color="#000" />;
    } else if (weatherData.currently.icon === "snow") {
      weatherIcon = <WiSnow size={110} color="#000" />;
    } else if (weatherData.currently.icon === "sleet") {
      weatherIcon = <WiSleet size={110} color="#000" />;
    } else if (weatherData.currently.icon === "wind") {
      weatherIcon = <WiStrongWind size={110} color="#000" />;
    } else if (weatherData.currently.icon === "fog") {
      weatherIcon = <WiFog size={110} color="#000" />;
    } else if (weatherData.currently.icon === "cloudy") {
      weatherIcon = <WiCloudy size={110} color="#000" />;
    } else if (weatherData.currently.icon === "partly-cloudy-day") {
      weatherIcon = <WiDayCloudy size={110} color="#000" />;
    } else if (weatherData.currently.icon === "partly-cloudy-night") {
      weatherIcon = <WiNightAltCloudy size={110} color="#000" />;
    } else if (weatherData.currently.icon === "hail") {
      weatherIcon = <WiHail size={110} color="#000" />;
    } else if (weatherData.currently.icon === "thunderstorm") {
      weatherIcon = <WiNightThunderstorm size={110} color="#000" />;
    } else if (weatherData.currently.icon === "tornado") {
      weatherIcon = <WiTornado size={110} color="#000" />;
    }
    return weatherIcon;
  }
  return (
    <>
      {props.usage === "project" ? (
        // display in project page
        <>
          {weatherData ? (
            <ProjectWeather
              weatherData={weatherData}
              time={getTime()}
              icon={getWeatherIcon()}
              city={props.city}
            />
          ) : (
            <p>Weather Loading....</p>
          )}
        </>
      ) : (
        // display in dashboard
        <>
          {weatherData ? (
            <DashboardWeather
              weatherData={weatherData}
              time={getTime()}
              icon={getWeatherIcon()}
              weatherPosition={weatherPosition}
            />
          ) : (
            <p>Weather Loading...</p>
          )}
        </>
      )}
    </>
  );
}

export default Weather;
