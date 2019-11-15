import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// css of the weather container in the dashboard
const WeatherContainerD = styled.div`
  width: 444px;
  height: 292px;
 
  background: #fefefe;
  border: 0.5px solid #282828;
  box-sizing: border-box;
  border-radius: 1px;
`;

// css of the weather container in the project page
const WeatherContainerP = styled.div`
  position: absolute;
  width: 530px;
  height: 184px;
  left: 878px;
  top: 208px;
  background: #ffffff;
`;
const Weathertitle = styled.div`
  
  width: 530px;
  height: 40px;
  left: 878px;
  top: 168px;

  background: #3f3a36;

  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: #fbfaf9;
`;
const WeatherTitleText = styled.div`
  padding: 12px 16px 12px 16px;
  
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: #fbfaf9;
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

// for dashboard import <Weather usage="dashboard" uid={}/>
// for project page import <Weather usage="project" uid={} city={} latitude={} longitude={} />

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
},[])
  

  // get the weather data from backend.
  useEffect(() => {
    if (weatherPosition.latitude !== 0) {
      console.log(weatherPosition)
      axios
        .post(
          `https://api-blitz-build-dev.herokuapp.com/api/auth/${props.uid}/weather`,
          weatherPosition
          
        )
        .then(res => {
          setWeatherData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [weatherPosition]);

  console.log(weatherData);

  // get time
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

  // convert weather info to weather icon - not finish!
  function getWeatherIcon() {
    var weatherIcon = weatherData.currently.icon;
    //var weatherIcon = <IconImage src="weatherIcons/streamline-icon-weather-clouds@24x24.png" alt="cloudy"/>
    return weatherIcon;
  }

  return (
    <>
      {props.usage === "project" ? (
        // display in project page
        <WeatherContainerP>
          <Weathertitle>
            <WeatherTitleText>Weather</WeatherTitleText>
          </Weathertitle>
          <WeatherLocationInfo>
            <h5>{props.city}</h5>
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
        </WeatherContainerP>
      ) : (
        // display in dashboard

        <WeatherContainerD>
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
              <WeatherIcon>{getWeatherIcon()}</WeatherIcon>
            </WeatherInfo>
          ) : null}
        </WeatherContainerD>
      )}
    </>
  );
}

export default Weather;
