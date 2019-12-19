import React, { useEffect, useState, useContext } from "react";
// import DatePicker from "react-datepicker";

//styles
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import {
  StyledForm,
  StyledFormHeader,
  StyledLabel,
  StyledInput,
  StyledTextAreaInput,
  StyledBtn,
  XButton
} from "../../styles/Form/FormStyles";

//hooks
import { useInput } from "../../customHooks/useInput";

//axios
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

import tasksContext from "../../contexts/tasks/TaskContext";

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

export default function TaskForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  const [templates, setTemplates] = useState([]);

  const template_id = localStorage.getItem("template_id");
  const [task, setTask, handleChanges] = useInput({
    task_name: "",
    task_description: "",
    due_date: "",
    template_id: template_id
  });

  useEffect(() => {
    if (editFields) {
      console.log("editFields", editFields);
      setTask(editFields);
    }
  }, []);

  //sets the fields if the editFields prop is passed down
  //else they are empty

  const handleSubmit = e => {
    e.preventDefault();

    //asigns the project id to the new task
    const newTask = {
      id: task.id,
      task_name: task.task_name,
      task_description: task.task_description,
      due_date: task.due_date,
      template_id: task.template_id
    };

    console.log("from taskform submit", task);
    handleFunction(newTask);
    setTask({
      task_name: "",
      task_description: "",
      due_date: "",
      template_id: template_id
    });
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <h1
          style={{
            fontSize: "2rem",
            margin: 0
          }}
        >
          {text}
        </h1>
        <XButton onClick={closeModal}> Close X</XButton>
      </StyledFormHeader>

      <StyledLabel>Task Name</StyledLabel>
      <StyledInput
        type="text"
        name="task_name"
        value={task.task_name}
        onChange={handleChanges}
      />
      <StyledLabel>Due Date</StyledLabel>
      <StyledInput
        id="date"
        label=""
        type="date"
        name="due_date"
        onChange={handleChanges}
        value={task.due_date}
        InputLabelProps={{
          shrink: true
        }}
      />
      <StyledLabel>Task Decription</StyledLabel>
      <StyledTextAreaInput
        rows="8"
        type="text"
        name="task_description"
        value={task.task_description}
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
