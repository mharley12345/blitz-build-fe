import React, { useEffect, useState, useContext } from "react";
import TemplateContext from '../../contexts/templates/TemplateContext'
// import DatePicker from "react-datepicker";

// components
import ErrorMessage from "../../components/global/ErrorMessage";

//styles
//import styled from "styled-components";
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

export default function TaskForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  const [error, setError] = useState({
    error: false,
    error_text: null
  });

  //gets the local storage template_id which will be the template id the user is currently on
  const template_id = localStorage.getItem("template_id");
  const { getTemplateTasks } = useContext(TemplateContext)
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

  //handles submit by setting the input to a variable called newTask and then sends that through the handle function then resets the form to blank as before.
  const handleSubmit = e => {
    e.preventDefault();
    

    const newTask = {
      id: task.id,
      task_name: task.task_name,
      task_description: task.task_description,
      due_date: task.due_date,
      template_id: task.template_id
    };

    console.log("from taskform submit", task);
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
        template_id: template_id
      });
      setError({ error: false, error_text: null });
     
      closeModal();
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

      {error.error && error.error_text ? (
        <ErrorMessage errorMessage={error.error_text} />
      ) : null}
      <StyledBtn>{text}</StyledBtn>
    </StyledForm>
  );
}
