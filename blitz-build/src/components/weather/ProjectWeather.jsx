import React, { useState, useEffect } from "react";
import styled from "styled-components";


// css of the weather container in the project page
const WeatherContainerP = styled.div`
  width: 530px;
  height: 224px;

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

function ProjectWeather({ weatherData, time, icon,city }) {
  
    console.log(weatherData)
      console.log(time);


  return (
    <>
      <WeatherContainerP>
          <Weathertitle>
            <WeatherTitleText>Weather</WeatherTitleText>
          </Weathertitle>
          <WeatherLocationInfo>
                <h5>{city}</h5>
            <p>{time}</p>
          </WeatherLocationInfo>
            <WeatherInfo>
              <WeatherData>
                <WeatherTem>
                  {((weatherData.currently.temperature * 9) / 5 + 32).toFixed(
                    0
                  )}
                  <span>&#176;</span>
                </WeatherTem>
                <p>
                  Humidity {(weatherData.currently.humidity * 100).toFixed(2)}
                  <span>&#37;</span>
                </p>
              </WeatherData>
              <WeatherIcon>{icon}</WeatherIcon>
            </WeatherInfo>
        </WeatherContainerP>
      
    </>
  );
}

export default ProjectWeather;
