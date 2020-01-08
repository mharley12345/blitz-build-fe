import React, { useEffect, useState } from "react";

// components
import ErrorMessage from "../../components/global/ErrorMessage";

//styles
//import styled from "styled-components";
import {
  StyledForm,
  StyledFormHeader,
  StyledLabel,
  StyledTextAreaInput,
  StyledBtn,
  XButton
} from "../../styles/Form/FormStyles";

//importing function, function, state, state, and specific text
export default function DelayForm({
  closeModal,
  handleFunction,
  task,
  editFields,
  text
}) {
  //sets initial state of form
  const [form, setForm] = useState({
    reason: ""
  });
  const [error, setError] = useState({
    error: false,
    error_text: null
  });
  useEffect(() => {
    if (editFields) {
      //console.log("editFields", editFields);
      setForm(editFields.delayLog);
      //console.log(form);
    } else {
      setForm({ ...form, project_id: task.project_id, task_id: task.id });
      //console.log(form);
    }
  }, []);

  //handles changes in form
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //handles the submittion of the form
  const handleSubmit = e => {
    e.preventDefault();
    // check if user assigns a name to the delay_log
    if (form.reason == "") {
      setError({
        error: true,
        error_text: "Please add delay reason!"
      });
    } else {
      if (editFields) {
        handleFunction(form, form.id);
      } else {
        handleFunction(form, task.project_name, task.task_name);
      }
      setForm({
        reason: ""
      });
      setError({ error: false, error_text: null });
      closeModal();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{text}</h1>
        <XButton onClick={closeModal}>close X</XButton>
      </StyledFormHeader>
      <StyledLabel>Reason for delay</StyledLabel>
      <StyledTextAreaInput
        rows="8"
        type="text"
        name="reason"
        value={form.reason}
        onChange={changeHandler}
      />
      {error.error && error.error_text ? (
        <ErrorMessage errorMessage={error.error_text} />
      ) : null}
      <StyledBtn>Publish to delay log</StyledBtn>
    </StyledForm>
  );
}
