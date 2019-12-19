import React, { useContext, useEffect, useState } from "react";
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth'

//context
import taskContext from "../../contexts/tasks/TaskContext";

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

//static
import Project_icon from "../../styles/icons_project/project_icon.png";

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

export default function ProjectTasks (props, {ProjectName}) {
  const { tasks, getTasks } = useContext(taskContext);
  const projectID = props.match.params.id;
  const projectTasks = tasks.filter(item => {
    return `${item.project_id}` === projectID;
  });

  //pagnation
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    useEffect(() => {
      getTasks()
    },[])
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, projectTasks.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemCounter = () => {
    if (projectTasks.length > 0) {
      return projectTasks.length;
    } else {
      return projectTasks.length;
    }
  };

  const classes = useStyles();
  console.log('from tasks',tasks)
  return (
    <>
      <InfoContainer>
      <BreadCrumbs>
        <img src={Project_icon} alt="project_icon" />
        <span>&nbsp;&nbsp;Projects / {projectTasks.length === 0 ? <span>...loading</span> : projectTasks[0].project_name} / Tasks</span>
      </BreadCrumbs>
        {/* <SortBtn >
          Active
        </SortBtn>
        <SortBtn>
          Complete
        </SortBtn> */}
      </InfoContainer>

      <Paper className={classes.root}>
        <Table
          className={classes.table}
          aria-label="customized table"
          style={{ minHeight: "500px" }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>TASK</StyledTableCell>
              <StyledTableCell>DESCRIPTION</StyledTableCell>
              <StyledTableCell>DUE DATE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? projectTasks.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : projectTasks
            ).map(task => {
              return <Task item={task} key={task.id} projectTask={true} />;
            })}

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

const BreadCrumbs = styled.div`
  display: flex;
  min-width: 530px;
  height: 24px;
  span {
    font-size: 16px;
    color: #8a827d;
  }
`;
