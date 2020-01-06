import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";



const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    
  }
}));

//allows for page pagination
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props;

  //these functions handle what page they are on and moving to different pages as well as how many rows on a page
  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? (
          <i className="icon ion-md-skip-forward"></i>
        ) : (
          <i className="icon ion-md-skip-backward"></i>
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <i
            className="icon ion-ios-arrow-forward"
            style={{ padding: "0", margin: "0px 6px" }}
          ></i>
        ) : (
          <i
            className="icon ion-ios-arrow-back"
            style={{ padding: "0", margin: "0px 6px" }}
          ></i>
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <i
            className="icon ion-ios-arrow-back"
            style={{ padding: "0", margin: "0px 6px" }}
          ></i>
        ) : (
          <i
            className="icon ion-ios-arrow-forward"
            style={{ padding: "0", margin: "0px 6px" }}
          ></i>
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? (
          <i className="icon ion-md-skip-backward"></i>
        ) : (
          <i className="icon ion-md-skip-forward"></i>
        )}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};


export default TablePaginationActions;
