import React from "react";
import styled, { css } from "styled-components";
import MeatBallsDrop from "../tasks/MeatBallsDrop"

function Task({ item, children }) {
  const today = new window.Date().toISOString().slice(0, 10);
// This value is hardcoded now because the server don't send back a date
// It should be {item.due_date}
  const project_date = item.due_date

  function DateCalc(today, project_date) {
    if (today === project_date) {
      return "Pending";
    } else if (today > project_date) {
      return "Overdue";
    } else if (today < project_date) {
      return "Upcoming";
    }
  }

  const status = DateCalc(today, project_date);

  const todayDate = new window.Date(today);
  const projectDate = new window.Date(project_date);
  const oneDay = 24 * 60 * 60 * 1000;

  const diffDays = Math.round(Math.abs((todayDate - projectDate) / oneDay));

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
          <Text>{item.project_name}</Text>
        </Address>
        <DueDate>
          <Text>{item.street_address}</Text>
          <Date>{dueDateText}</Date>
        </DueDate>
      </Inner>
      <div>
        <Status status={status}>
          <p>{status}</p>
        </Status>
      </div>
        <MeatBallsDrop task={item}/>
    </Container>
  );
}

export default Task;

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
  width: 225px;

  p {
    font-size: 14px;
    line-height: 16px;
    font-family: "Roboto";
    color: #3f3a36;
  }
`;

const Text = styled.p`
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
`;
