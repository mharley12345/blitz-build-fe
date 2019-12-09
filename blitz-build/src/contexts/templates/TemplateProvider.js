import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TemplateContext from "./TemplateContext";

export default function TemplatesProvider({ children }) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/templates")
      .then(res => {
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addTemplate = newTemplate => {
    axiosWithAuth()
      .post("/templates", newTemplate)
      .then(res => {
        console.log("This template was posted,", res);

        setTemplates([...templates, res.data[0]]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteTemplate = deletedTemplate => {
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

  return (
    <TemplateContext.Provider
      value={{ templates, addTemplate, deleteTemplate, editTemplate }}
    >
      {children}
    </TemplateContext.Provider>
  );
}
