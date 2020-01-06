import React , { useEffect, useContext }from "react";
import styled from "styled-components";
import DashboardTasks from "./DashboardTasks";
import Weather from "../weather/Weather.jsx";
<<<<<<< HEAD
import ActivityFeed from "./ActivityFeed";
function Dashboard() {
  //returns the dashboard view by importing all the components needed
=======
import ActivityFeed from './ActivityFeed';
import PathnameContext from '../../contexts/PathnameContext'
function Dashboard() {
  const {pathname, setPathname } = useContext(PathnameContext)
  useEffect(() => {

    setPathname(window.location.pathname)

  }, []);
  
>>>>>>> 2938c251e78f2535b3ec6e2a65e58c2b102468f6
  return (
    <Container>
      <WeatherAndFeedContainer>
        <ActivityFeed numberOfTasks={3} />
        <Weather usage="dashboard" />
      </WeatherAndFeedContainer>
      <DashboardTasks numberOfTasks={3} />
    </Container>
  );
}

export default Dashboard;

const Container = styled.div``;

const WeatherAndFeedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
