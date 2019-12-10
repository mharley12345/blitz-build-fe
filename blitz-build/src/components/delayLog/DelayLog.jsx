import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { ExportToCsv } from "export-to-csv";
import Global from "../../styles/Global";
import DelayLogContext from "../../contexts/delayLog/DelayLogContext";
import DelayLogButton from "./DelayLogButton";
import searchTermContext from "../../contexts/searching/searchTerm";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function createData(
  id,
  task_name,
  reason,
  createdAt,
  updatedAt,
  project_id,
  task_id
) {
  return { id, task_name, reason, createdAt, updatedAt, project_id, task_id };
}

const useStyles = makeStyles({
  root: {
    border: "1px solid #DCD9D5",
    overflowX: "auto"
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

function DelayLog() {
  const { delayLogs } = useContext(DelayLogContext);
  const classes = useStyles();
  const { searchTerm } = useContext(searchTermContext);
  const delayLogSearchInput = searchTerm.toLowerCase("");

  //console.log(delayLogs)
  //return all delayLogs or filtered delayLogs
  const results = delayLogs.filter(
    delayLog =>
      delayLog.task_name.toLowerCase().includes(delayLogSearchInput) ||
      delayLog.reason.toLowerCase().includes(delayLogSearchInput)
  );
  console.log("RESULTS:", results);

  function handleExportCSV() {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "Delay_Log CSV",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(delayLogs);
  }

  //Setup the data for material-ui table
  let rows = [];
  if (results.length > 0) {
    results.forEach(delayLog => {
      rows.push(
        createData(
          delayLog.id,
          delayLog.task_name,
          delayLog.reason,
          delayLog.createdAt,
          delayLog.updatedAt,
          delayLog.project_id,
          delayLog.task_id
        )
      );
    });
  }

  console.log("rows in delayLogs table", rows);
  return (
    <div>
      <Global />
      <div>
        <DelayLogButtons onClick={handleExportCSV}>
          Export to CSV
        </DelayLogButtons>
      </div>
      <p style={{ color: "#817974", paddingBottom: "8px" }}>
        {" "}
        Your Project List{" "}
      </p>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TASK NAME</StyledTableCell>
              <StyledTableCell>REASON</StyledTableCell>
              <StyledTableCell>CREATED</StyledTableCell>
              <StyledTableCell>UPDATED</StyledTableCell>
              <StyledTableCell>{"    "}</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => (
              <StyledTableRow className={classes.tableHover} key={row.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ maxWidth: 150 }}
                >
                  {row.task_name}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 300 }}>
                  {row.reason}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {row.createdAt}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {row.updatedAt}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {<DelayLogButton delayLog={row} />}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default DelayLog;


const DelayLogButtons = styled.div`
  position: absolute;
  width: 174px;
  height: 48px;
  right: 32px;
  top: 24px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 3px;
  padding-top: 12px;
  padding-left: 30px;
  font-size: 19px;
  color: #8a827d;
  &:hover {
    color: #dd6b20;
  }
`;

