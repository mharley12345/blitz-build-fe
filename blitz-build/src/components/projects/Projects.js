import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../modal/AddProject";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  height: 80em;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 2px #ccc;
`;
const ProjectTopContainer = styled.div`
     display: flex;
     width: 80%;
     height: 4em
     background-color: rgb(34, 58, 77);
     justify-content: space-between;
     align-items: center;
    
`;
const ProjectCategories = styled.div`
  display: flex;
  width: 50em;
`;

const ProjectCategoriesSecond = styled.div`
  display: flex;
  width: 30em;
  margin-right: 3em;
`;
const ProjectUl = styled.div`
  display: flex;
  width: 30em;
  margin-left: -2em;
  justify-content: space-around;
`;

const ProjectLi = styled.div`
  font-size: 1.1em;
  color: white;
`;

const ProjectList = styled.div`
     display: flex;
     width: 80%;
     height: 4em
     background-color: lightgrey;
     justify-content: space-between;
     align-items: center;
     
`;
const ProjectListLi = styled.div`
  display: flex;
  justify-content: start;

  font-size: 1.1em;
  color: black;
`;

const ProjectListUl = styled.div`
  display: flex;
  width: 46em;
  justify-content: space-around;
  margin-left: -3em;
`;

const Projects = props => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    axios
      .get(
        `https://api-blitz-build-dev.herokuapp.com/api/auth/${uid}/projects`,
        project
      )
      .then(res => {
        console.log(res);
        const projectArray = Object.values(res.data.projects);
        console.log(projectArray);
        setProject(projectArray);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> HERE ARE THE PROJECTS </h1>
      <ProjectContainer>
        <ProjectTopContainer>
          <ProjectCategories>
            <ProjectUl>
              <ProjectLi> Project Name </ProjectLi>
              <ProjectLi> Address </ProjectLi>
            </ProjectUl>
          </ProjectCategories>
          <ProjectCategoriesSecond>
            <ProjectUl>
              <ProjectLi> Date Created </ProjectLi>
              <ProjectLi> Date Last Modified </ProjectLi>
              <ProjectLi> Status </ProjectLi>
            </ProjectUl>
          </ProjectCategoriesSecond>
        </ProjectTopContainer>

        <ProjectList>
          <ProjectCategories>
            <ProjectListUl>
              <ProjectListLi> 12 FairView (4 bed unit) </ProjectListLi>
              <ProjectListLi>
                {" "}
                12 Fairview Lane, Moorhead MN 56560-1543
              </ProjectListLi>
            </ProjectListUl>
          </ProjectCategories>
          <ProjectCategoriesSecond>
            <ProjectListUl>
              <ProjectListLi> 05/10/2019</ProjectListLi>
              <ProjectListLi> 08/18/2019 </ProjectListLi>
              <ProjectListLi> Complete </ProjectListLi>
            </ProjectListUl>
          </ProjectCategoriesSecond>
        </ProjectList>

        {project.map(project => (
          <div
            key={project.projectID}
            onClick={() => {
              props.history.push(`/project/${project.projectID}`);
            }}
          >
            <p>{project.project_name}</p>
          </div>
        ))}

        <AddProject />
      </ProjectContainer>
    </div>
  );
};

export default Projects;
