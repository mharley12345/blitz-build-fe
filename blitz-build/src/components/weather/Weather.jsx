/*
The weather API is Dark Sky API - https://darksky.net/dev/docs
We follow Darksky API Wrapper Instruction to deploy to Heroku. - https://github.com/satansdeer/weather-api
If you want to change the API key, you need to go to darksky.net to get your own key. After that, go to heroku blitz-bulid/blitzbuild-weather/settings/config Vars to change the DARKSKY_API_KEY.
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
  //local state
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
<<<<<<< HEAD
      // if props.usage equals to "dashboard", get position data from navigator.geolocation
    } else if (props.usage === "dashboard") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
=======
    } else if (props.usage === "dashboard") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position);
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
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
<<<<<<< HEAD
    if (
      weatherPosition.latitude == 0 ||
      weatherPosition.latitude == undefined
    ) {
      console.log("no weather position");
    }
    // If latitude and longitude are not 0 or undefined, call weather endpoint and get weather data.
    else {
=======
    if (weatherPosition.latitude !== 0) {
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
      axios
        .get(
          ` https://blitzbuild-weather.herokuapp.com/forecast/${weatherPosition.latitude},${weatherPosition.longitude}`
        )
        .then(res => {
          setWeatherData(res.data);
<<<<<<< HEAD
          //console.log("get weather data", res.data);
=======
          console.log("get weather data", res.data);
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
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

<<<<<<< HEAD
  // convert weather info to weather icon
=======
  // convert weather info to weather icon - not finish!
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
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
