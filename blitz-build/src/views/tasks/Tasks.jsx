import React, { useState } from "react";
import axiosWithAuth from "../../components/auth/axiosWithAuth"
import  TaskContext  from "../../contexts/TaskContext"


//components
import TaskNav from "../../components/tasks/TaskNav/TaskNav";
import Task from "../../components/tasks/Task";

//styles
import styled from "styled-components";
let uid = localStorage.getItem('uid')
let projectID = localStorage.getItem('projectID')
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
    axiosWithAuth().post(`http://localhost4000/api/auth/${uid}/projects/${projectID}/tasks`,newTask)
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
