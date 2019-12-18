import React, { useEffect, useState } from "react";

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

export default function DelayForm({
  closeModal,
  handleFunction,
  task,
  editFields,
  text
}) {
  //console.log("task from delayForm", task,editFields)
  const [form, setForm] = useState({
    reason: ""
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
  },[]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    
    e.preventDefault();
    if (editFields) {
      handleFunction(form, form.id);
    } else {
      handleFunction(form, task.project_name, task.task_name);
    }
    setForm({
      reason: ""
    });
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader style={{marginBottom:"32px"}}>
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

      <StyledBtn>Publish to delay log</StyledBtn>
    </StyledForm>
  );
}
