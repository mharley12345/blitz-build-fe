import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const WeatherContainer = styled.div`
  width: 380px;
  height: 239px;
  border: 1px solid grey;
`;
const WeatherLocationInfo = styled.div`
  margin: 15px 35px;
  border-bottom: 1px solid lightgrey;
`;
const WeatherInfo = styled.div`
  margin: 15px 35px;
  display: flex;
`;
const WeatherData = styled.div`
width:50%

`;
const WeatherTem = styled.div`
font-weight: bold;
font-size:60px;
`;
const WeatherIcon = styled.div`
  width: 50%;
`;

const IconImage = styled.img`
width:100px;
height:100px;

`
function DashboardWeather() {
  const [weatherData, setWeatherData] = useState();
  const [currentPosition, setCurrentPosition] = useState({latitude:0,longitude:0});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        setCurrentPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
       
      })
    } else {
      console.log("geolocation is not supported");
    }
  },[])


  useEffect(() => {
    const api_key = process.env.REACT_APP_DARKSKY_WEATHER_SECRET_KEY;
    if (currentPosition.latitude !== 0) {
     axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${api_key}/${currentPosition.latitude},${currentPosition.longitude}`
        )
        .then(res => {
          setWeatherData(res.data);
        }).catch(err => {
          console.log(err)
        })
  }
  }, [currentPosition]);

  console.log(weatherData);
  function setTime() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date();
  const day = days[d.getDay()];
  var hour = d.getHours();
  var ampm = 'am';
  
  if (hour > 12) {
    hour = hour - 12;
    ampm='pm'
  }

    const minute = d.getMinutes();
    return `${day}, ${hour}:${("0" +minute).slice(-2)} ${ampm}`
  }
  
  function getWeatherIcon() {
    var weatherIcon = <IconImage src="weatherIcons/streamline-icon-weather-clouds@24x24.png" alt="cloudy"/>
    return weatherIcon
  }


  return (
    <WeatherContainer>
      
      <WeatherLocationInfo>
        <h2>Current Location</h2>
        <p>{setTime()}</p>
      </WeatherLocationInfo>

      {weatherData ? (
        <WeatherInfo>
          <WeatherData>
            <WeatherTem>
              {weatherData.currently.apparentTemperature.toFixed(0)}
              <span>&#176;</span>
            </WeatherTem>
            <p>
              Humidity {weatherData.currently.humidity * 100}
              <span>&#37;</span>
            </p>
          </WeatherData>
          <WeatherIcon>
            {/* {weatherData.currently.icon} */}
            {getWeatherIcon()}
          </WeatherIcon>
        </WeatherInfo>
      ) : null}
    </WeatherContainer>
  );
}

export default DashboardWeather;
