import React, { useContext, useState, useEffect } from "react";

//a package for parsing query strings
import queryString from "query-string";

//router
import { Link } from "react-router-dom";

//context
import { useTaskContext } from "../../contexts/tasks/TaskContext";
import { useSearchTermContext } from "../../contexts/searching/searchTerm";

//components
import Task from "../../components/dashboard/Task";

//mui
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
import * as color from "../../styles/color";

import {
  useStyles,
  StyledTableCell,
  StyledTableHeadRow
} from "../../styles/Table/TableStyles";

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SortDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// const useStyles = makeStyles({
//   root: {
//     border: "1px solid #DCD9D5"
//   },
//   table: {
//     // minWidth: "1080px"
//   },
//   tableHover: {
//     "&:hover": {
//       border: "3px solid orange"
//     }
//   }
// });

export default function Tasks(props) {
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

  const { tasks, getTasks } = useTaskContext();

  const { searchTerm, results } = useSearchTermContext();

  //filter logic

  //gets the query from the url and parses it to a object
  const queryValues = queryString.parse(props.location.search);

  const [btnStatus, setBtnStatus] = useState(queryValues.filter === "ACTIVE");

  useEffect(() => {
    getTasks();
  }, [btnStatus]);

  //pagnation
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage -
    Math.min(
      rowsPerPage,
      tasks.filter(task => {
        if (queryValues.filter === "ACTIVE") {
          return task.isComplete === false;
        } else if (queryValues.filter === "COMPLETE") {
          return task.isComplete === true;
        }
      }).length -
        page * rowsPerPage
    );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemCounter = () => {
    console.log("from counter", tasks.length);
    if (results.length > 0) {
      return results.length;
    } else {
      return tasks.filter(task => {
        if (queryValues.filter === "ACTIVE") {
          return task.isComplete === false;
        } else if (queryValues.filter === "COMPLETE") {
          return task.isComplete === true;
        }
      }).length;
    }
  };
  const failedSearch = () => {
    if (searchTerm.length > 0 && results.length === 0) {
      return <p>There doesn't seem to be any tasks with that name</p>;
    } else {
      return (
        <p style={{ fontWeight: 600}}>Your Task List</p>
      );
    }
  };

  const classes = useStyles();

  return (
    <>
      <InfoContainer>
        {failedSearch()}
        <SortDiv>
          <Link to="/tasks?filter=ACTIVE">
            <SortBtn
              active={btnStatus}
              onClick={() => {
                setBtnStatus(true);
                console.log(btnStatus);
              }}
            >
              Active
            </SortBtn>
          </Link>
          <span style={{ fontWeight: 600, color: color.grey400 }}>|</span>
          <Link to="/tasks?filter=COMPLETE">
            <SortBtn
              active={!btnStatus}
              onClick={() => {
                setBtnStatus(false);
              }}
            >
              Complete
            </SortBtn>
          </Link>
        </SortDiv>
      </InfoContainer>

      <Paper className={classes.root}>
        <Table
          className={classes.table}
          aria-label="customized table"
          style={{ minHeight: "500px" }}
        >
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell>PROJECT NAME</StyledTableCell>
              <StyledTableCell>TASK</StyledTableCell>
              <StyledTableCell>DESCRIPTION</StyledTableCell>
              <StyledTableCell>DUE DATE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tasks
                  .filter(task => {
                    if (queryValues.filter === "ACTIVE") {
                      return task.isComplete === false;
                    } else if (queryValues.filter === "COMPLETE") {
                      return task.isComplete === true;
                    }
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : tasks
            ).map(task => {
              if (results.length === 0 && searchTerm.length === 0) {
                return <Task item={task} key={task.id} />;
              } else if (results.length > 0) {
                return <></>;
              }
            })}

            {results.length > 0 ? (
              (rowsPerPage > 0
                ? results.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : results
              ).map(result => <Task item={result} key={result.id}></Task>)
            ) : (
              <></>
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
