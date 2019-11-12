// CODE IS MESSY, PLEASE READ AT YOUR OWN RISK

import React from "react";
import styled from "styled-components";

import Global from './Global'
import ActivityCard from './ActivityCard'
import TasksCard from './TasksCard'
import Weather from '../weather/Weather'
import Tracker from './Tracker'

function Dashboard() {
  return (
    <Container>
      <Global />
      <Greeting>
        <Title>Good morning Jameson,</Title>
        <Subheading>Let's get building.</Subheading>
      </Greeting>
      <Columns>
        <Column1>
          <ActivityCard />
          <TasksCard />
        </Column1>
        <Column2>
            <Tracker percentage={"95"} />
            <Weather usage="dashboard"  uid={'iTSHTnTwLvPXtPlVdMo87AR1KXZ2'} />
        </Column2>
      </Columns>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 56px;
  line-height: 92px;
  font-family: "Oswald";
  color: #282828;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0px; /* Remove when CSS reset */
`;

const Subheading = styled.h2`
  font-size: 24px;
  line-height: 36px;
  font-family: "Oswald";
  color: #282828;
  font-weight: 400;
  padding-left: 3px;
  margin: 0px; /* Remove when CSS reset */
`;

const Greeting = styled.div`
  margin: 36px 0px 68px 37px;
`;

const Columns = styled.div`
  display: flex;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Column2 = styled.div`
  width: 100%;
`;
