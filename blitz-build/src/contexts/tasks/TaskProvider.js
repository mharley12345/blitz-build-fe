import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "./TaskContext";

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([{
        task_name: "",
        task_description: "",
        due_date: "",
        projectID: ""
      }]);
    
      useEffect(() => {
        const uid = localStorage.getItem("uid");
        axiosWithAuth()
        .get(`/${uid}/tasks`)
          .then(res => {
            console.log(res)
    
            // //takes unique task id keys and turns them into an array
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
        // axiosWithAuth()
        // .post(`/${uid}/projects/${newTask.projectID}/tasks`, newTask)
        //   .then(res => {
        //     console.log(res)
        //   })
        //   .catch(err => console.log(err))
    
        console.log(newTask);
        newTask.id = Date.now();
        setTasks([...tasks, newTask]);
      };
    
      const deleteTask = deletedTask => {
        const newTasks = tasks.filter(task => {
          return task.id != deletedTask.id;
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
          {children}
        </TaskContext.Provider>
    )
}
