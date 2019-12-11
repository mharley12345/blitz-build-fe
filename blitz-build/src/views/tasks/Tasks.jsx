import React, { useContext, useState, useEffect } from "react";

//context
import taskContext from "../../contexts/tasks/TaskContext";
import searchTermContext from "../../contexts/searching/searchTerm";

//components
import Task from "../../components/dashboard/Task";

//mui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

//styles
import styled from "styled-components";
import { SortBtn } from '../../styles/SortBtn'

let uid = localStorage.getItem("uid");
let projectID = localStorage.getItem("projectID");

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



const InfoContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
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

export default function Tasks() {
  const { tasks } = useContext(taskContext);
  const { searchTerm } = useContext(searchTermContext);
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const results = tasks.filter(task =>
      task.task_name.toLowerCase().includes(taskSearchInput)
    );
    console.log("RESULTS:", results);
    setTaskSearchResults(results);
  }, [taskSearchInput]);

  return (
    <>
      <InfoContainer>
        <p style={{fontWeight: 600}}>Your Task List</p>
        <SortBtn  >Sort By <span className="ion-ios-arrow-down"/></SortBtn>
      </InfoContainer>

      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>PROJECT</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>TASK</StyledTableCell>
              <StyledTableCell>DUE DATE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TaskNav addTask={addTask} /> */}
            {tasks.map(task => {
              console.log(task.createdAt);
              if (taskSearchResults.length > 0) {
                return <div></div>;
              } else {
                return (
                  <>
                    <Task item={task} key={task.id} />
                  </>
                );
              }
            })}
            {taskSearchResults.length > 0 ? (
              taskSearchResults.map(result => (
                <Task item={result} key={result.id}></Task>
              ))
            ) : (
              <p></p>
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
