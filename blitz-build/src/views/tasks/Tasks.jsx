import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "../../contexts/tasks/TaskContext";

//components
import TaskNav from "../../components/tasks/TaskNav/TaskNav";
import Task from "../../components/dashboard/Task"
import EditTask from "../../components/tasks/EditTask"
import DeleteTask from "../../components/tasks/DeleteTask"

//styles
import styled from "styled-components";
import taskContext from "../../contexts/tasks/TaskContext";

const StyledTasks = styled.div`
  margin-left: 200px;
  width: 750px;
  display: flex;
  flex-direction: column;
`;

const StyledTask = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-tasks: center;
`;

export default function Tasks() {
  const {addTask, tasks}  = useContext(taskContext)
  
  return (
      <StyledTasks>
        <TaskNav addTask={addTask} />
        {tasks.map(task => {
          return (
            <>
              <Task content={task} />
              <EditTask task={ task }/>
              <DeleteTask task={ task }/>
            </>
          );
        })}
      </StyledTasks>
  );
}
