import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TemplateContext from "./TemplateContext";

export default function TemplatesProvider({ children }) {
  const [templates, setTemplates] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
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
  }, []);

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

  const deleteTemplate = deletedTemplate => {
    console.log("deletedTemplate", deletedTemplate);
    axiosWithAuth()
      .delete(`/templates/${deletedTemplate.id}`)

      .then(res => {
        console.log("template was deleted", res);
        const newTemplateList = templates.filter(template => {
          return template.id !== deleteTemplate.id;
        });
        setTemplates(newTemplateList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const editTemplate = (editedTemplate, editedTemplateId) => {
    axiosWithAuth()
      .post(`/templates/${editedTemplate.id}`, editedTemplate)
      .then(res => {
        console.log("template was edited", res);
        const newTemplatesList = templates.map(template => {
          if (template.id === editedTemplateId) {
            return res.data.editedTemplate[0];
          } else {
            return template;
          }
        });
        setTemplates([...newTemplatesList]);

        window.location.reload(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const templateTasks = () => {
    axiosWithAuth()
      .get(`/templates/${templates.id}`)
      .then(res => {
        console.log("template tasks", res);

        setTasks(res.data);
        console.log(tasks);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <TemplateContext.Provider
      value={{
        templates,
        addTemplate,
        deleteTemplate,
        editTemplate,
        templateTasks
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}
