import React, { useContext } from "react";
// import styled from "styled-components";

//components
import TaskStatus from "./TaskStatus";
import EditTask from "./EditTask"
import DeleteTask from './DeleteTask'

export default function Task({ task }) {
  return (
    <>
      <div>
        <h2 style={{ margin: 0 }}>{task.task_name}</h2>
        <p style={{ margin: 0 }}>{task.task_description}</p>
      </div>
      <TaskStatus status={"today"} />
      <EditTask task={ task }/>
			<DeleteTask task={ task }/>
    </>
  );
}
