import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";

//styles
//import styled from "styled-components";
import { XButton } from "../../styles/Form/FormStyles";
import {
  StyledForm,
  StyledLabel,
  StyledTextAreaInput,
  StyledBtn
} from "../../styles/Tasks/taskForm";

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
      <div style={{ width: "100%", textAlign: "right" }}>
        <XButton onClick={closeModal}>close X</XButton>
      </div>

      <header style={{ fontFamily: "roboto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontFamily: "roboto" }}>{text}</h1>
        <p style={{ margin: "8px 0 38px 0" }}>
          Please document all delays to publish and save in the Delay Log.
        </p>
      </header>

      <StyledTextAreaInput
        rows="8"
        type="text"
        name="reason"
        value={form.reason}
        onChange={changeHandler}
      />

      <StyledBtn>Save</StyledBtn>
    </StyledForm>
  );
}
