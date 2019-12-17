import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import ProjectContext from "./ProjectContext";

export default function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = () => {
    axiosWithAuth()
      .get("/projects")
      .then(res => {
        console.log("get projects", res.data);
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addProject = (newProject, templateForm) => {
    newProject.status = "On Schedule";
    console.log("new project", newProject);
    console.log("new project", templateForm);
    axiosWithAuth()
      .post(`/projects`, newProject)
      .then(res => {
        console.log("from addProject in projectsProvider", res);
        if (templateForm.template_id !== null) {
          axiosWithAuth()
            .post(`/templates/addTasks/${res.data.project[0].id}`, {
              template_id: templateForm.template_id
            })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
        if (templateForm.preBuiltTemplate === true) {
          axiosWithAuth()
            .post("/90_day", res.data.project[0].id)
            .then(res => {
              console.log("90_day post", res);
            })
            .catch(err => {
              console.log(err);
            });
        }
        setProjects([...projects, res.data.project[0]]);
        // getProject();
      })
      .catch(err => console.log(err.response.data.message));
  };

  const deleteProject = deleteProject => {
    axiosWithAuth()
      .delete(`/projects/${deleteProject.id}`)
      .then(res => {
        console.log(`project with project id:${deleteProject.id} was removed`);
        getProject();
      })
      .catch(err => console.log(err));
    // const newProjectsList = projects.filter(project => {
    //   return project.id !== deleteProject.id;
    // });
    // setProjects(newProjectsList);
  };

  const editProject = (editedProject, editedProjectId, templateForm) => {
    editedProject.id = editedProjectId;
    console.log("edited project", editedProject, "id:", editedProjectId);

    axiosWithAuth()
      .put(`/projects/${editedProjectId}`, editedProject)
      .then(res => {
        console.log("from editProject in projectsProvider", res);
        if (templateForm.template_id) {
          axiosWithAuth()
            .post(`/templates/addTasks/${editedProjectId}`, {
              template_id: templateForm.template_id
            })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
        if (templateForm.preBuiltTemplate) {
          axiosWithAuth()
            .post("/90_day", editedProjectId)
            .then(res => {
              console.log("90_day post", res);
            })
            .catch(err => {
              console.log(err);
            });
        }
        getProject();
      })
      .catch(err => console.log(err));
    const newProjectsList = projects.map(project => {
      if (project.id === editedProjectId) {
        return editedProject;
      } else {
        return project;
      }
    });
    setProjects(newProjectsList);
  };
  return (
    <ProjectContext.Provider
      value={{ projects, addProject, deleteProject, editProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
