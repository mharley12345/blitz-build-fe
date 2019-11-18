import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

//hooks
import { useInput } from "../../customHooks/useInput";

//axios
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

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

export default function TaskForm({
  closeModal,
  handleFunction,
  editFields,
  text
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    axiosWithAuth()
      .get(`/${uid}/projects`)
      .then(res => {
        const projectArray = Object.values(res.data.projects);
        setProjects(projectArray);
        console.log(projects);
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
      projectID: ""
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
        name="task_name"
        value={task.task_name}
        onChange={handleChanges}
      />

      <label>Task Decription</label>
      <input
        type="text"
        name="task_description"
        value={task.task_description}
        onChange={handleChanges}
      />

      {/* <label>Due Date</label>
      <DatePicker selected={dueDate} onChange={date => setDueDate(date)} /> */}

      <TextField
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

      {/* <label>Due Date</label>
      <input
        type="text"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChanges}
      /> */}

      <label>Assign Project</label>
      <select name="projectID" onChange={handleChanges} value={task.projectID}>
        <option>Choose Poject</option>

        {projects.map(project => {
          return <option value={project.projectID}>{project.projectID}</option>;
        })}
      </select>

      <button onClick={closeModal}>cancel</button>
      <button>{text}</button>
    </form>
  );
}
