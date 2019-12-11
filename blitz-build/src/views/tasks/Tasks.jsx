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

//pagnation
import TablePaginationActions from "../../components/global/TablePaginationActions";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";

//styles
import styled from "styled-components";
import { SortBtn } from "../../styles/SortBtn";

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

  //pagnation
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tasks.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
        <p style={{ fontWeight: 600 }}>Your Task List</p>
        <SortBtn style={{textDecoration: 'none'}}>
          Sort By <span className="ion-ios-arrow-down" />
        </SortBtn>
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
            {(rowsPerPage > 0
              ? tasks.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tasks
            ).map(task => {
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={tasks.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </>
  );
}
