import React from "react";
import styled from "styled-components";
import DashboardTasks from './DashboardTasks'
import Weather from "../weather/Weather.jsx";
import ActivityFeed from './ActivityFeed';
function Dashboard() {
  return (
    <Container> 
    <WeatherAndFeedContainer> 
      
      <ActivityFeed numberOfTasks = {3} />
      <Weather usage="dashboard" />
     
    </WeatherAndFeedContainer>
      <DashboardTasks numberOfTasks = {3} />
     
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`

`

const WeatherAndFeedContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: start;

`;
