<<<<<<< HEAD:blitz-build/src/views/projects/Projects.js
import React, { useContext } from "react";
// context
import { useProjectContext } from "../../contexts/projects/ProjectContext";
import searchTermContext from "../../contexts/searching/searchTerm";
//styles
import Global from "../../styles/Global";
=======
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import projectContext from "../../contexts/projects/ProjectContext";
import AddProject from "../modal/AddProject";
import Global from "../../styles/Global";
import styled, { css } from "styled-components";
import searchTermContext from "../../contexts/searching/searchTerm";
import moment from "moment";

import { withStyles, makeStyles } from "@material-ui/core/styles";
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee:blitz-build/src/components/projects/Projects.js
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
<<<<<<< HEAD:blitz-build/src/views/projects/Projects.js
import * as color from "../../styles/color"

import {
  useStyles,
  StyledTableCell,
  StyledTableRow,
  StyledTableHeadRow
} from "../../styles/Table/TableStyles";
// pages bar function from global
import TablePaginationActions from "../../components/global/TablePaginationActions";
const Projects = props => {
  const classes = useStyles();
  //importing state of projects
  const { projects } = useProjectContext();
  
  //this tracks which page you are on for projects and sets the intial state of how many rows there are
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  //sets new page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //this handles the changes the user makes to how many rows they want
=======
// pages bar function from global
import TablePaginationActions from "../global/TablePaginationActions";

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

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(even)": {
      background: "#F5F5F5"
    },
    marginBottom: "32px"
  }
}))(TableRow);

const useStyles = makeStyles({
  root: {
    border: "1px solid #DCD9D5"
  },
  table: {
    minWidth: "1080px"
  },
  tableHover: {
    "&:hover": {
      cursor: "pointer",
      "& span": {
        color: "#DD6B20",

        textDecoration: "underline"

      }
    }
  }
});

const Projects = props => {
  const classes = useStyles();

  const { projects } = useContext(projectContext);
  const { searchTerm } = useContext(searchTermContext);
  const projectSearchInput = searchTerm.toLowerCase("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee:blitz-build/src/components/projects/Projects.js
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //return all projects or filtered projects
<<<<<<< HEAD:blitz-build/src/views/projects/Projects.js
  
=======

  const results = projects.filter(
    project =>
      project.project_name.toLowerCase().includes(projectSearchInput) ||
      project.street_address.toLowerCase().includes(projectSearchInput)
  );

  console.log("rows in projects table", results);

>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee:blitz-build/src/components/projects/Projects.js
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage);
  return (
    <>
      <Global />
<<<<<<< HEAD:blitz-build/src/views/projects/Projects.js
      <p style={{ paddingBottom: "15px", fontWeight: 600 }}>Your Project List</p>
      <Paper className={classes.root}>
        <Table aria-label="customized table">
=======
      <div style={{ color: "#817974", paddingBottom: "8px" }}>
        {" "}
        Your Project List{" "}
      </div>
      <Paper className={classes.root} >
        <Table className={classes.table} aria-label="customized table"  >
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee:blitz-build/src/components/projects/Projects.js
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell>ADDRESS</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
              <StyledTableCell>CREATED</StyledTableCell>
              <StyledTableCell>VIEW</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? projects.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : projects
            ).map(projects => (
              <StyledTableRow
                className={classes.tableHover}
<<<<<<< HEAD:blitz-build/src/views/projects/Projects.js
                key={projects.id}
                
                onClick={() => {
                  props.history.push(`/projects/${projects.id}`);
=======
                key={result.id}
                Link
                to={`/project/${result.id}`}
                onClick={() => {
                  props.history.push(`/project/${result.id}`);
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee:blitz-build/src/components/projects/Projects.js
                }}
              >
                <StyledTableCell>
                  <p style={{ marginBottom: 0 }}>{projects.street_address}</p>
                  <p
                    style={{ marginBottom: 0 }}
                  >{`${projects.city}, ${projects.state} ${projects.zip_code}`}</p>
                </StyledTableCell>
                <StyledTableCell>{projects.project_name}</StyledTableCell>
                <StyledTableCell>{projects.status}</StyledTableCell>
                <StyledTableCell>{projects.createdAt}</StyledTableCell>
                <StyledTableCell>
                  <span>View Project ></span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
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
                colSpan={6}
                count={projects.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: false
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
};
export default Projects;
