import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "./TaskContext";
export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [TaskModalStatus, setTaskModalStatus] = useState(false);
  const [projectTasks, setProjectTasks] = useState([]);
  useEffect(() => {
    getTasks("FILTER_BY_ACTIVE");
  }, []);

  const getTasks = switchCaseArg => {
    const user_id = localStorage.getItem("user_id");
    switch (switchCaseArg) {
      case "ALL":
        return axiosWithAuth()
          .get(`/projects/tasks/${user_id}?sortdir=desc&orderby=id`)
          .then(res => {
            setTasks(res.data.tasks);
          })
          .catch(err => {
            console.log(err);
          });
      case "FILTER_BY_ACTIVE":
        return axiosWithAuth()
          .get(
            `/projects/tasks/${user_id}?sortby=isComplete&sortcondition=false&sortdir=desc`
          )
          .then(res => {
            setTasks(res.data.tasks);
          })
          .catch(err => {
            console.log(err);
          });
      case "FILTER_BY_COMPLETE":
        return axiosWithAuth()
          .get(
            `/projects/tasks/${user_id}?sortby=isComplete&sortcondition=true&sortdir=desc`
          )
          .then(res => {
            setTasks(res.data.tasks);
          })
          .catch(err => {
            console.log(err);
          });
    }
  };

  const completeTask = (completedTask) => {

    axiosWithAuth()
      .put(`projects/tasks/${completedTask.id}`, {
        isComplete: true
      })
      .then(res => {})
      .catch(err => console.log("from edit task catch", err));

    getTasks("FILTER_BY_ACTIVE");
  };

  const activateTask = (activatedTask) => {

    axiosWithAuth()
      .put(`projects/tasks/${activatedTask.id}`, {
        isComplete: false
      })
      .then(res => {})
      .catch(err => console.log("from edit task catch", err));

    getTasks('FILTER_BY_COMPLETE');
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

  const deleteTask = deletedTask => {
    axiosWithAuth()
      .delete(`/projects/tasks/${deletedTask.id}`)
      .then(res => {})
      .catch(err => console.log("from delete task catch", err));
    const newTasks = tasks.filter(task => {
      return task.id != deletedTask.id;
    });
    setTasks([...newTasks]);
    // getTasks();
  };

  const editTask = editedTask => {
    const dbTask = {
      task_name: editedTask.task_name,
      task_description: editedTask.task_description,
      due_date: editedTask.due_date,
      project_id: editedTask.project_id
    };
    axiosWithAuth()
      .put(`projects/tasks/${editedTask.id}`, dbTask)
      .then(res => {})
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
    <div>
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
    </div>
  );
}
