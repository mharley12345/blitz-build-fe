import React, { useState, useContext } from "react";

//context
import PathnameContext from '../../contexts/PathnameContext'

//material ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

//styles
import styled from "styled-components";
import * as color from '../../styles/color'




const ModalContainer = styled.div`
  width: 450px;
  height: 250px;
`;

const ModalTitle = styled.div`
  display: flex
  padding: 16px 24px;
  font-weight: 500;
  color: ${color.greyDark};
  justify-content: center;
  border-bottom: 1px solid ${color.greyDark};
`;

const H3 = styled.div`
  font-size: 2.2em;
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
  backgroundColor: color.orange,
  color: "white",
  borderRadius: "3px",
  border: `1px solid ${color.grey}`,
  width: "30px",
  height: "35px"
};

const Pstyle = styled.p`
  font-size: 22px;
  margin: 25px 0 0 40px;
  color: #212529;
   
`;

const Logout = props => {
  const { setPathname } = useContext(PathnameContext)
  //sets state of the modal that confirms your logout
  const [open, setOpen] = useState(true);

  //handles close of modal
  const handleClose = () => {
    setOpen(false);
    props.history.push("/dashboard");
  };

  //function for logging out
  const SignOut = e => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    props.history.push("/");
    setPathname('/')
  };

  //returns modal to confirm you want to logout
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
          <Pstyle> Are you sure you want to log out?</Pstyle>
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
