import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import styled from "styled-components";

const ModalContainer = styled.div`
  
  `;

const ModalTitle = styled.div`
  display: flex
  padding: 16px 24px;
  background-color: rgb(34, 58, 77);
  color: white;
  justify-content: center;
`;

const H3 = styled.div`
  font-size: 1.5em;
  display:flex
  justify-content:center
`;

const ButtonStyles = styled.div `
  display: flex;
  justify-content: center;
`;



const Logout = (props) => {
  const [open, setOpen] = useState(true);
    const handleClose = () => {
    setOpen(false);
    props.history.push("/projects");
  };
    const SignOut = e => {
        e.preventDefault();
        localStorage.removeItem("token");
      localStorage.removeItem('uid');
        props.history.push("/");
      };

      return (
        <ModalContainer>
       <Dialog  open={open}
       onClose={handleClose}
        aria-labelledby="form-dialog-title">

          <ModalTitle> <H3>Log Out</H3></ModalTitle>

              <DialogContent> Are you sure you want to logout?</DialogContent>

            <ButtonStyles><DialogActions>
               
              <Button onClick={()=> SignOut}>yes</Button>
              <Button onClick={handleClose} >  No  </Button>
                
           </DialogActions></ButtonStyles>
       </Dialog>
       </ModalContainer>
      )
}

export default Logout;
