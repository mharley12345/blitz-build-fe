import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";

//styles
import styled from "styled-components";
import { XButton } from "../../styles/Tasks/tasks";
import {
  StyledForm,
  StyledLabel,
  StyledTextAreaInput,
  StyledBtn
} from "../../styles/Tasks/taskForm";

export default function DelayForm({
    closeModal,
   // handleFunction,
    task
}) {
    const [form, setForm] = useState({
        reason:""
    })
const changeHandler = e => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleSubmit = e => {
    e.preventDefault();

    console.log("from delayform submit", form);
    //handleFunction(reason);
    setForm({
      reason: ""
    });
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div style={{ width: "100%", textAlign: "right" }}>
        <XButton onClick={closeModal}>X</XButton>
      </div>

      <header style={{ fontFamily: "roboto", padding: "0 0 0 30px" }}>
        <h1 style={{ fontSize: "2.5rem", fontFamily: "roboto" }}>
          What is the reason for the Delay?
        </h1>
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
