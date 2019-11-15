import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

//hooks
import { useInput } from "../../customHooks/useInput";

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


export default function TaskForm({ closeModal, handleFunction, editFields, text }) {
  // const [dueDate, setDueDate] = useState(new Date());

  let initialState;

  if (editFields) {
    initialState = editFields;
  } else {
    initialState = {
      name: "",
      description: "",
      dueDate: "",
      project: ""
    };
  }

  const [task, setTask, handleChanges] = useInput(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    handleFunction(task);
    setTask(initialState);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={closeModal}>x</button>

      <label>Task Name</label>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChanges}
      />

      <label>Task Decription</label>
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChanges}
      />

      {/* <label>Due Date</label>
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} /> */}

      <TextField
        id="date"
        label="Due Date"
        type="date"
        defaultValue="2017-05-24"
        name='dueDate'
        onChange={handleChanges}
        value={task.dueDate}
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
        name="project"
        value={task.project}
        onChange={handleChanges}
      />

      <button onClick={closeModal}>cancel</button>
      <button>{text}</button>
    </form>
  );
}
