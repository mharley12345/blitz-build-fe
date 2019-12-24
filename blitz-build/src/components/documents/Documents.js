import React, { useContext, useState } from "react";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
import searchTermContext from '../../contexts/searching/searchTerm'
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Global from '../../styles/Global';
import {SortBtn} from '../../styles/SortBtn'
import TablePaginationActions from "../../components/global/TablePaginationActions";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import Sortv from '../../styles/Sort/Sortv.png'


import {
  StyledTableRow,
  useStyles,
  StyledTableCell
} from "../../styles/Table/TableStyles";




const DocumentCard = (props) => {
  const { document } =
    useContext(DocumentsContext)
  const { searchTerm } = useContext(searchTermContext)
  const documentSearchInput = searchTerm.toLowerCase("")
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0)
  }
  const results = document.filter(
    documents =>
      documents.file_name.toLowerCase().includes(documentSearchInput) ||
      documents.project_name.toLowerCase().includes(documentSearchInput)

  )

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, results.length - page * rowsPerPage)
  return (



    <>
      <Global />
      <p style={{  fontWeight: 600 }}>Your Documents</p>  <SortBtn style={{textDecoration:"none"}}>Sort <img src={Sortv} alt=""/></SortBtn>
    
      <Paper className={classes.root}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>PROJECT</StyledTableCell>
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
              >
                <StyledTableCell>{result.file_name}</StyledTableCell>
                <StyledTableCell>{result.project_name}</StyledTableCell>
                <StyledTableCell>{result.createdAt}</StyledTableCell>
                <StyledTableCell>
                  <a href={result.doc_url}
                    rel="noopener noreferrer" target="_blank">
                    View</a> >
                  </StyledTableCell>

              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
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
    </>

  )
}







export default DocumentCard;


