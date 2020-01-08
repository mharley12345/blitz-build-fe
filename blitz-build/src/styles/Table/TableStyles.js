import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from 'styled-components'



export const TaskI = styled.i`
  font-size: 1.4rem;
  background-color: #fbfaf9;
  outline: none
  text-align: right;
  text-decoration: none;
  display: flex;
  cursor: pointer;
`;


export const StyledLi = styled.li`
  padding: 0px 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  color: #B5AFAB;
  border: 1px solid #B5AFAB;
  border-top: 0
  :hover {
    border: 1px solid #DD6B20 ;
    color: #DD6B20;
    cursor: pointer;
  }

`;



export const DropP = styled.p`
width: 75%;
`;
export const MeatBalls = styled.i`
  position: relative;
  width: 18px;
  height: 18px;
  font-size: 1.4rem;
  outline: none
  color: #B5AFAB;
  padding: 10px 10px;
  text-align: right;
  text-decoration: none;
  display: flex;
  margin: 4px 2px;
  cursor: pointer;
  :hover {
    color: #DD6B20;
    cursor: pointer;
  }
`;
export const DropDown = styled.ul`
border: 1px solid #B5AFAB
background: #fbfaf9
display: flex;
flex-direction: column;
position: absolute;
top: 100%;
right: 0;
width: 175px;
z-index: 2;
`;
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