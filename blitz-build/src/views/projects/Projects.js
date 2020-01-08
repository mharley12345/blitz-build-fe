import React, { useContext } from "react";
// context
import { useProjectContext } from "../../contexts/projects/ProjectContext";
import searchTermContext from "../../contexts/searching/searchTerm";
//styles
import Global from "../../styles/Global";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
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
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //return all projects or filtered projects
  
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage);
  return (
    <>
      <Global />
      <p style={{ paddingBottom: "15px", fontWeight: 600 }}>Your Project List</p>
      <Paper className={classes.root}>
        <Table aria-label="customized table">
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
                key={projects.id}
                
                onClick={() => {
                  props.history.push(`/projects/${projects.id}`);
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
