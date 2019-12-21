import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";



export const StyledTableCell = withStyles(theme => ({
  head: {
    padding: "4px 32px",
    height: 25,
    backgroundColor: "#E9E9E9",
    color: theme.palette.common.black
  },
  body: {
    padding: "8px 32px",
    fontSize: 16,
    height: 104
  }
}))(TableCell);

export const StyledTableHeadRow = withStyles(theme => ({
  root: {
    height:"40px"
  }
}))(TableRow);

export const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(even)": {
      background: "#F5F5F5"
    }
  }
}))(TableRow);

export const useStyles = makeStyles({
         root: {
           border: "1px solid #DCD9D5",
          
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