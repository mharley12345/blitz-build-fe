import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../modal/AddProject";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  height: 900px;
  align-items: center;
  flex-direction: column;
  margin-left: 2%;
`;
const ProjectTopContainer = styled.div`
  display: flex;
  width: 80%;
  height: 6%;
  background-color: rgb(34, 58, 77);
  justify-content: space-between;
  align-items: center;
`;
const ProjectCategories = styled.div`
  display: flex;
  width: 50%;
`;

const ProjectCategoriesSecond = styled.div`
  display: flex;
  width: 40%;

`;
const ProjectUl = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-around;
`;
const ProjectUlSecond = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;

const ProjectLi = styled.div`
  font-size: 1.1em;
  color: white;
`;

const ProjectListContainer = styled.div`
  display: flex;
  width: 80%;
  height: 6%;
  background-color: lightgrey;
  align-items: center;
 
`;

const ProjectListCategories = styled.div`
  display: flex;
  width: 62.8%
  
`;
const ProjectListCategoriesSecond = styled.div`
  display: flex; 
   
   justify-content: space-between;
  width: 27%;
`;

const ProjectListIcons = styled.div`
display: flex; 
 justify-content: space-between;
width: 3%;
margin-left: 4%;
`;

const ProjectListName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 7%;
  width: 12%;
  
`;
const Name = styled.div`
  font-size: 1.1em;
  color: black;
  
`;

const ProjectListAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 12%;
 
`;
const Address = styled.div`
font-size: 1.1em;
color: black;
`;
const ProjectListDateCreated = styled.div`
display: flex;
flex-direction: column;
justify-content: start;

`;
const DateCreated =styled.div`
font-size: 1.1em;
color: black;
`;
const ProjectListDateModified = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
margin-left: -30px;
`;
const DateModified=styled.div`
font-size: 1.1em;
color: black;
`;
const ProjectListStatus = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
margin-right:-20px;

`;
const Status=styled.div`
font-size: 1.1em;
color: black;
`;
const ProjectListCreate= styled.div`
display: flex;
flex-direction: column;
justify-content: start;
`;
const Create=styled.div`
font-size: 1.1em;
color: rgb(50, 129, 168);
`;
const ProjectListDestroy= styled.div`
display: flex;
flex-direction: column;
justify-content: start;
`;
const Destroy= styled.div`
font-size: 1.1em;
color: rgb(50, 129, 168);
`;



const Projects = props => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    axios
      .get(
        `https://blitz-build.herokuapp.com/projects`,
        project
      )
      .then(res => {
        console.log(res);
        const projectArray = Object.values(res.data);
        console.log(projectArray);
        setProject(projectArray);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
   
      <ProjectContainer>   
        <h1> HERE ARE THE PROJECTS </h1>
        <ProjectTopContainer>
          <ProjectCategories>
            <ProjectUl>
              <ProjectLi> Project Name </ProjectLi>
              <ProjectLi> Address </ProjectLi>
            </ProjectUl>
          </ProjectCategories>
          <ProjectCategoriesSecond>
            <ProjectUlSecond>
              <ProjectLi> Date Created </ProjectLi>
              <ProjectLi> Date Last Modified </ProjectLi>
              <ProjectLi> Status </ProjectLi>
            </ProjectUlSecond>
          </ProjectCategoriesSecond>
        </ProjectTopContainer>

        {project.map(project => {
          return (
            <ProjectListContainer
             key={project.projectID}
              onClick={() => {
                props.history.push(`/project/${project.projectID}`);
              }}
            >
             <ProjectListCategories>
                <ProjectListName >
                  <Name  > {project.project_name} </Name>
               </ProjectListName> 

                <ProjectListAddress>
                  <Address>  {" "} 12 Fairview Lane, Moorhead MN 56560-1543</Address>
                 </ProjectListAddress>
              </ProjectListCategories>
              <ProjectListCategoriesSecond>
                <ProjectListDateCreated>
                  <DateCreated> 05/10/2019</DateCreated>
                  </ProjectListDateCreated>

                  <ProjectListDateModified>
                    <DateModified> 08/18/2019 </DateModified>
                   </ProjectListDateModified>

                  <ProjectListStatus> 
                    <Status>Complete</Status>
                   </ProjectListStatus>
             </ProjectListCategoriesSecond>
             <ProjectListIcons>
               <ProjectListCreate>
                 <Create className = "ion-ios-create"></Create>
               </ProjectListCreate>
               <ProjectListDestroy>
                 <Destroy className = "ion-ios-trash"></Destroy>
               </ProjectListDestroy>
             </ProjectListIcons>
            </ProjectListContainer>
          );
        })}

        <AddProject />
      </ProjectContainer>
    </div>
  );
};

export default Projects;
