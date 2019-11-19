import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";

//styles
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { XButton } from "../../styles/tasks";

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 4px;
  width: 75%;
`;

const StyledInput = styled.input`
  width: 75%;
  margin: 0;
  font-size: 14px;
  padding: 6px 8px;
  background: #fbfaf9;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "black")};
  border-radius: 3px;
`;

const StyledSelect = styled.select`
  width: 77%;
  font-size: 14px;
  padding: 6px 8px;
  text-decoration: none;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-color: ${props => (props.error ? "red" : "black")};
  margin: 0;
`;

const StyledBtn = styled.button`
  margin-top: 73px;
  padding: 10px 50px;
  border-radius: 3px;
  border: 1px solid #8a827d;
  background: #da552f;
  color: white;
`;

export default function TaskForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // const uid = localStorage.getItem("uid");
    axiosWithAuth()
      .get(`/projects`)
      .then(res => {
        // console.log('from get projects in TaskForm', res);
        // const projectArray = Object.values(res.data);
        console.log("from get projects in TaskForm", res);
        setProjects(res.data);
        // console.log('from get projects in TaskForm', projects);
      })
      .catch(err => console.log(err));
  }, []);

  let initialState;

  //sets the fields if the editFields prop is passed down
  //else they are empty
  if (editFields) {
    initialState = editFields;
  } else {
    initialState = {
      task_name: "",
      task_description: "",
      due_date: "",
      project_name: ""
    };
  }

  const [task, setTask, handleChanges] = useInput(initialState);

  const handleSubmit = e => {
    e.preventDefault();

    //finds the the project that the user picked
    const chosenProject = projects.filter(project => {
      return project.project_name === task.project_name;
    });
    console.log("from handleSubmit in addTask", chosenProject);

    //asigns the project id to the new task
    task.project_id = chosenProject[0].id;

    handleFunction(task);
    setTask(initialState);
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
            <option value={project.project_name}>{project.project_name}</option>
          );
        })}
      </StyledSelect>
      <StyledBtn>Save</StyledBtn>
    </StyledForm>
  );
}
