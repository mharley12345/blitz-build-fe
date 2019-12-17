import React, { useEffect, useState, useContext } from "react";
// using zip_code to find latitude and longitude
import zipcodes from "zipcodes";
import TemplateContext from "../../contexts/templates/TemplateContext";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

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
import { StyledSelect } from "../../styles/Tasks/taskForm";

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
  const [templateForm, setTemplateForm] = useState({
    preBuiltTemplate: false,
    template_id:null
  });
 
  
  const { templates } = useContext(TemplateContext);

  
  const makeTrue = () => {
    setTemplateForm({
      ...templateForm,
     preBuiltTemplate: !templateForm.preBuiltTemplate
    });
  }

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
const changeTampleIdHandler = e => {
  setTemplateForm({
    ...templateForm,
    [e.target.name]: e.target.value
  });
};
  const handleSubmit = e => {
    e.preventDefault();
    const gps = zipcodes.lookup(form.zip_code);

    form.latitude = gps.latitude;
    form.longitude = gps.longitude;
    console.log("template_id", templateForm.template_id)
    console.log("90 Days", templateForm.preBuiltTemplate);
    

    if (editFields) {
      handleFunction(form, form.id, templateForm);
    } else {
      handleFunction(form, templateForm);
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

  const addCustomTemplate = e => {
    e.preventDefault();
    const templateID = parseInt(form.template_id);
    const project_id = editFields.id;
    console.log("project_id", project_id);
    console.log("templateID", templateID);
    axiosWithAuth()
      .post(`/templates/addTasks/${project_id}`, { template_id: templateID })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const add90Day = () => {
   if (form.preBuiltTemplate === true) {
      const project_id = editFields.id;
      console.log(project_id);
      axiosWithAuth()
        .post("/90_day", { project_id })
        .then(res => {
          console.log("90_day post", res);
        })
        .catch(err => {
          console.log(err);
        });
    }
}
  
   
 

  // async function submitForm() {
  //   const originalhandleSubmit = await handleSubmit();
  //   console.log("async", originalhandleSubmit);
  //   const customTemplate = await addCustomTemplate();
  //   console.log("async", customTemplate);
  // }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{text}</h1>
        <XButton onClick={closeModal}>close X</XButton>
      </StyledFormHeader>
      <div style={{ marginBottom: "16px" }}>
        {" "}
        <span style={{ marginTop: "5px", color: "orange", cursor: "pointer" }}>
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
        <div style={{ width: "60%" }}>
          <StyledLabel>Assign Custom Template</StyledLabel>
          <StyledSelect
            type="number"
            name="template_id"
            value={templateForm.template_id}
            onChange={changeTampleIdHandler}
          >
            <option>Choose Template</option>

            {templates.map(template => {
              return (
                <option key={template.id} value={template.template_id}>
                  {template.id}
                </option>
              );
            })}
          </StyledSelect>
        </div>
        <div style={{ width: "33%" }}>
          <StyledLabel>90 Day Template</StyledLabel>
          <StyledInput
            id="check"
            type="checkbox"
            name="preBuiltTemplate"
            onClick={makeTrue}
          />
        </div>
      </div>

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
