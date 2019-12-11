import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import projectContext from "../../contexts/projects/ProjectContext";
import AddProject from "../modal/AddProject";
import Global from "../../styles/Global";
import styled, { css } from "styled-components";
import searchTermContext from '../../contexts/searching/searchTerm'

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
// pages bar function from global
import TablePaginationActions from '../global/TablePaginationActions'

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
    marginBottom:"32px",
   
  }
}))(TableRow);

function createData(id,address, city,state,zip_code,name, status, createDate, view) {
  return {id, address,city,state,zip_code, name, status, createDate, view };
}

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


const Projects = props => {

  const classes = useStyles();
  
  const { projects } = useContext(projectContext);
  const { searchTerm } = useContext(searchTermContext);
  const projectSearchInput = searchTerm.toLowerCase('');
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  //return all projects or filtered projects
    const results = projects.filter(
      project =>
        project.project_name.toLowerCase().includes(projectSearchInput) ||
        project.street_address.toLowerCase().includes(projectSearchInput)
    );
  console.log("RESULTS:", results);
  
    //Setup the data for material-ui table
    let rows =[]
    if (results.length > 0) {
      results.forEach(project => {
        rows.push(
          createData(
            project.id,
            project.street_address,
            project.city,
            project.state,
            project.zip_code,
            project.project_name,
            project.status,
            project.createdAt,
            "View Project >"
          )
        ); 
       });
    }

console.log("rows in projects table", rows)

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
  
  return (
    <>
      <Global />
      <p style={{ color: "#817974", paddingBottom: "8px" }}>
        {" "}
        Your Project List{" "}
      </p>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ADDRESS</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
              <StyledTableCell>CREATED</StyledTableCell>
              <StyledTableCell>VIEW</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map(row => (
              <StyledTableRow className={classes.tableHover} key={row.id}>
                <StyledTableCell component="th" scope="row">
                  <p>{row.address}</p>
                  <p>{`${row.city}, ${row.state} ${row.zip_code}`}</p>
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.status}</StyledTableCell>
                <StyledTableCell>{row.createDate}</StyledTableCell>
                <StyledTableCell>
                  <Link
                    to={`/project/${row.id}`}
                    onClick={() => {
                      props.history.push(`/project/${row.id}`,localStorage.setItem('project_name',row.name));
                    }}
                  >
                    {row.view}
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}

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
                count={rows.length}
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
};

export default Projects;

