import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "../dashboard/Task";
import searchTermContext from "../../contexts/searching/searchTerm";
//context
import taskContext from "../../contexts/tasks/TaskContext";
//mui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

//router
import { Link } from 'react-router-dom'

//styles
import { ViewBtn } from "../../styles/ViewBtn";

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
function ProjectTaskCard({ projectID, numberOfTasks }) {
  const { projectTasks } = useContext(taskContext);
  const { searchTerm } = useContext(searchTermContext);
  console.log("projectID:", projectID);
  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <Link to= {`/projects/${projectID}/tasks`}>
          <ViewBtn>View All</ViewBtn>
        </Link>
      </Section>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Task</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Due Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectTasks.slice(0, numberOfTasks).map(item => {
              return <Task item={item} key={item.id} projectTask={true} />;
            })}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
export default ProjectTaskCard;
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
  margin-top: 20px;
  margin-bottom: 48px;
`;
const Card = styled.div`
  border: 1px solid #dcd9d5;
`;
