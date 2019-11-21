import React from "react";

//mui
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//styles
import { SortButton } from "../../../styles/Tasks/tasks";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SortButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Sort By &#8595;
      </SortButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Urgency</MenuItem>
      </Menu>
    </>
  );
}
