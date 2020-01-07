import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";
import searchTermContext from "../../contexts/searching/searchTerm";
//context
import taskContext from "../../contexts/tasks/TaskContext";

import { Link } from "react-router-dom";

//mui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

//styles
import { ViewBtn } from "../../styles/ViewBtn";
import {
  useStyles,
  StyledTableCell,
  StyledTableHeadRow
} from "../../styles/Table/TableStyles";

function DashboardTasks({ projectID, numberOfTasks }) {
  const { tasks } = useContext(taskContext);
  const { searchTerm } = useContext(searchTermContext);
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([]);

  //mui
  const classes = useStyles();

  useEffect(() => {
    const results = tasks.filter(task =>
      task.task_name.toLowerCase().includes(taskSearchInput)
    );
    console.log("RESULTS:", results);
    setTaskSearchResults(results);
  }, [taskSearchInput]);

  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <Link to="/tasks?filter=ACTIVE">
          <ViewBtn>View All</ViewBtn>
        </Link>
      </Section>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell>PROJECT</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>TASK</StyledTableCell>
              <StyledTableCell>DUE DATE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {tasks.slice(0, numberOfTasks).map(item => {
              return <Task item={item} key={item.id} />;
            })}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default DashboardTasks;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    line-height: 19px;
    color: #212529;
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 48px;
`;

const Card = styled.div`
  border: 1px solid #dcd9d5;
`;
