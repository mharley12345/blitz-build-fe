import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";
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

<<<<<<< HEAD
function TaskCard({ projectID, numberOfTasks }) {
  const [projectTasks, setProjectTasks] = useState([]);
  const { searchTerm } = useContext(searchTermContext);
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([]);

  useEffect(() => {

    axiosWithAuth()
    .get(`projects/tasks/byProject/${projectID}`)
    .then(res => {
      setProjectTasks(res.data)
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const results = projectTasks.filter(task =>
    task.task_name.toLowerCase().includes(taskSearchInput)
  );
=======
function TaskCard({ projectID, numberOfTasks, AddTask, results, taskSearchResults}) {
 
  const { projectTasks, setProjectTasks, getProjectTasks, tasks, setTasks, getTasks } = useContext(taskContext);
  const { searchTerm } = useContext(searchTermContext)
  
 console.log("projectID:", projectID)
  useEffect(() => {
    
   
    
    getTasks();
  },[])

    
>>>>>>> 0a185519d899258cd215441141ef8a1e5bbc5108
  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <p>View All</p>
      </Section>
     <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>TASK</StyledTableCell>
              <StyledTableCell>DUE DATE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
<<<<<<< HEAD
            {results.slice(0, numberOfTasks).map(item => {
              if (results.length > 0) {
                return <div></div>;
              } else {
                return <Task item={item} key={item.id} />;
              }
            })}
            {results.length > 0 ? (
              results.map(result => (
                <Task item={result} key={result.id}></Task>
              ))
            ) : (
              <p></p>
            )}
          </TableBody>
=======
        {tasks.slice(0, numberOfTasks).map(item => 
       
        { if ( JSON.stringify(item.project_id) === projectID ) { 
        return (
          <Task item={item} key={item.id}   />
           )
         }
           })}
            
       </TableBody>
>>>>>>> 0a185519d899258cd215441141ef8a1e5bbc5108
        </Table>
      </Paper>
    </Container>
      
       
         
  );
}

export default TaskCard;

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
