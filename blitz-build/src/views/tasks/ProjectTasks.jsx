import React, { useContext, useEffect, useState } from "react";
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth'

//a package for parsing query strings
import queryString from "query-string";

//router
import { Link } from "react-router-dom";

//context
import taskContext from "../../contexts/tasks/TaskContext";

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
import {
  StyledTableCell,
  StyledTableHeadRow,
  useStyles
} from "../../styles/Table/TableStyles";

//styles
import styled from "styled-components";
import { SortBtn } from "../../styles/SortBtn";
import * as color from "../../styles/color";

//static
import Project_icon from "../../styles/icons_project/project_icon.png";

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


export default function ProjectTasks (props, {ProjectName}) {
  const { tasks, getTasks } = useContext(taskContext);
  const projectID = props.match.params.id;
  const projectTasks = tasks.filter(item => {
    return `${item.project_id}` === projectID;
  });

  //pagnation
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //status filter 
  const queryValues = queryString.parse(props.location.search);
  const [btnStatus, setBtnStatus] = useState(queryValues.filter === 'ACTIVE');
  
    useEffect(() => {
      getTasks()
    },[])
    
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, projectTasks.filter(task => {
    if(queryValues.filter === 'ACTIVE'){
      return task.isComplete === false
    } 
    else if(queryValues.filter === 'COMPLETE'){
      return task.isComplete === true
    }
  }).length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemCounter = () => {
    if (projectTasks.length > 0) {
      return projectTasks.filter(task => {
        if(queryValues.filter === 'ACTIVE'){
          return task.isComplete === false
        } 
        else if(queryValues.filter === 'COMPLETE'){
          return task.isComplete === true
        }
      }).length;
    } 
  };
  //gets the query from the url and parses it to a object


  const classes = useStyles();
  console.log('from tasks',tasks)
  return (
    <>
      <InfoContainer>
        <BreadCrumbs>
          <img src={Project_icon} alt="project_icon" />
          <span>
            &nbsp;&nbsp;Projects /{" "}
            {projectTasks.length === 0 ? (
              <span>...loading</span>
            ) : (
              projectTasks[0].project_name
            )}{" "}
            / Tasks
          </span>
        </BreadCrumbs>
        <SortDiv>
          <Link to={`/projects/${projectID}/tasks?filter=ACTIVE`}>
            <SortBtn 
            active={btnStatus}
            onClick={() => {
              setBtnStatus(true)
              console.log(btnStatus)
            }}
            >Active</SortBtn>
          </Link>
          <span style={{ fontWeight: 600, color: color.grey400 }}>|</span>
          <Link to={`/projects/${projectID}/tasks?filter=COMPLETE`}>
            <SortBtn 
            active={!btnStatus}
            onClick={() => {
              setBtnStatus(false)
            }}
            >Complete</SortBtn>
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
              <StyledTableCell>TASK</StyledTableCell>
              <StyledTableCell>DESCRIPTION</StyledTableCell>
              <StyledTableCell>DUE DATE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? projectTasks.filter(task => {
                if(queryValues.filter === 'ACTIVE'){
                  return task.isComplete === false
                } 
                else if(queryValues.filter === 'COMPLETE'){
                  return task.isComplete === true
                }
              }).slice(
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
