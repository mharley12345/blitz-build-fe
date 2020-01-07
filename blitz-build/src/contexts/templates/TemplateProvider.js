import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TemplateContext from "./TemplateContext";

export default function TemplatesProvider({ children }) {
  const [templates, setTemplates] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [templateTask, setTemplatesTask] = useState([])

  useEffect(() => {
   getTemplates();
 
  }, []);

const getTemplates = () => {

 axiosWithAuth()
      .get("/templates")
      // .get("/90_day")
      .then(res => {
        console.log("get templates response", res);
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

const getTemplateTasks = () => {
   const templateID = localStorage.getItem('template_id');
  console.log(" this is the templateID: ", templateID)
  axiosWithAuth()
      .get(`/projects/tasks/template/${templateID}`)
      .then(res => {
        console.log("template tasks", res);
        setTemplatesTask(res.data);
      })
      .catch(err => {
        console.log(err);
      });
}


  const addTemplate = newTemplate => {
    console.log("addTemplate", newTemplate);
    axiosWithAuth()
      .post("/templates", newTemplate)
      .then(res => {
        console.log("This template was posted,", res);
        newTemplate.id = res.data.template_id;
        setTemplates([...templates, newTemplate]);
       
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addTemplateTask = newTask => {
    // console.log("new task", newTask);

    // const task = {
    //   due_date: newTask.due_date,
    //   task_name: newTask.task_name,
    //   task_description: newTask.task_description,
    //   project_id: newTask.project_id,
    //   template_id: newTask.template_id
    // };
    // console.log("task const from addTask", task);
    axiosWithAuth()
      .post(`/projects/tasks`, newTask)
      .then(res => {
        console.log("from addTemplateTask in templateProvider", res);
        newTask.id = res.data.taskId[0];
        setTemplatesTask([...tasks, newTask]);
        getTemplateTasks();
      })
      .catch(err => console.log(err));
    console.log(newTask);
  };

  const deleteTemplate = deletedTemplate => {
     getTemplates();
    console.log("deletedTemplate", deletedTemplate);
    axiosWithAuth()
      .delete(`/templates/${deletedTemplate.id}`)

      .then(res => {
        console.log("template was deleted", res);
        const newTemplateList = templates.filter(template => {
          return template.id !== deletedTemplate.id;
        });
     
        setTemplates(newTemplateList);

      })
      .catch(err => {
        console.log(err);
      }); 
  };

  const editTemplate = (editedTemplate, editedTemplateId) => {
    axiosWithAuth()
      .put(`/templates/${editedTemplate.id}`, editedTemplate)
      .then(res => {
        console.log("template was edited", res);
        const newTemplatesList = templates.map(template => {
          if (template.id === editedTemplateId) {
            return editedTemplate;
          } else {
            return template;
          }
        });
        setTemplates([...newTemplatesList]);

        
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <TemplateContext.Provider
      value={{
        templateTask,
        setTemplatesTask,
        templates,
        addTemplate,
        deleteTemplate,
        editTemplate,
        addTemplateTask,
        getTemplateTasks
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}
