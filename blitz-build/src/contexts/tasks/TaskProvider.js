import React, { useState, useEffect, useContext } from "react";
import TemplateContext from '../templates/TemplateContext'
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "./TaskContext";

/*
TaskProvider isa component that provides the task 
context to all the children components it is wrapped around  
*/

export default function TaskProvider({ children }) {
  
  //imports templateContext
  const { getTemplateTasks } = useContext(TemplateContext)

  //state
  const [tasks, setTasks] = useState([]);
  const [TaskModalStatus, setTaskModalStatus] = useState(false);
  const [projectTasks, setProjectTasks] = useState([]);

  //gets all the tasks on app load
  useEffect(() => {
    getTasks();
    
  }, []);

  //gets all the tasks by user id
  const getTasks = () => {
    const user_id = localStorage.getItem("user_id");

    axiosWithAuth()
      .get(`/projects/tasks/${user_id}?sortdir=desc&orderby=id`)
      .then(res => {
        setTasks(res.data.tasks);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //sets task.isComplete to true and adds the change to local state  
  const completeTask = completedTask => {
    axiosWithAuth()
      .put(`projects/tasks/${completedTask.id}`, {
        isComplete: true
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("from completeTask catch", err));

    const newTasksArr = tasks.map(task => {
      if (task.id === completedTask.id) {
        task.isComplete = true;
        return task;
      } else return task;
    });

    setTasks(newTasksArr);
  };

  //sets task.isComplete to false and adds the change to local state  
  const activateTask = activatedTask => {
    axiosWithAuth()
      .put(`projects/tasks/${activatedTask.id}`, {
        isComplete: false
      })
      .then(res => {})
      .catch(err => console.log("from activateTask catch", err));

    const newTasksArr = tasks.map(task => {
      if (task.id === activatedTask.id) {
        task.isComplete = false;
        return task;
      } else return task;
    });
    setTasks(newTasksArr);
  };

  //gets all tasks by project id
  const getProjectTasks = projectID => {
    axiosWithAuth()
      .get(`projects/tasks/byProject/${projectID}`)
      .then(res => {
        setProjectTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //adds a task to BE and local state
  const addTask = newTask => {
    const task = {
      due_date: newTask.due_date,
      task_name: newTask.task_name,
      task_description: newTask.task_description,
      project_id: newTask.project_id,
      template_id: newTask.template_id
    };
    axiosWithAuth()
      .post(`/projects/tasks`, task)
      .then(res => {
        newTask.id = res.data.taskId[0];
        setTasks([...tasks, newTask]);
        getTasks();
       
      })
      .catch(err => console.log(err));
  };

  //deletes a task by id in the BE and local state 
  const deleteTask = deletedTask => {
    axiosWithAuth()
      .delete(`/projects/tasks/${deletedTask.id}`)
      .then(res => { getTemplateTasks();})
      .catch(err => console.log("from delete task catch", err));
    const newTasks = tasks.filter(task => {
      return task.id != deletedTask.id;
    });
    setTasks([...newTasks]);
    // getTasks();
  };

  //edits a task by id in the BE and local state 
  const editTask = editedTask => {
    
    const dbTask = {
      task_name: editedTask.task_name,
      task_description: editedTask.task_description,
      due_date: editedTask.due_date,
      project_id: editedTask.project_id
    };
    axiosWithAuth()
      .put(`projects/tasks/${editedTask.id}`, dbTask)
      .then(res => { getTemplateTasks();})  
     
      .catch(err => console.log("from edit task catch", err));
    
    const newTasks = tasks.map(task => {
      if (task.id === editedTask.id) {
        console.log('editedTask from provider',editedTask)
        return editedTask;
      } else {
        return task;
      }
    });
    console.log("from editTask newTasks", newTasks);
    setTasks([...newTasks]);
    
  };
  return (
    <>
      <TaskContext.Provider
        value={{
          getTasks,
          completeTask,
          activateTask,
          tasks,
          setTasks,
          addTask,
          deleteTask,
          editTask,
          TaskModalStatus,
          setTaskModalStatus,
          projectTasks,
          setProjectTasks,
          getProjectTasks
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
}
