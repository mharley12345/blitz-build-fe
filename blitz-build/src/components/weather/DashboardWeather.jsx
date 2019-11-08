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
function DashboardWeather() {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const api_key = "425ccdff13ee9871b8d3b2ad4fb9632f";
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${api_key}/37.8267,-122.4233`
      )
      .then(res => {
        setWeatherData(res.data);
      });
  }, []);
  console.log(weatherData);

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
  return (
    <WeatherContainer>
      <WeatherLocationInfo>
        <h2>Location</h2>
        <p>{day}, {hour}:{minute} {ampm}</p>
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
          <WeatherIcon>{weatherData.currently.icon}</WeatherIcon>{" "}
        </WeatherInfo>
      ) : null}
    </WeatherContainer>
  );
}

export default DashboardWeather;
