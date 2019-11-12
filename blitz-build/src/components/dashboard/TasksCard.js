// CODE IS MESSY, PLEASE READ AT YOUR OWN RISK

import React from "react";
import styled from "styled-components";

import Task from "./Task";

function TasksCard() {
  return (
    <Container>
      <Labels>
        <Title>Tasks</Title>
        <Link>See All</Link>
      </Labels>
      <div>
        <Task
          title={"Install countertops"}
          desc={
            "Don’t forget to ask JP about the incorrect dimensions of island bar granite"
          }
          date={"Past due"}
        />
        <Task
          title={"Call plumbers"}
          desc={
            "There’s something wrong with the pipes in the downstairs bathroom"
          }
          date={"Due today"}
        />
        <Task
          title={"Email homeowner"}
          desc={"Confirm granite order for kitchen island"}
          date={"Due today"}
        />
        <Task
          title={"Give Sarah a raise"}
          desc={"Because she deserves it"}
          date={"Due tomorrow"}
        />
      </div>
    </Container>
  );
}

export default TasksCard;

const Container = styled.div`
  margin-left: 37px;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 560px;
`;

const Link = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: black;
  font-family: "Roboto Condensed";
  margin-bottom: 7px;
`;

const Title = styled.p`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 7px;
  font-family: "Roboto Condensed";
  font-weight: 600;
`;