import React, { useEffect, useState } from "react";

// components
import ErrorMessage from "../../components/global/ErrorMessage";

//styles
import {
  StyledForm,
  StyledFormHeader,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledTextAreaInput,
  StyledBtn,
  XButton
} from "../../styles/Form/FormStyles";

//hooks
import { useInput } from "../../customHooks/useInput";

//axios
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

export default function TaskForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  //local state
  const [error, setError] = useState({
    error: false,
    error_text: null
  });

  const [projects, setProjects] = useState([]);
  const [task, setTask, handleChanges] = useInput({
    task_name: "",
    task_description: "",
    due_date: "",
    project_name: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/projects`)
      .then(res => {
        console.log("from taskForm", res);
        setProjects(res.data);
      })
      .catch(err => console.log(err));
    if (editFields) {
      console.log("editFields", editFields);
      setTask(editFields);
      console.log("project_name");
    }
  }, []);

  //sets the fields if the editFields prop is passed down
  //else they are empty

  const handleSubmit = e => {
    e.preventDefault();

    // check if user asigns a project to the task
    if (task.project_name == "") {
      setError({
        error: true,
        error_text: "Please assign a project to this task!"
      });
    } else {
      //finds the the project that the user picked
      const chosenProject = projects.filter(project => {
        return project.project_name === task.project_name;
      });


      //asigns the project id to the new task
      const newTask = {
        project_name: chosenProject[0].project_name,
        id: task.id,
        task_name: task.task_name,
        task_description: task.task_description,
        due_date: task.due_date,
        project_id: chosenProject[0].id,
        isComplete: task.isComplete
        
      };
      console.log("from taskform submit", task);

      // check if user assigns a name to the task
      if (newTask.task_name == "") {
        setError({
          error: true,
          error_text: "Please assign a name to this task!"
        });
      } else {
        // submit newTask to addTask or editTask funciton
        handleFunction(newTask);

        //reset task form and error to initial state
        setTask({
          task_name: "",
          task_description: "",
          due_date: "",
          project_name: ""
        });
        setError({ error: false, error_text: null });
        closeModal();
      }
    }
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "4px"
        }}
      >
        <div style={{ width: "62%" }}>
          <StyledLabel>Assign Project</StyledLabel>
          <StyledSelect
            style={{
              background: "#E9E9E9",
              border: "none",
              paddingLeft: "10px"
            }}
            name="project_name"
            onChange={handleChanges}
            value={task.project_name}
          >
            <option>Choose Project</option>

            {projects.map(project => {
              return (
                <option key={project.id} value={project.project_name}>
                  {project.project_name}
                </option>
              );
            })}
          </StyledSelect>
        </div>
        <div style={{ width: "35%" }}>
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
        </div>
      </div>
      <StyledLabel>Task Decription</StyledLabel>
      <StyledTextAreaInput
        rows="8"
        type="text"
        name="task_description"
        value={task.task_description}
        onChange={handleChanges}
      />
      {error.error && error.error_text ? (
        <ErrorMessage errorMessage={error.error_text} />
      ) : null}
      <StyledBtn>{text}</StyledBtn>
    </StyledForm>
  );
}
