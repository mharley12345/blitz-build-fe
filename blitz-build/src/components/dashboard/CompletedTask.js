import React, { useState, useEffect, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import MeatBallsDrop from "../tasks/MeatBallsDrop";
import projectContext from "../../contexts/projects/ProjectContext";

function CompletedTask({ item, children }) {
  //importing state of projects from context
  const { projects } = useContext(projectContext);

  const projectID = projects.map(project => {
    //returns project.id's that are associated with project id's of items that were completed
    if (project.id === item.project_id) {
      return project.id;
    }
  });
  //returns project name that are associated with project id's of tasks completed
  const TaskProjectName = projects.map(project => {
    if (project.id === item.project_id) {
      return project.project_name;
    }
  });

  //returns project address that are associated with the project id's of tasks completed
  const TaskAddress = projects.map(project => {
    if (project.id === item.project_id) {
      return project.street_address;
    }
  });

  //gets the current day
  const today = new window.Date().toISOString().slice(0, 10);
  // This value is hardcoded now because the server don't send back a date
  // It should be {item.due_date}
  const project_date = item.due_date;

  //this function returns the status of the project depending on the due date of the project
  function DateCalc(today, project_date) {
    if (today === project_date) {
      return "Pending";
    } else if (today > project_date) {
      return "Overdue";
    } else if (today < project_date) {
      return "Upcoming";
    }
  }

  //creating a variable where the different between two dates will be calculated
  const status = DateCalc(today, item);

  //creating varible that grabs current day's date
  const todayDate = new window.Date(today);
  //creating variable that gets the due date of an item
  const projectDate = new window.Date(item.due_date);
  //variable that is one day calculated
  const oneDay = 24 * 60 * 60 * 1000;

  const diffDays = Math.round(Math.abs((todayDate - item.due_date) / oneDay));

  //depending on the difference of the dates, different status's are returned for tasks.
  function DueDateLogic(diff, status) {
    if (status === "Pending") {
      return "Due today";
    } else if (status === "Overdue") {
      return `${diff} days past due`;
    } else if (status === "Upcoming") {
      return `Due in ${diff} days`;
    }
  }

  const dueDateText = DueDateLogic(diffDays, status);

  return (
    <Container>
      <Inner>
        <Address>
          <TitleText> Completed Task </TitleText>
          <NameText>{item.task_name} </NameText>

          <Spacer> / </Spacer>

          <AddressText> {TaskAddress} </AddressText>
          <ProjectName>{TaskProjectName} </ProjectName>
        </Address>
      </Inner>
    </Container>
  );
}

export default CompletedTask;

const NavLinkStyle = {
  textDecoration: "none",
  display: "flex",
  height: "100%",
  width: "100%"
};
const Spacer = styled.div`
  width: 2%;
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  padding: 16px 32px 32px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  :nth-child(odd) {
    background: #fbfaf9;
  }
`;

const Address = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    font-family: "Roboto";
    color: #3f3a36;
  }
`;

const TitleText = styled.p`
  width: 20%;
  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto";
  color: #3f3a36;
  margin-bottom: 8px;
`;

const NameText = styled.p`
  width: 40%;
  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto";
  color: #3f3a36;
  margin-bottom: 8px;
`;
const AddressText = styled.p`
  width: 40%;
  margin-left: 10%;
  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto";
  color: #3f3a36;
  margin-bottom: 8px;
`;
const ProjectName = styled.p`
  width: 5%;
  display: flex;
  justify-content: end;
  margin-left: 50px;
  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto";
  color: #3f3a36;
  margin-bottom: 8px;
`;

const DueDate = styled.div``;

const Date = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #3f3a36;
  font-family: "Roboto";
  font-weight: 500;
`;

const Status = styled.div`
  padding: 5px 16px 3px;
  background-color: grey;
  color: black;
  border-radius: 30px;

  p {
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }

  ${props =>
    props.status === "Overdue" &&
    css`
      background-color: #ffbfbf;
      color: #9c0e0e;
    `};

  ${props =>
    props.status === "Pending" &&
    css`
      background-color: #fff3b3;
      color: #8b4708;
    `};

  ${props =>
    props.status === "Upcoming" &&
    css`
      background-color: #d2fac4;
      color: #326021;
    `};
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
`;
