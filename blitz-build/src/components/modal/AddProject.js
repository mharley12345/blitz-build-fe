import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import styled from "styled-components";

const ModalContainer = styled.div``;

const ModalTitle = styled.div`
  display: flex
  padding: 16px 24px;
  width: 92%
  background-color: rgb(34, 58, 77);
  color: white;
  justify-content: center;
`;

const H3 = styled.div`
  font-size: 1.5em;
  display:flex
  justify-content:center
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

//START OF FUNCTIONAL COMPONENT

const AddProject = props => {
  console.log("props", props);
  const [form, setForm] = useState({
    project_name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    status: "",
    beds: 0,
    baths: 0,
    square_ft: 0,
    // assign_template: undefined,
    imageURL: ""
  });
  const [open, setOpen] = useState(false);

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
    const uid = localStorage.getItem("uid");

    console.log("im here");
    // axios
    //   .post(
    //     `https://api-blitz-build-dev.herokuapp.com/api/auth/${uid}/projects`,
    //     form
    //   )

    axios
      .post("https://blitz-build.herokuapp.com/projects", form)
      .then(res => {
        console.log(res);
        props.history.push("/projects");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ModalTitle>
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <H3>Add Project</H3>
        </ModalTitle>
        <DialogContent>
          <form onSubmit={submitForm}>
            {/* <TopContainer> */}
            {/* top container is project name and address */}
            Project Name:
            <input
              name="project_name"
              placeholder="Project Name"
              onChange={changeHandler}
              value={form.project_name}
            />
            Project Address
            <input
              name="street_address"
              placeholder="Project Address"
              onChange={changeHandler}
              value={form.street_address}
            />
            {/* </TopContainer> */}
            {/* second container includes beds and baths */}
            <input
              name="beds"
              placeholder="Beds"
              onChange={changeHandler}
              value={form.beds}
            />
            <input
              name="baths"
              placeholder="Baths"
              onChange={changeHandler}
              value={form.baths}
            />
            {/* square footage on its own */}
            <input
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
            <input
              name="imageURL"
              placeholder="Project Thumbnail"
              onChange={changeHandler}
              value={form.imageURL}
            />
            <button type="submit"> Add Project </button>
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
      </Dialog>
    </div>
  );
};

export default AddProject;
