import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import axios from "axios";
// import { height } from "@material-ui/system";
// import auth0Client from "./auth";

const ModalContainer = styled.div`
  width: 450px;
  height: 250px;
`;

const ModalTitle = styled.div`
  display: flex
  padding: 16px 24px;
  font-weight: 500;
  color: #3B3B3B;
  justify-content: center;
  border-bottom: 1px solid #3B3B3B;
`;

const H3 = styled.div`
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  height: 50px;
`;

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;
`;

const ButtonStyle = {
  cursor: "pointer",
  backgroundColor: "#DA552F",
  color: "white",
  borderRadius: "1px",
  width: "30px",
  height: "35px"
};

const Pstyle = styled.p`
  font-size: 25px;
  margin: 25px 0 0 40px;
`;

const Logout = props => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    props.history.push("/projects");
  };
  const SignOut = e => {
    // e.preventDefault();
    // localStorage.removeItem("token");
    // localStorage.removeItem("uid");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    props.history.push("/");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <ModalContainer>
        <ModalTitle>
          {" "}
          <H3>Log Out</H3>
        </ModalTitle>

        <DialogContent>
          {" "}
          <Pstyle> Are you sure you want to logout?</Pstyle>
        </DialogContent>

        <ButtonStyles>
          <DialogActions>
            <Button onClick={SignOut} style={ButtonStyle}>
              yes
            </Button>
            <Button onClick={handleClose} style={ButtonStyle}>
              {" "}
              No{" "}
            </Button>
          </DialogActions>
        </ButtonStyles>
      </ModalContainer>
    </Dialog>
  );
};

export default Logout;
