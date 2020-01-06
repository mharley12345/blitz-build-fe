import React, { useEffect, useState, useContext } from "react";

// components
import ErrorMessage from "../../components/global/ErrorMessage";

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

  const [error, setError] = useState({
    error: false,
    error_text: null
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

    // check if user assigns a name to the task
    if (form.template_name == "") {
      setError({
        error: true,
        error_text: "Please assign a name to this template!"
      });
    } else {
      if (editFields) {
        // submit form and id to editTemplate function
        handleFunction(form, form.id);
      } else {
        // submit form to addTemplate function
        handleFunction(form);
      }
      //reset form and error to initial state
      setForm({
        template_name: ""
      });
      setError({ error: false, error_text: null });

      closeModal(); 
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{text}</h1>
        <XButton onClick={closeModal}>close X</XButton>
      </StyledFormHeader>

      <StyledLabel style={{ marginTop: "30px" }}>Template Name</StyledLabel>
      <StyledInput
        type="text"
        name="template_name"
        value={form.template_name}
        onChange={formChangeHandler}
      />
      {error.error && error.error_text ? (
        <ErrorMessage errorMessage={error.error_text} />
      ) : null}
      <StyledBtn >{text}</StyledBtn>
    </StyledForm>
  );
}
