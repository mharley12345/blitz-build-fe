import React, { useState, useEffect, useRef } from "react";
import MeatBallsDrop from "../tasks/MeatBallsDrop";

//styles
import styled, { css } from "styled-components";
//mui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function Task({ item, children }) {
  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(even)": {
        background: "#F5F5F5"
      },
      marginBottom: "32px"
    }
  }))(TableRow);

  const StyledTableCell = withStyles(theme => ({
    head: {

      padding: "8px 32px",
      height: 35,
      backgroundColor: "#E9E9E9",
      color: theme.palette.common.black
    },
    body: {
      padding: "8px 32px",
      fontSize: 16,
      height: 104
    }
  }))(TableCell);

  const useStyles = makeStyles({
    root: {
      border: "1px solid #DCD9D5"
    },
    table: {
      minWidth: "1080px"
    },
    tableHover: {
      "&:hover": {
        border: "3px solid orange"
      }
    }
  });

  const classes = useStyles();

  const today = new window.Date().toISOString().slice(0, 10);
  // This value is hardcoded now because the server don't send back a date
  // It should be {item.due_date}
  const project_date = item.due_date;

  function DateCalc(today, project_date) {
    if (today === project_date) {
      return "Pending";
    } else if (today > project_date) {
      return "Overdue";
    } else if (today < project_date) {
      return "Upcoming";
    }
  }

  const status = DateCalc(today, item);

  const todayDate = new window.Date(today);
  const projectDate = new window.Date(item.due_date);
  const oneDay = 24 * 60 * 60 * 1000;

  const diffDays = Math.round(Math.abs((todayDate - item.due_date) / oneDay));

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
    <>
      <StyledTableRow >
        {!!item.project_name 
        &&
          <StyledTableCell>
            <Text>{item.project_name}</Text>
          </StyledTableCell>
        }
        <StyledTableCell>
          <Text>{item.task_name}</Text>
        </StyledTableCell>

        <StyledTableCell  style ={{maxWidth: 200}}>
          <Text>{item.task_description}</Text>
        </StyledTableCell>
        <StyledTableCell>
          <Date>{item.due_date}</Date>
        </StyledTableCell>
        <StyledTableCell>
          <Inner>
            <Status status={status}>
              <p>{status}</p>
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

const Text = styled.p`
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
  padding: 5px 16px 3px;
  background-color: grey;
  color: black;
  border-radius: 30px;
  display: flex;
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
`;
