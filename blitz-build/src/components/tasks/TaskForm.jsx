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

export default function TaskForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  const [projects, setProjects] = useState([]);
  const [task, setTask, handleChanges] = useInput({
    task_name: "",
    task_description: "",
    due_date: "",
    project_name: ""
  });

  useEffect(() => {
 
    axiosWithAuth()
      .post(`/projects`)
      .then(res => {
     
        setProjects(res.data);
      })
      .catch(err => console.log(err));
    if (editFields) {
      setTask(editFields);
    }
  },);

  //sets the fields if the editFields prop is passed down
  //else they are empty

  const handleSubmit = e => {
    e.preventDefault();

    //finds the the project that the user picked
    const chosenProject = projects.filter(project => {
      return project.project_name === task.project_name;
    });
    // console.log("from handleSubmit in TaskForm", chosenProject);

    //asigns the project id to the new task
    const newTask = {
      project_name: chosenProject[0].project_name,
      id: task.id,
      task_name: task.task_name,
      task_description: task.task_description,
      due_date: task.due_date,
      project_id: chosenProject[0].id
    };
    console.log("from taskform submit", task);
    handleFunction(newTask);
    setTask({
      task_name: "",
      task_description: "",
      due_date: "",
      project_name: ""
    });
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div style={{ width: "100%", textAlign: "right" }}>
        <XButton onClick={closeModal}>X</XButton>
      </div>

      <header>
        <h1 style={{ fontSize: "3rem", fontFamily: "roboto" }}>{text}</h1>
      </header>

      <StyledLabel>Task Name</StyledLabel>
      <StyledInput
        type="text"
        name="task_name"
        value={task.task_name}
        onChange={handleChanges}
      />

      <StyledLabel>Task Decription</StyledLabel>
      <StyledInput
        type="text"
        name="task_description"
        value={task.task_description}
        onChange={handleChanges}
      />

      {/* <StyledLabel>Due Date</StyledLabel>
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} /> */}

      <TextField
        style={{
          width: "77%",
          marginTop: "20px"
        }}
        id="date"
        label="Due Date"
        type="date"
        name="due_date"
        onChange={handleChanges}
        value={task.due_date}
        InputLabelProps={{
          shrink: true
        }}
      />

      {/* <StyledLabel>Due Date</StyledLabel>
      <input
        type="text"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChanges}
      /> */}

      <StyledLabel>Assign Project</StyledLabel>
      <StyledSelect
        name="project_name"
        onChange={handleChanges}
        value={task.project_name}
      >
        <option>Choose Poject</option>

        {projects.map(project => {
          return (
            <option key={project.id} value={project.project_name}>
              {project.project_name}
            </option>
          );
        })}
      </StyledSelect>
      <StyledBtn>Save</StyledBtn>
    </StyledForm>
  );
}
