import React, { useContext } from "react";
import styled from "styled-components";

//components
import TaskStatus from "./TaskStatus";
import EditTask from "./EditTask"
import DeleteTask from './DeleteTask'

export default function Task({ task }) {
  return (
    <>
      <div>
        <h1 style={{ margin: 0 }}> {task.task_name}</h1>
        <p style={{ margin: 0 }}>{task.task_description}</p>
      </div>
        <TaskStatus status={"today"} />
      <EditTask task={ task }/>
			<DeleteTask task={ task }/>
    </>
  );
}
