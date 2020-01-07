import React, { useContext,useEffect } from "react";
import styled from "styled-components";
import Task from "../dashboard/Task";
//context
import taskContext from "../../contexts/tasks/TaskContext";
//mui
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {
  StyledTableCell,
  StyledTableHeadRow
} from "../../styles/Table/TableStyles";
//router
import { Link } from "react-router-dom";

//styles
import { ViewBtn } from "../../styles/ViewBtn";


function ProjectTaskCard({ projectID, numberOfTasks }) {
  //imports tasks from context
  const { tasks, getTasks } = useContext(taskContext);

  useEffect(() => {
    getTasks()
  }, [])

  //variable that filters through all the tasks and brings back the tasks associated with the specific project id
  const projectTasks = tasks.filter(item => {
    return `${item.project_id}` === projectID;
  });
  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <Link to={`/projects/${projectID}/tasks?filter=ACTIVE`}>
          <ViewBtn>View All</ViewBtn>
        </Link>
      </Section>
      <Paper>
        <Table>
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell>Task</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Due Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {projectTasks.slice(0, numberOfTasks).map(item => {
              if (JSON.stringify(item.project_id) === projectID) {
                return <Task item={item} key={item.id} projectTask={true} />;
              }
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
