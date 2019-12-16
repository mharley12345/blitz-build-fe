import React, { useEffect, useState } from "react";
// using zip_code to find latitude and longitude
import zipcodes from "zipcodes";

//styles
//import styled from "styled-components";

import {
  StyledForm,
  StyledFormHeader,
  StyledLabel,
  StyledInput,
  StyledBtn,
  XButton
} from "../../styles/Form/FormStyles";
import { orange } from "@material-ui/core/colors";

export default function ProjectForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  //console.log("task from delayForm", task,editFields)
  const [form, setForm] = useState({
    project_name: "",
    beds: null,
    baths: null,
    city: "",
    square_ft: null,
    state: "",
    street_address: "",
    zip_code: null
    
  });
  useEffect(() => {
    if (editFields) {
      console.log("editFields", editFields);
      setForm(editFields);
      //console.log(form);
    } else {
      setForm(form);
      console.log(form);
    }
  }, []);

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
      e.preventDefault();
      const gps = zipcodes.lookup(form.zip_code);

      form.latitude = gps.latitude;
      form.longitude = gps.longitude;
    if (editFields) {
      handleFunction(form, form.id);
    } else {
        
      handleFunction(form);
    }
    setForm({
    project_name: "",
    beds: null,
    baths: null,
    city: "",
    square_ft: null,
    state: "",
    street_address: "",
    zip_code: null
    });
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{text}</h1>
        <XButton onClick={closeModal}>close X</XButton>
      </StyledFormHeader>
      <div style={{ marginBottom: "16px" }}>
        {" "}
        <span style={{ color: "orange", cursor: "pointer" }}>
          Upload a Project Image
        </span>
        <span> (optional)</span>
      </div>

      <StyledLabel>Project Name</StyledLabel>
      <StyledInput
        type="text"
        name="project_name"
        maxlength="25"
        value={form.project_name}
        onChange={changeHandler}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "30%" }}>
          <StyledLabel>Beds</StyledLabel>
          <StyledInput
            type="number"
            name="beds"
            value={form.beds}
            onChange={changeHandler}
          />
        </div>
        <div style={{ width: "30%" }}>
          <StyledLabel>Baths</StyledLabel>
          <StyledInput
            type="number"
            name="baths"
            value={form.baths}
            onChange={changeHandler}
          />
        </div>
        <div style={{ width: "30%" }}>
          <StyledLabel>Sq. Ft.</StyledLabel>
          <StyledInput
            type="number"
            name="square_ft"
            value={form.square_ft}
            onChange={changeHandler}
          />
        </div>
      </div>
      <StyledLabel>Address</StyledLabel>
      <StyledInput
        type="text"
        name="street_address"
        value={form.street_address}
        onChange={changeHandler}
      />
      <StyledLabel>City</StyledLabel>
      <StyledInput
        type="text"
        name="city"
        value={form.city}
        onChange={changeHandler}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
          <StyledLabel>State</StyledLabel>
          <StyledInput
            type="text"
            name="state"
            value={form.state}
            onChange={changeHandler}
          />
        </div>
        <div style={{ width: "45%" }}>
          <StyledLabel>ZIP Code</StyledLabel>
          <StyledInput
            type="number"
            name="zip_code"
            value={form.zip_code}
            onChange={changeHandler}
          />
        </div>
      </div>
      <StyledBtn>Save</StyledBtn>
    </StyledForm>
  );
}
