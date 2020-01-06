import React from "react";
import styled from "styled-components";

// for project page import <Weather usage="project" city={} latitude={} longitude={} />

function ProjectWeather({ weatherData, time, icon, city }) {
  //returns the weather of where the project is based on the zip code that they provide.
  return (
    <>
      <WeatherContainerP id="$break-laptop">
        <CityInfo>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 500,
              marginTop: "59px",
              marginLeft: "32px",
              marginBottom: 0,
              color: "#3B3B3B",
              lineHeiht: "28px"
            }}
          >
            {city}
          </p>
          <p
            style={{
              fontSize: "16px",
              marginTop: "2px",
              marginLeft: "32px",
              marginBottom: 0,
              color: "#3B3B3B",
              lineHeiht: "24px"
            }}
          >
            {time}
          </p>
        </CityInfo>

        <WeatherInfo>
          <WeatherData>
            <p
              style={{
                fontSize: "24px",
                fontWeight: 500,
                marginBottom: 0,
                marginLeft: "32px",
                color: "#3B3B3B",
                lineHeiht: "28px"
              }}
            >
              {((weatherData.currently.temperature * 9) / 5 + 32).toFixed(0)}
              <span>&#176;</span>
            </p>
            <p
              style={{
                fontSize: "16px",
                marginTop: "2px",
                marginLeft: "32px",
                marginBottom: 0,
                color: "#817974",
                lineHeiht: "24px"
              }}
            >
              {weatherData.currently.summary}
            </p>
          </WeatherData>
          <WeatherIcon>{icon}</WeatherIcon>
        </WeatherInfo>
      </WeatherContainerP>
    </>
  );
}

export default ProjectWeather;

// css of the weather container in the project page
const WeatherContainerP = styled.div`
  min-width: 530px;
  height: 172px;
  display: flex;
`;
const CityInfo = styled.div`
  width: 45%;
  height: 172px;
`;
const WeatherInfo = styled.div`
  width: 50%;
  height: 172px;
  display: flex;
  align-items: center;
`;
const WeatherData = styled.div`
  text-align: center;
`;

const WeatherIcon = styled.div`
  text-align: center;
  margin-left: 10px;
`;
