import React, { useState, useContext,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import styled from "styled-components";
import zipcodes from "zipcodes";
import OpenContext from "../../contexts/projects/OpenContext";
import { Hidden } from "@material-ui/core";
import projectContext from "../../contexts/projects/ProjectContext";

const ModalContainer =styled.div`

  width: '750px',
  height: '1000px',
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

}

const DialogActionsStyle = {
  height: '25px',
  width: '580px'
}
const CancelButtonStyle = {
 marginTop: '10px',
 fontSize: '30px',
 color: '#000000'
}
const ModalTitle = styled.div`
   
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100px;
  justify-content: center;
  align-Items: center;
  margin: 0 auto;

`;

const TitleText = styled.div`
margin-bottom: 15px;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 42px;
color: #3B3B3B;
 margin-top: -40px;
`;
const ImgDrop = styled.div`
display: flex;
justify-content: center;
align-content: center;
width: 390px;
height: 240px;
background: #FAFAFA;
border: 1px solid #8A827D;
border-radius: 3px;
margin: '0 auto';
`;
const DropTextContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const DropText = styled.p`

font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #3B3B3B;
width: 256px;
height: 28px;
`

const DropTextSmall = styled.p`
width: 183px;
height: 24px;
font-size: 16px;
line-height: 24px;
color: #3B3B3B;
`

const formStyle = {
  margin: '0 auto',
display: 'flex',
justifyContent: 'center',
width: '550px',
height: '700px',
flexDirection: 'column',
alignItems: 'center',
overflow: 'hidden',
marginBottom: '20px'
}
const inputStyle = {
display: 'flex',
width: '390px',
height: '72px',
margin: '15px 0px',
flexDirection: 'column',

}
const buttonStyle = {
  margin: '10px',
  border: 'none',
  textDecoration: 'none',
  width: '163px',
  height: '80px',
  fontSize: '16px',
  color: '#FFFFFF',
  lineHeight: '19px',
  backgroundColor: '#DA552F',
  borderRadius: '3px',
  
}

const DialogContentStyle = {
}

const InputLabel = styled.p`

width: 390px;
font-size: 16px;
color: #3B3B3B;
margin-bottom: -12px;
margin-left: -5px;
`

//START OF FUNCTIONAL COMPONENT

const AddProject = props => {
  const { addProject} = useContext(projectContext);
  const [form, setForm] = useState({
    project_name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: 0,
    status: "",
    beds: 0,
    baths: 0,
    square_ft: 0,
    // assign_template: undefined,
    imageURL: "",
    latitude: null,
    longitude: null
  });
  const { open, setOpen } = useContext(OpenContext);
  
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = e => {
    e.preventDefault();

    const gps = zipcodes.lookup(form.zip_code);

    form.latitude = gps.latitude;
    form.longitude = gps.longitude;
    
      addProject(form);
    
  
    handleClose();
  };

  return (
    <Dialog
      open={open}
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
         
            <TitleText>Create a New Project</TitleText>
          
        </ModalTitle>
        <DialogContent style={DialogContentStyle}>
          <form onSubmit={submitForm} style={formStyle}>
            {/* <TopContainer> */}
            {/* top container is project name and address */}
            <InputLabel>Project Name</InputLabel>
            <input
              style={inputStyle}
              name="project_name"
              onChange={changeHandler}
              value={form.project_name}
            />
            <InputLabel>City</InputLabel>
            <input
              style={inputStyle}
              name="city"
              onChange={changeHandler}
              value={form.city}
            />
            <InputLabel>State</InputLabel>
            <input
              style={inputStyle}
              name="state"
              onChange={changeHandler}
              value={form.state}
            />
            <InputLabel>Street Address</InputLabel>
            <input
              style={inputStyle}
              name="street_address"
              onChange={changeHandler}
              value={form.street_address}
            />
            {/* Zip Code
            <input
              name="zip_code"
              placeholder="Zip Code"
              onChange={changeHandler}
              value={form.zip_code}
            /> */}

            {/* </TopContainer> */}
            {/* second container includes beds and baths */}
            <InputLabel>Beds</InputLabel>
            <input
              style={inputStyle}
              name="beds"
              onChange={changeHandler}
              value={form.beds}
            />
            <InputLabel>Baths</InputLabel>
            <input
              style={inputStyle}
              name="baths"
              onChange={changeHandler}
              value={form.baths}
            />
            <InputLabel>Square Footage</InputLabel>
            {/* square footage on its own */}
            <input
              style={inputStyle}
              name="square_ft"
              onChange={changeHandler}
              value={form.square_ft}
            />
            {/* templates on its own and its a drop down */}
            {/* <input
              name="assign_template"
              placeholder="Assign Template"
              onChange={changeHandler}
              value={form.assign_template}
            /> */}
            {/* thumbnail on its own and it will have to be uploaded */}
            <InputLabel>Project Thumbnail</InputLabel>
            <input
              style={inputStyle}
              name="imageURL"
              onChange={changeHandler}
              value={form.imageURL}
            />
            <InputLabel>Zip Code</InputLabel>
            <input
              style={inputStyle}
              name="zip_code"
              onChange={changeHandler}
              value={form.zip_code}
            />
            
              <button type="submit" style={buttonStyle}>Save</button>
            
           
          
          </form>
        </DialogContent>
      </ModalContainer>
    </Dialog>
  );
};

export default AddProject;
