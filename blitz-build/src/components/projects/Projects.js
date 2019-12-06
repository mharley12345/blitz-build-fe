import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import projectContext from "../../contexts/projects/ProjectContext";
import AddProject from "../modal/AddProject";
import Global from "../../styles/Global";
import styled, { css } from "styled-components";
import searchTermContext from '../../contexts/searching/searchTerm'
const Projects = props => {


  const { projects } = useContext(projectContext);
  const { searchTerm } = useContext(searchTermContext);
  const projectSearchInput = searchTerm.toLowerCase();
  const [projectSearchResults, setProjectSearchResults] = useState([]);


  useEffect(() => {
    const results = projects.filter(project =>
      project.project_name.toLowerCase().includes(projectSearchInput)

    )
    console.log("RESULTS:", results);
    setProjectSearchResults(results);
  }, [projectSearchInput]);







  return (
    <>
      <Global />

      <OverallContainer>
        <Section>
          {" "}
          <p> Your Project List </p>
        </Section>
        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectCategories>
              <ProjectUl>
                <ProjectLi> Project Name </ProjectLi>
                <ProjectLi> Address </ProjectLi>
              </ProjectUl>
            </ProjectCategories>
            <ProjectCategoriesSecond>
              <ProjectUlSecond>
                 <ProjectLi>Date Created</ProjectLi>
                <ProjectLi> Due Date</ProjectLi>
                <ProjectLi> Status </ProjectLi>
              </ProjectUlSecond>
            </ProjectCategoriesSecond>
          </ProjectTopContainer>


          {projects.map(project => {
            if (projectSearchResults.length > 0) {
              return (
                <div>
                </div>
              )
            } else {
              return (

                <Link to={`/project/${project.id}`}>
                  <ProjectListContainer
                    key={project.projectID}
                    onClick={() => {
                      props.history.push(`/project/${project.projectID}`);
                    }}
                    key={project.id}
                    onClick={() => {
                      props.history.push(`/project/${project.id}`);
                    }}
                  >
                    <ProjectListCategories>
                      <ProjectListName>
                        <Name> {project.project_name} </Name>
                      </ProjectListName>

                      <ProjectListAddress>
                        <Address>
                          {project.street_address},{project.city},{project.state},{project.zip_code}
                        </Address>
                      </ProjectListAddress>
                    </ProjectListCategories>
                    <ProjectListCategoriesSecond>
                      <ProjectListDateCreated>
                        <DateCreated> {project.createdAt}</DateCreated>
                      </ProjectListDateCreated>

                      <ProjectListDateModified>
                        <DateModified> {project.due_date} </DateModified>
                      </ProjectListDateModified>

                      <ProjectListStatus>
                        <Status>{project.status}</Status>
                      </ProjectListStatus>
                    </ProjectListCategoriesSecond>
                    {/* <ProjectListIcons>
                  <ProjectListCreate>
                    <Create className = "ion-ios-create"></Create>
                  </ProjectListCreate>
                  <ProjectListDestroy>
                    <Destroy className = "ion-ios-trash"></Destroy>
                  </ProjectListDestroy>
                </ProjectListIcons> */}
                  </ProjectListContainer>
                </Link>
              );
            }




          })}





          {projectSearchResults.length > 0 ?
            projectSearchResults.map(result => (
              <Link to={`/project/${result.id}`}>
                <ProjectListContainer
                  key={result.projectID}
                  onClick={() => {
                    props.history.push(`/project/${result.projectID}`);
                  }}
                  key={result.id}
                  onClick={() => {
                    props.history.push(`/project/${result.id}`);
                  }}
                >
                  <ProjectListCategories>
                    <ProjectListName>
                      <Name> {result.project_name} </Name>
                    </ProjectListName>

                    <ProjectListAddress>
                      <Address>
                        {result.street_address},{result.city},{result.state},{result.zip_code}
                      </Address>
                    </ProjectListAddress>
                  </ProjectListCategories>
                  <ProjectListCategoriesSecond>
                    <ProjectListDateCreated>
                      <DateCreated> {result.createdAt}</DateCreated>
                    </ProjectListDateCreated>

                    <ProjectListDateModified>
                      <DateModified> {result.due_date} </DateModified>
                    </ProjectListDateModified>

                    <ProjectListStatus>
                      <Status>{result.status}</Status>
                    </ProjectListStatus>
                  </ProjectListCategoriesSecond>
                  {/* <ProjectListIcons>
                 <ProjectListCreate>
                   <Create className = "ion-ios-create"></Create>
                 </ProjectListCreate>
                 <ProjectListDestroy>
                   <Destroy className = "ion-ios-trash"></Destroy>
                 </ProjectListDestroy>
               </ProjectListIcons> */}
                </ProjectListContainer>
              </Link>
            )) : <FailedSearch> <FailedSearchText></FailedSearchText></FailedSearch>
          }






          <AddProject />
        </ProjectContainer>
      </OverallContainer>

    </>
  );
};

export default Projects;

const FailedSearch = styled.div`
background: #FAFAFA;
border-radius: 3px;

`
const FailedSearchText = styled.p`
font-size: 24px;
color: #3B3B3B;
`

const OverallContainer = styled.div``;
const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 19px;
    color: #8a827d;
    font-weight: 500;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;
const ProjectListContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  :nth-child(odd) {
    background: #fbfaf9;
  }
`;
const ProjectListCategories = styled.div`
  display: flex;
  width: 60%;
  line-height: 50px;
`;

const ProjectTopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  background-color: #ffffff;
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
  color: #dd6b20;
  height: 19px;
  left: 307px;
  top: 75px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;
const ProjectListCategoriesSecond = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  line-height: 50px;
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
  /* Heading 4 */
  width: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  /* 500 Gray */

  color: #3f3a36;
`;

const ProjectListAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 12%;
`;
const Address = styled.div`
  font-size: 1.1em;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* identical to box height, or 171% */

  /* 500 Gray */

  color: #3f3a36;
`;
const ProjectListDateCreated = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 25%;
`;
const DateCreated = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;


  text-align: right;

  /* 500 Gray */

  color: #3f3a36;
`;
const ProjectListDateModified = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 25%;
  
`;
const DateModified = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  /* identical to box height, or 171% */

  text-align: right;

  /* 500 Gray */

  color: #3f3a36;
`;
const ProjectListStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 25%;
`;
const Status = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  
  /* identical to box height */

  text-align: right;

  /* 500 Gray */

  color: #3f3a36;
`;
const ProjectListCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Create = styled.div`
  font-size: 1.1em;
  color: rgb(50, 129, 168);
`;
const ProjectListDestroy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Destroy = styled.div`
  font-size: 1.1em;
  color: rgb(50, 129, 168);
`;
