import React, { useContext, useEffect } from "react";
// import styled from "styled-components";

//components
import TaskStatus from "./TaskStatus";
import EditTask from "./EditTask"
import DeleteTask from './DeleteTask'
import TaskContext from '../../contexts/tasks/TaskContext'
import searchTermContext from '../../contexts/searching/searchTerm'

export default function Task({ task }) {
  const {getTasks, tasks, setTasks, TaskModalStatus, setTaskModalStatus, getProjectTasks} = useContext(TaskContext);
  const { searchTerm } = useContext(searchTermContext)
  useEffect(() => {
    if(searchTerm.length === 0) {
      setResults([])
  }
   
   
  },[])

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
