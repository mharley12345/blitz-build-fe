import React from "react";
import styled from "styled-components";
import reverseGeocode from "reverse-geocode";

// for dashboard import <Weather usage="dashboard"/>

function DashboardWeather({ weatherData, time, icon, weatherPosition }) {
  //variable that grabs the latitude and longitude of the user if they give permission
  const cityInfo = reverseGeocode.lookup(
    weatherPosition.latitude,
    weatherPosition.longitude,
    "us"
  );
  return (
    // display in dashboard
    <div>
      <Title>Weather</Title>
      <WeatherContainerD>
        <WeatherLocationInfo>
          <h2>
            {cityInfo.city}, {cityInfo.state}
          </h2>
          <span>{time}</span>
        </WeatherLocationInfo>

        <WeatherInfo>
          <WeatherData>
            <WeatherTem>
              {((weatherData.currently.temperature * 9) / 5 + 32).toFixed(0)}
              <span>&#176;</span>
            </WeatherTem>
            <span>{weatherData.currently.summary}</span>
          </WeatherData>
          <WeatherIcon>{icon}</WeatherIcon>
        </WeatherInfo>
      </WeatherContainerD>
    </div>
  );
}

export default DashboardWeather;
const WeatherContainerD = styled.div`
  width: 524pxpx;
  height: 384px;
  margin-top: 8px;
  /* 000 White */

  background: #ffffff;
  /* 250 - Borders */

  border: 1px solid #dcd9d5;
  box-sizing: border-box;
  border-radius: 3px;
`;

const WeatherLocationInfo = styled.div`
  height: 142px;
  width: 428px;
  margin-top: 32px;
  margin-left: 48px;
  margin-right: 48px;
  border-bottom: 1px solid lightgrey;
  h2 {
    height: 38px;
    font-size: 32px;
    font-weight: bold;
  }
  p {
    margin-top: 8px;
    margin-bottom: 0;
    height: 24px;
    font-size: 24px;
  }
`;
const WeatherInfo = styled.div`
  margin-top: 32px;
  margin-left: 48px;
  display: flex;
`;
const WeatherData = styled.div`
  display: flex;
  width: 214px;
  flex-direction: column;
  p {
    margin-top: 32px;
    margin-bottom: 0;
    font-size: 16px;
    /*500 Gray */

    color: #3b3b3b;
  }
`;
const WeatherTem = styled.div`
  font-weight: bold;
  font-size: 60px;
`;
const WeatherIcon = styled.div`
  width: 50%;
`;
const Title = styled.div`
  font-size: 16px;

  color: #8a827d;
`;
