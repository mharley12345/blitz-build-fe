import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function FormDialog() {
  const [form, setForm] = useState({
    projectID: "",
    project_name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    status: "",
    beds: 0,
    baths: 0,
    square_ft: 0,
    Assign_Template: undefined,
    Project_Thumbnail: ""
  });
  const [open, setOpen] = React.useState(false);

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
    const uid = localStorage.getItem("uid");

    axios
      .post(
        `https://api-blitz-build-dev.herokuapp.com/api/auth/${uid}/projects`,
        form
      )
      .then(res => {
        console.log(res);
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
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <form onSubmit={submitForm}>
            <input
              name="Project_Name"
              placeholder="Project Name"
              onChange={changeHandler}
              value={form.Project_Name}
            />
            <input
              name="Project_Address"
              placeholder="Project Address"
              onChange={changeHandler}
              value={form.Project_Address}
            />
            <input
              name="Beds"
              placeholder="Beds"
              onChange={changeHandler}
              value={form.Beds}
            />
            <input
              name="Baths"
              placeholder="Baths"
              onChange={changeHandler}
              value={form.Baths}
            />
            <input
              name="Square_Footage"
              placeholder="Square Footage"
              onChange={changeHandler}
              value={form.Square_Footage}
            />
            <input
              name="Assign_Template"
              placeholder="Assign Template"
              onChange={changeHandler}
              value={form.Assign_Template}
            />
            <input
              name="Project_Thumbnail"
              placeholder="Project Thumbnail"
              onChange={changeHandler}
              value={form.Project_Thumbnail}
            />
            <Button type="submit" color="primary">
              Add Project
            </Button>
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
}
