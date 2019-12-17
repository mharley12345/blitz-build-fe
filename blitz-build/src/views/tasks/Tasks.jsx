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
    // minWidth: "1080px"
  },
  tableHover: {
    "&:hover": {
      border: "3px solid orange"
    }
  }
});
// const MainFailContainer = styled.div`
//   postion: relative;
//   width: 900px;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 250px;
// `;

// const failedContainer = styled.div`
//   margin-top: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const failText = styled.div`
//   font-size: 50px;
// `;

export default function Tasks() {
  const { tasks, getTasks } = useContext(taskContext);
  const { searchTerm, results, taskSearchResults } = useContext(
    searchTermContext
  );

  console.log("taskSearchResults", taskSearchResults);

  console.log("RESULTS:", results);
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

  const itemCounter = () => {
    if (results.length > 0) {
      return results.length;
    } else {
      return tasks.length;
    }
  };
  const failedSearch = () => {
    if (searchTerm.length > 0 && results.length === 0) {
      return (
        <p style={{ fontWeight: 600 }}>
          There doesn't seem to be any tasks with that name
        </p>
      );
    } else {
      return <p style={{ fontWeight: 600 }}>Your Task List</p>;
    }
  };

  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <>
      <InfoContainer>
        {failedSearch()}
        {/* <SortBtn >
          Active
        </SortBtn>
        <SortBtn>
          Complete
        </SortBtn> */}
      </InfoContainer>

      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table"  style = {{minHeight: '500px'}}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Poject Name</StyledTableCell>
              <StyledTableCell>Task</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Due Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
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
              if (results.length === 0 && searchTerm.length === 0) {
                return <Task item={task} key={task.id} />;
              } else if (results.length > 0) {
                return <TableRow></TableRow>;
              }
            })}

            {results.length > 0 ? (
              results.map(result => <Task item={result} key={result.id}></Task>)
            ) : (
              <TableRow></TableRow>
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination 
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={5}
                count={itemCounter()}
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
