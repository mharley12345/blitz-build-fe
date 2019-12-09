import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import styled from "styled-components";
import zipcodes from "zipcodes";
import OpenTemplateContext from "../../contexts/OpenTemplateContext";
import { Hidden } from "@material-ui/core";
import TemplateContext from "../../contexts/templates/TemplateContext";

const ModalContainer = styled.div`

  width: '250px',
  height: '333px',
  background-color: '#FFFFFF',
  border-radius: '3px',
  display:'flex',
  flex-direction: 'column',
  justify-Content: 'center',
  align-items: 'center',
  overflow: scroll;
  ::-webkit-scrollbar { 
    display: none; 
  }

`;

const DialogStyle = {
  // overflowY: 'visible',
  // margin: '0 auto',
  // width: '810px',
  // height: '1000px',
  // background: '#FFFFFF',
  // borderRadius: '3px',
  // display:'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
};

const DialogActionsStyle = {
  height: "25px",
  width: "580px"
};
const CancelButtonStyle = {
  marginTop: "10px",
  fontSize: "30px",
  color: "#000000"
};
const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const TitleText = styled.div`
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #3b3b3b;
  margin-top: -40px;
`;
const ImgDrop = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 390px;
  height: 240px;
  background: #fafafa;
  border: 1px solid #8a827d;
  border-radius: 3px;
  margin: "0 auto";
`;
const DropTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DropText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3b3b3b;
  width: 256px;
  height: 28px;
`;

const DropTextSmall = styled.p`
  width: 183px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #3b3b3b;
`;

const formStyle = {
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  width: "550px",
  height: "700px",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  marginBottom: "20px"
};
const inputStyle = {
  display: "flex",
  width: "390px",
  height: "72px",
  margin: "15px 0px",
  flexDirection: "column"
};
const buttonStyle = {
  margin: "10px",
  border: "none",
  textDecoration: "none",
  width: "163px",
  height: "80px",
  fontSize: "16px",
  color: "#FFFFFF",
  lineHeight: "19px",
  backgroundColor: "#DA552F",
  borderRadius: "3px"
};

const DialogContentStyle = {};

const InputLabel = styled.p`
  width: 390px;
  font-size: 16px;
  color: #3b3b3b;
  margin-bottom: -12px;
  margin-left: -5px;
`;

//START OF FUNCTIONAL COMPONENT

const AddProject = props => {
  const { addTemplate } = useContext(TemplateContext);
  const [form, setForm] = useState({
    template_name: "",
    template: [
      {
        due_date: "",
        task_name: "",
        isComplete: false,
        project_id: 1
      }
    ]
  });
  const { openTemplate, setOpenTemplate } = useContext(OpenTemplateContext);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpenTemplate(true);
  };

  const handleClose = () => {
    setOpenTemplate(false);
  };

  const submitForm = e => {
    e.preventDefault();

    addTemplate(form);
    setForm({
      template_name: ""
    });

    handleClose();
  };

  return (
    <Dialog
      open={openTemplate}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      style={DialogStyle}
    >
      <ModalContainer>
        <DialogActions style={DialogActionsStyle}>
          <Button onClick={handleClose} style={CancelButtonStyle}>
            X
          </Button>
        </DialogActions>

        <ModalTitle>
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}

          <TitleText>Create a New Template</TitleText>
        </ModalTitle>
        <DialogContent style={DialogContentStyle}>
          <form onSubmit={submitForm} style={formStyle}>
            {/* <TopContainer> */}
            {/* top container is project name and address */}
            <InputLabel>Template name</InputLabel>
            <input
              style={inputStyle}
              name="template_name"
              onChange={changeHandler}
              value={form.template_name}
            />

            <button type="submit" style={buttonStyle}>
              Save
            </button>
          </form>
        </DialogContent>
      </ModalContainer>
    </Dialog>
  );
};

export default AddProject;
