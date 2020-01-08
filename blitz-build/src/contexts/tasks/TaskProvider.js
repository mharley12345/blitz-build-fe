import React, { useState, useEffect, useContext } from "react";
import TemplateContext from '../templates/TemplateContext'
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "./TaskContext";
export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [TaskModalStatus, setTaskModalStatus] = useState(false);
  const [projectTasks, setProjectTasks] = useState([]);
  const { getTemplateTasks } = useContext(TemplateContext)
  useEffect(() => {
    getTasks();
    
  }, []);

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

<<<<<<< HEAD
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
=======
  const sortTasks = (condition) => {
    const user_id = localStorage.getItem("user_id");
    axiosWithAuth()
      .get(
        `/projects/tasks/${user_id}?sortby=isComplete&sortcondition=false&sortdir=desc`
      )
      .then(res => {
        setTasks(res.data.tasks);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const completeTask = () => {
    const user_id = localStorage.getItem("user_id");
    axiosWithAuth()
      .get(
        `/projects/tasks/${user_id}?sortby=isComplete&sortcondition=false&sortdir=desc`
      )
      .then(res => {
        setTasks(res.data.tasks);
      })
      .catch(err => {
        console.log(err);
      });
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
  };

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

  const addTask = newTask => {
<<<<<<< HEAD
=======
    console.log("new task", newTask);

>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
    const task = {
      due_date: newTask.due_date,
      task_name: newTask.task_name,
      task_description: newTask.task_description,
      project_id: newTask.project_id,
      template_id: newTask.template_id
    };
    console.log("task const from addTask", task);
    axiosWithAuth()
      .post(`/projects/tasks`, task)
      .then(res => {
        console.log("from addtask in taskProvider", res);
        newTask.id = res.data.taskId[0];
        setTasks([...tasks, newTask]);
        getTasks();
       
      })
      .catch(err => console.log(err));
    console.log(newTask);
  };

  const deleteTask = deletedTask => {
    axiosWithAuth()
      .delete(`/projects/tasks/${deletedTask.id}`)
<<<<<<< HEAD
      .then(res => { getTemplateTasks();})
=======
      .then(res => {
        console.log("from delete task", res);
      })
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
      .catch(err => console.log("from delete task catch", err));
    const newTasks = tasks.filter(task => {
      return task.id != deletedTask.id;
    });
    setTasks([...newTasks]);
    // getTasks();
  };

  const editTask = editedTask => {
<<<<<<< HEAD
    
=======
    console.log(editedTask);
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
    const dbTask = {
      task_name: editedTask.task_name,
      task_description: editedTask.task_description,
      due_date: editedTask.due_date,
      project_id: editedTask.project_id
    };
    axiosWithAuth()
      .put(`projects/tasks/${editedTask.id}`, dbTask)
<<<<<<< HEAD
      .then(res => { getTemplateTasks();})  
     
=======
      .then(res => {
        console.log("from edit task", editedTask);
        console.log("from edit task", res);
      })
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
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
    <div>
      <TaskContext.Provider
        value={{
          getTasks,
<<<<<<< HEAD
          completeTask,
          activateTask,
=======
          sortTasks,
          completeTask,
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
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
    </div>
  );
}
