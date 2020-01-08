import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//components
import Weather from "../../components/weather/Weather";
import ProjectTaskCard from "../../components/projects/ProjectsTaskCard";
import Global from "../../styles/Global";
import DeleteProject from "../../components/projects/DeleteProject";
import EditProject from "../../components/projects/EditProject";
import DocumentCard from "../../components/documents/Documents";


//static
import Project_icon from "../../styles/icons_project/project_icon.png";
import Project_img from "../../styles/icons_project/project_img.png";

//contexts
import PathnameContext from "../../contexts/PathnameContext";
import TaskContext from "../../contexts/tasks/TaskContext";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
import SingleProjectDocCard from '../../components/documents/SingleProjectDocCard'
//styles
import styled from "styled-components";


 export const IndividualProject = (props) => {


  //local states
  const [projectState, setProjectState] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [editProjectStatus, setEditProjectStatus] = useState(false);
  localStorage.setItem("project_name",projectState.project_name)
 

  //contexts
  const { getProjectTasks } = useContext(TaskContext);
  const { pathname, setPathname } = useContext(PathnameContext);
  


  //this gets the project id and sets it to state so we have a single project getting returned, then we are getting the projectTasks
  useEffect(() => {
    setPathname(window.location.pathname);
    const projectID = props.match.params.id;
        
    // get single project data
    axiosWithAuth()
      .get(`projects/${projectID}`)
      .then(res => {
        let name = res.data[0].project_name
        localStorage.setItem('project_name',name)
        console.log("get single project: ", res.data);

        setProjectState(res.data[0]);
   
      })
      .catch(err => {
        console.log(err);
      });
      
 
    //gets the project tasks and sets them to projectTask context
    getProjectTasks(projectID);
  }, [props]);

  //edit modal functions
  const handleEditProjectOpen = e => {
    e.stopPropagation();
    setEditProjectStatus(true);
  };
  //handles close
  const handleEditProjectClose = e => {
    setEditProjectStatus(false);
  };
  //delete modal functions
  const handleDeleteOpen = e => {
    e.stopPropagation();
    setDeleteStatus(true);
  };
  const handleDeleteClose = e => {
    setDeleteStatus(false);
    props.history.push(`/projects`);
  };

 
  return (
    <>
      <Global />
      <IndividualProjectTitleContainer>
        <img src={Project_icon} alt="project_icon" />
        <span>&nbsp;&nbsp;Projects / {projectState.project_name}</span>
      </IndividualProjectTitleContainer>
      <Top>
        <IndividualProjectContainer>
          <IndividualProjectImgContainer>
            {/* It will changed to the real project img in the future */}
            <img src={Project_img} alt="project_img" />
          </IndividualProjectImgContainer>
          <IndividualProjectcontentContainer>
            <Contenth2>{projectState.project_name}</Contenth2>
            <ContentInfo>
              <ContentAddress>
                <p>{projectState.street_address}</p>
                <p>
                  {projectState.city}, {projectState.state}{" "}
                  {projectState.zip_code}
                </p>
              </ContentAddress>
              <ContentSize>
                <p>
                  {projectState.beds} Beds&nbsp;&nbsp;&nbsp;
                  {projectState.baths} Baths
                </p>
                <p>{projectState.square_ft} sq.ft.</p>
              </ContentSize>
            </ContentInfo>
            <Contentbottom>
              <ContentbottomTemplate>
                <PageI className=" ion-ios-document" />
                <p>&nbsp;&nbsp;90-Day Template in Use</p>
              </ContentbottomTemplate>
              <div
                style={{
                  display: "flex",
                  width: "35%",
                  justifyContent: "flex-end"
                }}
              >
                <EditIcon onClick={handleEditProjectOpen}>
                  <ProjectI className="ion-md-create" />
                  <p>Edit</p>
                </EditIcon>
                <DeleteIcon onClick={handleDeleteOpen}>
                  <ProjectI className="ion-md-trash" />
                  <p>Delete</p>
                </DeleteIcon>
              </div>
            </Contentbottom>
          </IndividualProjectcontentContainer>
        </IndividualProjectContainer>
        <Right>
          <div style={{ width: "530px", height: "19px", marginBottom: "8px" }}>
            <p
              style={{
                fontSize: "16px",

                color: "#817974"
              }}
            >
              Weather
            </p>
          </div>
          <WeatherContainer>
            <Weather
              usage="project"
              city={`${projectState.city}, ${projectState.state}`}
              latitude={projectState.latitude}
              longitude={projectState.longitude}
            />
          </WeatherContainer>
          <p
            style={{
              fontSize: "16px",
              marginTop: "35px",
              color: "#817974"
            }}
          ></p>
          <div
            style={{
              width: "530px",
              height: "19px",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <p
              style={{
                fontSize: "16px",

                color: "#817974"
              }}
            >
              Documents
            </p>
            <p
              style={{
                fontSize: "16px",
                cursor: "pointer",
                color: "#817974"
              }}
              onClick={() => {
                props.history.push(`/documents`);
              }}
            >
              View All
            </p>
          </div>
          <DocumentsContainer>
            <SingleProjectDocCard project_name={projectState.project_name} />
          </DocumentsContainer>
        </Right>
      </Top>
      <TasksContainer>
        <ProjectTaskCard projectID={props.match.params.id} numberOfTasks={3} />
      </TasksContainer>
      <DeleteProject
        project={projectState}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
      />
      <EditProject
        project={projectState}
        editStatus={editProjectStatus}
        handleEditClose={handleEditProjectClose}
      />
    </>
  );
};

export default withRouter(IndividualProject);

const Top = styled.div`
  width: 1080px;
  display: flex;
  padding-right: 32px;
  p {
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
    margin-bottom: 0;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 530px;
  height: 547px;

  margin-left: 20px;
`;
const IndividualProjectContainer = styled.div`
  min-width: 530px;
  height: 547px;
`;
const IndividualProjectTitleContainer = styled.div`
  display: flex;
  min-width: 530px;
  height: 24px;
  span {
    font-size: 16px;
    color: #8a827d;
  }
`;
const IndividualProjectImgContainer = styled.div`
  min-width: 530px;
  height: 328px;
  background: lightblue;
`;
const IndividualProjectcontentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 32px 5px 32px;
  height: 219px;
  border: 1px solid #dcd9d5;
  border-radius: 3px;
  background: #ffffff;
`;
const Contenth2 = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #3b3b3b;
`;
const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentAddress = styled.div`
  width: 55%;
`;
const ContentSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
`;
const Contentbottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ContentbottomTemplate = styled.div`
  width: 60%;
  display: flex;
`;
const EditIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;
const DeleteIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;
const DocumentsContainer = styled.div`
width: 524px;
height: 288px;
left: 588px;
top: 357px;
  border: 1px solid #dcd9d5;
  border-radius: 3px;
`;
const WeatherContainer = styled.div`
  min-width: 530px;
  height: 172px;
  border: 1px solid #dcd9d5;
  border-radius: 3px;
`;

const TasksContainer = styled.div`
  margin-top: 24px;
  width: 1080px;
`;
const ProjectI = styled.i`
  width: 25%;
  height: 18px;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: #8a827d;
  text-align: right;
  text-decoration: none;
`;
const PageI = styled.i`
  height: 18px;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: #8a827d;
  text-decoration: none;
`;
