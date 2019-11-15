import React from "react";
import styled from "styled-components";

import Task2 from "./Task2";

function TaskCard2() {
  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <p>View All</p>
      </Section>
      <Task2 />
      <Task2 />
      <Task2 />
    </Container>
  );
}

export default TaskCard2;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 19px;
    color: #8a827d;
    font-weight: 500;
  }
`;

const Container = styled.div`
  margin-bottom: 48px;
`;
