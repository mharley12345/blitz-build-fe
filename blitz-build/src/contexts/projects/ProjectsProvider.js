import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import ProjectContext from "./ProjectContext";

export default function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/projects")
      .then(res => {
        console.log("get projects", res.data);
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addProject = newProject => {
    console.log("new project", newProject);

    axiosWithAuth()
      .post(`/projects`, newProject)
      .then(res => {
        console.log("from addProject in projectsProvider", res);
        newProject.id = res.data[0];
        setProjects([...projects, newProject]);
      })
      .catch(err => console.log(err));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
