import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import styled from "styled-components";
import zipcodes from "zipcodes";
import OpenContext from "../../contexts/projects/OpenContext";



const ModalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 800px;
height: 1078px;
background: #FFFFFF;
border: 1px solid #8A827D;
border-radius: 3px;
`;

const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 656px;
  height: 400px;
  justify-content: center;
`;

const TitleText = styled.div`

font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 42px;
color: #3B3B3B;
`;
const ImgDrop = styled.div`
display: flex;
justify-content: center;
align-content: center;
width: 656px;
height: 295px;
background: #FAFAFA;
border: 1px solid #8A827D;
border-radius: 3px;
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
display: 'flex',
justifyContent: 'center',
width: '656px',
height: '500px',
flexDirection: 'column',
alignItems: 'center'
}
const inputStyle = {
display: 'flex',
width: '656px',
height: '72px',
margin: '15px 0px',
flexDirection: 'column',

}
const buttonStyle = {
  width: '163px',
  height: '48px',
  fontSize: '16px',
  color: '#FFFFFF',
  lineHeight: '19px',
  backgroundColor: '#DA552F',
  borderRadius: '3px'
}



//START OF FUNCTIONAL COMPONENT

const AddProject = props => {
  console.log("props", props);
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
    latitude: 0,
    longitude: 0
  });
  const {open, setOpen} = useContext(OpenContext);

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

    console.log(form);
    console.log(form.zip_code);
    const gps = zipcodes.lookup(form.zip_code);
    console.log(gps);
    form.latitude = gps.latitude;
    form.longitude = gps.longitude;
    console.log("form", form);
    // setForm({ ...form, latitude: gps.latitude, longitude: gps.longitude });
    // console.log(form);
    axios
      .post(`https://blitz-build.herokuapp.com/projects`, form)

      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    
       
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
      <ModalContainer>
        <ModalTitle>
          
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <TitleText>Create a New Project</TitleText>
          <ImgDrop>
          <DropTextContainer>
             <DropText>Drag and drop an image</DropText>
             <DropTextSmall>or browse to choose a file</DropTextSmall>
         </DropTextContainer>
          </ImgDrop>
        </ModalTitle>
        <DialogContent>
          
          <form onSubmit={submitForm} style={formStyle}>
            {/* <TopContainer> */}
            {/* top container is project name and address */}
            <input style={inputStyle}
              name="project_name"
              placeholder="Project Name"
              onChange={changeHandler}
              value={form.project_name}
            />
            <input  style={inputStyle}
              name="city"
              placeholder="City"
              onChange={changeHandler}
              value={form.city}
            />
            <input  style={inputStyle}
              name="state"
              placeholder="state"
              onChange={changeHandler}
              value={form.state}
            />
            <input  style={inputStyle}
              name="street_address"
              placeholder="Project Address"
              onChange={changeHandler}
              value={form.street_address}
            />
            {/* </TopContainer> */}
            {/* second container includes beds and baths */}
            <input  style={inputStyle}
              name="beds"
              placeholder="Beds"
              onChange={changeHandler}
              value={form.beds}
            />
            <input  style={inputStyle}
              name="baths"
              placeholder="Baths"
              onChange={changeHandler}
              value={form.baths}
            />
            {/* square footage on its own */}
            <input  style={inputStyle}
              name="square_ft"
              placeholder="Square Footage"
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
            <input  style={inputStyle}
              name="imageURL"
              placeholder="Project Thumbnail"
              onChange={changeHandler}
              value={form.imageURL}
            />
            <input  style={inputStyle}
              name="zip_code"
              placeholder="Zip Code "
              onChange={changeHandler}
              value={form.zip_code}
            />
            <button type="submit" style= {buttonStyle}> Add Project </button>
          </form>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onSubmit={submitForm} color="primary">
            Add Project
          </Button> */}
        </DialogActions>
       </ModalContainer>
      </Dialog>
      
  );
};

export default AddProject;
