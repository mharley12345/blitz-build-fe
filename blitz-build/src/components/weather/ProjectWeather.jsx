import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const WeatherContainer = styled.div`
  position: absolute;
  width: 518px;
  height: 252px;
  left: 324px;
  top: 750px;
  border: 1px solid #d6d6d6;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
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
  width: 50%;
`;
const WeatherTem = styled.div`
  font-weight: bold;
  font-size: 60px;
`;
const WeatherIcon = styled.div`
  width: 50%;
`;

const IconImage = styled.img`
  width: 100px;
  height: 100px;
`;

function ProjectWeather(props) {
  const [weatherData, setWeatherData] = useState();
  const [projectPosition, setProjectPosition] = useState({latitude: props.latitude,longitude:props.longitude});


  useEffect(() => {
    
    axios
      .get(
        `http://api-blitz-build-dev.herokuapp.com/api/auth/${props.uid}/projects/${props.projectID}/weather`, projectPosition
      )
      .then(res => {
        console.log(res);
        setWeatherData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    
  }, []);

  console.log(weatherData);
  function setTime() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const d = new Date();
    const day = days[d.getDay()];
    var hour = d.getHours();
    var ampm = "am";

    if (hour > 12) {
      hour = hour - 12;
      ampm = "pm";
    }

    const minute = d.getMinutes();
    return `${day}, ${hour}:${("0" + minute).slice(-2)} ${ampm}`;
  }

  function getWeatherIcon() {
    var weatherIcon = weatherData.currently.icon;
    //var weatherIcon = <IconImage src="weatherIcons/streamline-icon-weather-clouds@24x24.png" alt="cloudy"/>
    return weatherIcon;
  }

  return (
    <WeatherContainer>
      <WeatherLocationInfo>
        <h2>{props.location}</h2>
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
          <WeatherIcon>{getWeatherIcon()}</WeatherIcon>
        </WeatherInfo>
      ) : null}
    </WeatherContainer>
  );
}

export default ProjectWeather;
