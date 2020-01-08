import React, { useState, useEffect, useContext } from "react";

//components
import DelayLogButton from "../../components/delayLog/DelayLogButton";

//contexts
import DelayLogContext from "../../contexts/delayLog/DelayLogContext";
import searchTermContext from "../../contexts/searching/searchTerm";

//styles
import Global from "../../styles/Global";
import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import {
  useStyles,
  StyledTableCell,
  StyledTableRow,
  StyledTableHeadRow
} from "../../styles/Table/TableStyles";
// pages bar function from global
import TablePaginationActions from "../../components/global/TablePaginationActions";
// csv function
import { ExportToCsv } from "export-to-csv";



function DelayLog() {
  const { delayLogs } = useContext(DelayLogContext);
  const { searchTerm } = useContext(searchTermContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [hover, setHover] = useState(false);

  const classes = useStyles();

  const delayLogSearchInput = searchTerm.toLowerCase("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //console.log(delayLogs)

  //return all delayLogs or filtered delayLogs
  const results = delayLogs.filter(
    delayLog =>
      delayLog.task_name.toLowerCase().includes(delayLogSearchInput) ||
      delayLog.reason.toLowerCase().includes(delayLogSearchInput)
  );

  // csv function
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

    csvExporter.generateCsv(results);
  }
  // hover function for the button in the top
  const hoverStyle = () => {
    if (hover === true) {
      return HoverStyle;
    }
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, results.length - page * rowsPerPage);

  console.log("rows in delayLogs table", results);
  return (
    <div>
      <Global />
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ButtonI className="ion-ios-add-circle" style={hoverStyle()} />
        <DelayLogButtons onClick={handleExportCSV}>
          Export to CSV
        </DelayLogButtons>
      </div>
      <p style={{ paddingBottom: "8px", fontWeight: 600 }}>
        Your Delay Log List
      </p>
      <Paper className={classes.root}>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell>TASK NAME</StyledTableCell>
              <StyledTableCell>REASON</StyledTableCell>
              <StyledTableCell>CREATED</StyledTableCell>
              <StyledTableCell>UPDATED</StyledTableCell>
              <StyledTableCell>{"    "}</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? results.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : results
            ).map(result => (
              <StyledTableRow key={result.id}>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {result.task_name}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 300 }}>
                  {result.reason}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {result.createdAt}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {result.updatedAt}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 150 }}>
                  {<DelayLogButton delayLog={result} />}
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
                colSpan={5}
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
    </div>
  );
}

export default DelayLog;

const DelayLogButtons = styled.div`
  position: absolute;
  width: 180px;
  height: 48px;
  right: 40px;
  top: 24px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 3px;
  padding-top: 10px;
  padding-left: 40px;
  font-size: 19px;
  color: #8a827d;
  cursor: pointer;
  &:hover {
    color: #dd6b20;
  }
`;

const ButtonI = styled.i`
  position: absolute;
  top: 33px;
  right: 192px
  font-size: 21px;
  color: #8a827d;
`;

const HoverStyle = {
  color: "#DD6B20"
};
