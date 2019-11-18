import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axiosWithAuth from '../auth/axiosWithAuth'
//hooks
import { useInput } from "../../customHooks/useInput";
let uid = localStorage.getItem("uid")
let project_id = localStorage.getItem("project_id")
console.log(project_id)
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));


export default function TaskForm({ closeModal, handleFunction, editFields, text ,task_name,task_description,due_date,projectID}) {
  // const [dueDate, setDueDate] = useState(new Date());

  let initialState;

  if (editFields) {
    initialState = editFields;
  } else {
    initialState = {
      task_name: "",
      task_description: "",
      due_date: "",
      projectID: ""
    };
  }

  const [task, setTask, handleChanges] = useInput(initialState);

  const handleSubmit = e => {
    e.preventDefault();
     console.log(task)
    // handleFunction(task);
    axiosWithAuth().post(`http://localhost:4000/api/auth/${uid}/projects/${project_id}/tasks`,task)
    .then(res =>{console.log(res)})
    setTask(initialState);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={closeModal}>x</button>

      <label>Task Name</label>
      <input
        type="text"
        name="task_name"
        value={task_name}
        onChange={handleChanges}
      />

      <label>Task Decription</label>
      <input
        type="text"
        name="task_description"
        value={task_description}
        onChange={handleChanges}
      />

      {/* <label>Due Date</label>
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} /> */}

      <TextField
        id="date"
        label="Due Date"
        type="date"
        defaultValue="2017-05-24"
        name='due_date'
        onChange={handleChanges}
        value={due_date}
        InputLabelProps={{
          shrink: true
        }}
      />

      {/* <label>Due Date</label>
      <input
        type="text"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChanges}
      /> */}

      <label>Assign Project</label>
      <input
        type="text"
        name="projectID"
        value={projectID}
        onChange={handleChanges}
      />

      <button onClick={closeModal}>cancel</button>
      <button>{text}</button>
    </form>
  );
}
