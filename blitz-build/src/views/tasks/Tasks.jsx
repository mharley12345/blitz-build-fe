import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "../../contexts/TaskContext";

//components
import TaskNav from "../../components/tasks/TaskNav/TaskNav";
import Task from "../../components/dashboard/Task"
import EditTask from "../../components/tasks/EditTask"
import DeleteTask from "../../components/tasks/DeleteTask"

//styles
import styled from "styled-components";

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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    axiosWithAuth()
    .get(`/${uid}/tasks`)
      .then(res => {
        console.log(res)

        // //tasks unique task id keys and turns them into an array
        // const tasksId = Object.keys(res.data)
        // console.log('task ids', tasksId)

        // //takes the object of objects and turns it into an array of objects
        const tasksArr = Object.values(res.data);

        // //converts unique task key into a id key value in that object
        // for(let i = 0; i < tasksArr.length; i++){
        //   tasksArr[i].id = tasksId[i]
        // }
        setTasks(tasksArr)
        // console.log(tasksArr)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  const addTask = newTask => {
    const uid = localStorage.getItem("uid");
    console.log(`/${uid}/projects/${newTask.projectID}/tasks`)
    axiosWithAuth()
    .post(`/${uid}/projects/${newTask.projectID}/tasks`, newTask)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

    console.log(newTask);
    newTask.id = Date.now();
    setTasks([...tasks, newTask]);
  };

  const deleteTask = deletedTask => {
    const newTasks = tasks.filter(task => {
      return task.name != deletedTask.name;
    });
    setTasks([...newTasks]);
  };

  const editTask = editedTask => {
    const newTasks = tasks.map(task => {
      if (task.id === editedTask.id) {
        return editedTask;
      } else {
        return task;
      }
    });
    setTasks([...newTasks]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
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
    </TaskContext.Provider>
  );
}
