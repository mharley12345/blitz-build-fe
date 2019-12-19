import React, { useEffect, useState, useContext } from "react";


// contexts
import TemplateContext from "../../contexts/templates/TemplateContext";
import TaskContext from "../../contexts/tasks/TaskContext";


// styles
//import styled from "styled-components";
import {
  StyledForm,
  StyledFormHeader,
  StyledLabel,
  StyledInput,
  StyledBtn,
  XButton
} from "../../styles/Form/FormStyles";

//importing functions and objects from context
export default function TemplateForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  //setting initial local state for template form
  const [form, setForm] = useState({
    template_name: ""
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

 


  //change handler for template form
  const formChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  //handles submit for template form
  const handleSubmit = e => {
    e.preventDefault();

    if (editFields) {
      handleFunction(form, form.id);
    } else {
      handleFunction(form);
    }
    setForm({
      template_name: ""
    });

    closeModal();
  };

  
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{text}</h1>
        <XButton onClick={closeModal}>close X</XButton>
      </StyledFormHeader>

      <StyledLabel style={{marginTop:"30px"}}>Template Name</StyledLabel>
      <StyledInput
        type="text"
        name="template_name"
        value={form.template_name}
        onChange={formChangeHandler}
      />

      <StyledBtn>{text}</StyledBtn>
    </StyledForm>
  );
}
