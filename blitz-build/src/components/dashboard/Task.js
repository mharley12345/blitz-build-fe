import React from "react";
import moment from "moment";

//components
import MeatBallsDrop from "../tasks/MeatBallsDrop";

//styles

import styled, { css } from "styled-components";
import {
  useStyles,
  StyledTableCell,
  StyledTableRow
} from "../../styles/Table/TableStyles";

function Task({ item, children, projectTask }) {
  const classes = useStyles();

  //variable that gets the current day
  const today = new window.Date().toISOString().slice(0, 10);
  const project_date = item.due_date;

  //depending on the difference of the dates, different status's are returned for tasks.
  function DateCalc(today, project_date) {
    if (today === project_date) {
      return "Pending";
    } else if (!project_date) {
      return "Unavailable";
    } else if (today > project_date) {
      return "Overdue";
    } else if (today < project_date) {
      return "Upcoming";
    }
  }

  //this function returns the status of the project depending on the due date of the project
  const status = DateCalc(today, item.due_date);

  //creating varible that grabs current day's date
  const todayDate = new window.Date(today);

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

  const checkIfComplete = () => {
    if(item.isComplete === true) {
      return <p>Completed</p>
    }
    else {
      return <p>{status}</p>
    }
  }
  
  return (
    <>
      <StyledTableRow>
        {!projectTask && (
          <StyledTableCell>
            <Text>{item.project_name}</Text>
          </StyledTableCell>
        )}
        <StyledTableCell>
          <Text>{item.task_name}</Text>
        </StyledTableCell>

        <StyledTableCell style={{ maxWidth: 200 }}>
          <Text>{item.task_description}</Text>
        </StyledTableCell>
        <StyledTableCell>
          <Date>
            {!item.due_date ? "" : moment(item.due_date).format("MM-DD-YYYY")}
          </Date>
        </StyledTableCell>
        <StyledTableCell>
          <Inner>
            <Status status={status}>
             {checkIfComplete()}
            </Status>
            <MeatBallsDrop task={item} />
          </Inner>
        </StyledTableCell>
      </StyledTableRow>
    </>
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

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 20px;
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
  padding: 3px 8px 3px;
  height: 26px;
  width: 79px;
  background-color: grey;
  color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
    text-align: center;
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
  align-items: center;
`;
