import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";

//styles
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { XButton } from "../../styles/Tasks/tasks";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledBtn
} from "../../styles/Tasks/taskForm";

//hooks
import { useInput } from "../../customHooks/useInput";

//axios
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "75%"
  },
  textField: {
    width: "75%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function EditTemplateForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
 
  const [templates, setTemplates] = useState([])
  const [template, setTemplate, handleChanges] = useInput({
    template_name: ''
  });

  useEffect(() => {
   
   
    if (editFields) {
      console.log('editFields', editFields)
      setTemplate(editFields);
      console.log('project_name', )
    }
  },[]);

  //sets the fields if the editFields prop is passed down
  //else they are empty

  const handleSubmit = e => {
    e.preventDefault();
    const newTemplate = {
       template_name: template.template_name,
       id: template.id,
      };
    handleFunction(newTemplate, newTemplate);
    setTemplate({
      template_name:''
    });
    closeModal();
  }
    //finds the the project that the user picked
   
    // console.log("from handleSubmit in TaskForm", chosenProject);

    //asigns the project id to the new task
    
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div style={{ width: "100%", textAlign: "right" }}>
        <XButton onClick={closeModal}>X</XButton>
      </div>

      <header>
        <h1 style={{ fontSize: "3rem", fontFamily: "roboto" }}>{text}</h1>
      </header>

      <StyledLabel>Template Name</StyledLabel>
      <StyledInput
        type="text"
        name="template_name"
        value={template.template_name}
        onChange={handleChanges}
      />

      
      {/* <StyledLabel>Due Date</StyledLabel>
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} /> */}

     

      {/* <StyledLabel>Due Date</StyledLabel>
      <input
        type="text"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChanges}
      /> */}

       
     
      <StyledBtn>Save</StyledBtn>
    </StyledForm>
  );
}