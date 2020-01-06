import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import ProjectContext from "./ProjectContext";

export default function ProjectsProvider({ children }) {
  //sets state of projects throughout the app
  const [projects, setProjects] = useState([]);
  

  //this is getting all projects
  useEffect(() => {

    getProject();

  }, []);

  //this gets all projects associated with a user id
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

  //this adds a project to your user id
  const addProject = (newProject, templateForm) => {
    newProject.status = "On Schedule";
    console.log("new project", newProject);
    console.log("new project", templateForm);
    axiosWithAuth()
      .post(`/projects`, newProject)
      .then(res => {
        console.log("from addProject in projectsProvider", res);

        //adding custom template
        if (templateForm.template_id) {
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

        //adding pre-build 90 days template
        if (templateForm.preBuiltTemplate ) {
          console.log("im here");
          axiosWithAuth()
            .post("/90_day", {
              project_id: res.data.project[0].id
            })
            .then(res => {
              console.log("90_day post", res);
            })
            .catch(err => {
              console.log(err);
            });
        }
        setProjects([...projects, res.data.project[0]]);
      })
      .catch(err => console.log(err.response.data.message));
  };

  //deletes project by user id
  const deleteProject = deleteProject => {
    axiosWithAuth()
      .delete(`/projects/${deleteProject.id}`)
      .then(res => {
        console.log(`project with project id:${deleteProject.id} was removed`);
        getProject();
      })
      .catch(err => console.log(err));
  };

  //this allows you to edit the project based on the project id you selected
  const editProject = (editedProject, editedProjectId, templateForm) => {
    editedProject.id = editedProjectId;
    console.log("edited project", editedProject, "id:", editedProjectId);

    axiosWithAuth()
      .put(`/projects/${editedProjectId}`, editedProject)
      .then(res => {
        console.log("from editProject in projectsProvider", res);

        //adding custom template

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
        //adding pre-build 90 days template

        if (templateForm.preBuiltTemplate) {
          console.log("im here in edit");
          console.log("edited project id", editedProjectId);
          axiosWithAuth()
            .post("/90_day", { project_id: editedProjectId })
            .then(res => {
              console.log("90_day post", res);
            })
            .catch(err => {
              console.log(err);
            });
        }
        window.location.reload(true);
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
  
  //this returns all the functions and state of projects in the provider and then this will wrap around the application in app.js
  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        editProject,
        getProject,
        
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
