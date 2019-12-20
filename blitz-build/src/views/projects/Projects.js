import React, { useContext } from "react";

// context
import projectContext from "../../contexts/projects/ProjectContext";
import searchTermContext from "../../contexts/searching/searchTerm";

//styles
import Global from "../../styles/Global";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import * as color from "../../styles/color"

// pages bar function from global
import TablePaginationActions from "../../components/global/TablePaginationActions";

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

  //importing state of projects, and search term from context
  const { projects } = useContext(projectContext);
  const { searchTerm } = useContext(searchTermContext);
  const projectSearchInput = searchTerm.toLowerCase("");

  //this tracks which page you are on for projects and sets the intial state of how many rows there are
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const results = projects.filter(
    project =>
      project.project_name.toLowerCase().includes(projectSearchInput) ||
      project.street_address.toLowerCase().includes(projectSearchInput)
  );

  
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, results.length - page * rowsPerPage);

  return (
    <>
      <Global />
      <p style={{ paddingBottom: "8px", fontWeight: 600, color: color.grey400 }}>Your Project List</p>
      <Paper className={classes.root}>
        <Table  aria-label="customized table">
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
              ? results.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : results
            ).map(result => (
              <StyledTableRow
                className={classes.tableHover}
                key={result.id}
                to={`/projects/${result.id}`}
                onClick={() => {
                  props.history.push(`/projects/${result.id}`);
                }}
              >
                <StyledTableCell>
                  <p style={{ marginBottom: 0 }}>{result.street_address}</p>
                  <p
                    style={{ marginBottom: 0 }}
                  >{`${result.city}, ${result.state} ${result.zip_code}`}</p>
                </StyledTableCell>
                <StyledTableCell>{result.project_name}</StyledTableCell>
                <StyledTableCell>{result.status}</StyledTableCell>
                <StyledTableCell>{result.createdAt}</StyledTableCell>
                <StyledTableCell>
                  <span>View Project ></span>
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
                colSpan={6}
                count={results.length}
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
