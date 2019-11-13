import React, { useState } from "react";
import DatePicker from "react-datepicker";

//hooks
import { useInput } from "../../customHooks/useInput";


export default function TaskForm({ closeModal, handleFunction, editFields }) {
  const [dueDate, setDueDate] = useState(new Date());

  let initialState;

  if (editFields) {
    initialState = editFields;
  } else {
    initialState = {
      taskName: "",
      taskDescription: "",
      dueDate: "",
      project: ""
    };
  }

  const [task, setTask, handleChanges] = useInput(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(task);
    handleFunction(task);
    setTask(initialState);
    closeModal();
  };
  return (
    <form style={{ height: "500px", width: "800px" }}>
      <button onClick={closeModal}>x</button>

      <label>Task Name</label>
      <input
        type="text"
        name="taskName"
        value={task.taskName}
        onChange={handleChanges}
      />

      <label>Task Decription</label>
      <input
        type="text"
        name="taskDescription"
        value={task.taskDescription}
        onChange={handleChanges}
      />

      <label>Due Date</label>
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} />

      <label>Assign Project</label>
      <input
        type="text"
        name="project"
        value={task.project}
        onChange={handleChanges}
      />

      <button onClick={closeModal}>cancel</button>
      <button onclick={handleSubmit}>add task</button>
    </form>
  );
}
