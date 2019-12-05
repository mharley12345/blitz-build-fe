import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "./TaskContext";

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    axiosWithAuth()
      .get(`/projects/tasks/${user_id}`)
      .then(res => {
        console.log("get tasks", res.data.tasks);
        setTasks(res.data.tasks);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addTask = newTask => {
    console.log("new task", newTask);

    const task = {
      due_date: newTask.due_date,
      task_name: newTask.task_name,
      task_description: newTask.task_description,
      project_id: newTask.project_id
    };
    console.log("task const from addTask", task);
    axiosWithAuth()
      .post(`/projects/tasks`, task)
      .then(res => {
        console.log("from addtask in taskProvider", res);
        newTask.id = res.data.taskId[0];
        setTasks([...tasks, newTask]);
      })
      .catch(err => console.log(err));
    console.log(newTask);
  };

  const deleteTask = deletedTask => {
    axiosWithAuth()
      .delete(`/projects/tasks/${deletedTask.id}`)
      .then(res => {
        console.log("from delete task", res);
      })
      .catch(err => console.log("from delete task catch", err));
    const newTasks = tasks.filter(task => {
      return task.id != deletedTask.id;
    });
    setTasks([...newTasks]);
  };

  const editTask = editedTask => {
    console.log(editedTask);
    const dbTask = {
      task_name: editedTask.task_name,
      task_description: editedTask.task_description,
      due_date: editedTask.due_date,
      project_id: editedTask.project_id
    };
    axiosWithAuth()
      .put(`projects/tasks/${editedTask.id}`, dbTask)
      .then(res => {
        console.log("from edit task", editedTask);
        console.log("from edit task", res);
      })
      .catch(err => console.log("from edit task catch", err));

    const newTasks = tasks.map(task => {
      if (task.id === editedTask.id) {
        return editedTask;
      } else {
        return task;
      }
    });
    console.log("from editTask newTasks", newTasks);
    setTasks([...newTasks]);
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}
