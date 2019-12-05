import React from "react";
import styled from "styled-components";

import TaskCard from "./TaskCard";
import Weather from "../weather/Weather.jsx";
import ActivityFeed from './ActivityFeed';
function Dashboard() {
  return (
    <Container> 
    <WeatherAndFeedContainer> 
      
      <ActivityFeed numberOfTasks = {5} />
      <Weather usage="dashboard" />
     
    </WeatherAndFeedContainer>
      <TaskCard numberOfTasks={3} />
     
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
`

const WeatherAndFeedContainer = styled.div`

display: flex;
justify-content: space-between;



`;
