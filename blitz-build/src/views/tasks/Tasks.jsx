import React, { useState } from "react";

import  TaskContext  from "../../contexts/TaskContext"


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
  align-tasks: center;
`;

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  console.log(tasks)

	const addTask = (newTask) => {
    console.log(newTask)
    newTask.id = Date.now() 
		setTasks([...tasks, newTask])
	}

	const deleteTask = (deletedTask) => {
		const newTasks = tasks.filter(task => {
			return task.name != deletedTask.name
		})
		setTasks([...newTasks ])
	}
	
	const editTask = (editedTask) => {
    const newTasks = tasks.map(task => {
      if(task.id === editedTask.id){
        return editedTask
      } else {
        return task
      }
		})
		setTasks([...newTasks ])
	}

	return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      <StyledTasks>
        <TaskNav addTask={addTask}/>
        {tasks.map(task => {
          return (
            <StyledTask>
              <Task task={task}/>
            </StyledTask>
          );
        })}
      </StyledTasks>
    </TaskContext.Provider>
  );
}
