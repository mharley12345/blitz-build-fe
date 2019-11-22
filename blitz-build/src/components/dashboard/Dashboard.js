import React from "react";
import styled from "styled-components";

import TaskCard from "./TaskCard";
import Weather from "../weather/Weather.jsx";

function Dashboard() {
  return (
    <Container>
      <Weather usage="dashboard" />
      <TaskCard />
    </Container>
  );
}

export default Dashboard;

const Container = styled.div``;
