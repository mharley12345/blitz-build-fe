import React, { useState } from "react";

//components
import TaskNav from "../../components/tasks/TaskNav/TaskNav";
import Task from "../../components/tasks/Task";

//styles
import styled from "styled-components";

const StyledTasks = styled.div`
  margin-left: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTask = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export default function Tasks() {
	const [tasks, setTasks] = useState([])

	const addTask = (newTask) => {
		setTasks([...tasks, newTask])
	}

	const deleteTask = (taskId) => {
		
	}
	
	const editTask = (taskId) => {
		
	}

	return (
    <StyledTasks>
      <TaskNav addTask={addTask}/>
      {tasks.map(task => {
        return (
          <StyledTask>
            <Task editTask={editTask} deleteTask={deleteTask}/>
          </StyledTask>
        );
      })}
    </StyledTasks>
  );
}
