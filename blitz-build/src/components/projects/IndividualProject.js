import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Weather from "../weather/Weather";

import TaskCard from "../dashboard/TaskCard";
import styled from "styled-components";
import Global from "../../styles/Global";
import Project_icon from "../../styles/icons_project/project_icon.png";
import Project_img from "../../styles/icons_project/project_img.png";
import PathnameContext from "../../contexts/PathnameContext";
import EditModalContext from "../../contexts/EditModalContext";
import DeleteProject from "../modal/DeleteProject";
import EditProject from "../modal/EditProject";
import TaskContext from '../../contexts/tasks/TaskContext'
import Documents from "../documents/Documents"
import searchTermContext from '../../contexts/searching/searchTerm'

const IndividualProject = props => {
  const { pathname, setPathname } = useContext(PathnameContext);
  const { searchTerm, setSearchTerm } = useContext(searchTermContext)
  const [projectState, setProjectState] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(false);
  const { editModalOpen, setEditModalOpen } = useContext(EditModalContext);
  const {getTasks, tasks, setTasks, TaskModalStatus, setTaskModalStatus, getProjectTasks, projectTasks} = useContext(TaskContext);
  const [results, setResults ] = useState([])
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([])
  
  const projectID =props.match.params.id;
  useEffect(() => {
    if(searchTerm.length === 0) {
      setResults([])
  }
  else {
     setResults( projectTasks.filter(task =>
    task.task_name.toLowerCase().includes(taskSearchInput))
    ) 
  }
  console.log("RESULTS:", results);
      setTaskSearchResults(results);
   
    getProjectTasks(projectID);

    setPathname(window.location.pathname)
    console.log(projectID)
    
    axiosWithAuth()
      .get(`projects/${projectID}`)
      .then(res => {
        console.log("get single project: ", res.data);

        setProjectState(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props]);
  
 

  const handleDeleteOpen = e => {
    e.stopPropagation();
    setDeleteStatus(true);
  };
  const handleDeleteClose = e => {
    setDeleteStatus(false);
    props.history.push(`/projects`);
  };

  const OpenToggle = e => {
    e.stopPropagation();
    setEditModalOpen(true);
  };
  const AddTask = () => {
    setTaskModalStatus(true)

  }
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
                <p style={{ marginBottom: 0 }}>{projectState.street_address}</p>
                <p style={{ marginBottom: 0 }}>
                  {projectState.city}, {projectState.state}{" "}
                  {projectState.zip_code}
                </p>
              </ContentAddress>
              <ContentSize>
                <p style={{ marginBottom: 0 }}>
                  {projectState.beds} Beds&nbsp;&nbsp;&nbsp;
                  {projectState.baths} Baths
                </p>
                <p style={{ marginBottom: 0 }}>
                  {projectState.square_ft} sq.ft.
                </p>
              </ContentSize>
            </ContentInfo>
            <Contentbottom>
              <ContentbottomTemplate>
                <PageI className=" ion-ios-document" />
                <span >
                  &nbsp;&nbsp;90-Day Template in Use
                </span>
              </ContentbottomTemplate>
              <AddIcon onClick={AddTask}>
                <ProjectI className="ion-md-add" />
                <span>Add</span>
              </AddIcon>
              <EditIcon onClick={OpenToggle}>
                <ProjectI className="ion-md-create" />
                <span>Edit</span>
              </EditIcon>
              <DeleteIcon onClick={handleDeleteOpen}>
                <ProjectI className="ion-md-trash" />
                <span>Delete</span>
              </DeleteIcon>
            </Contentbottom>
          </IndividualProjectcontentContainer>
        </IndividualProjectContainer>
        <Right>
          <div
            style={{
              width: "530px",
              height: "19px",
              marginBottom: "8px",
              fontSize: "16px",

              color: "#817974"
            }}
          >
            Weather
          </div>
          <WeatherContainer>
            <Weather
              usage="project"
              city={`${projectState.city}, ${projectState.state}`}
              latitude={projectState.latitude}
              longitude={projectState.longitude}
            />
          </WeatherContainer>
          <div
            style={{
              fontSize: "16px",
              marginTop: "35px",
              color: "#817974"
            }}
          >
            Your Documents - upcoming
          </div>
          <DocumentsContainer></DocumentsContainer>
        </Right>
      </Top>
      <TasksContainer>
        <TaskCard projectID={props.match.params.id} numberOfTasks={3} />
      </TasksContainer>
      <DeleteProject
        project={projectState}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
      />
      <EditProject project={projectState} />
    </>
  );
};

export default withRouter(IndividualProject);

const Top = styled.div`
  width: 1080px;
  display: flex;
  padding-right: 32px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 530px;
  height: 547px;
  margin-top: 16px;
  margin-left: 20px;
`;
const IndividualProjectContainer = styled.div`
  margin-top: 16px;

  min-width: 530px;
  height: 547px;
  border: 1px solid #dcd9d5;

  border-radius: 3px;
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
  min-width: 530px;
  height: 219px;
  border: 1px solid #dcd9d5;
border-radius: 3px;
  background: #ffffff;
`;
const Contenth2 = styled.h2`
  padding-top: 10px;
  padding-left: 32px;
  font-size: 36px;
  font-weight: bold;
  color: #3b3b3b;
`;
const ContentInfo = styled.div`
  display: flex;
`;
const ContentAddress = styled.div`
  width: 153px;
  height: 48px;
  margin-top: 16px;
  margin-left: 32px;
  p {
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
  }
`;
const ContentSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 170px;
  height: 56px;
  margin-top: 16px;
  margin-left: 150px;
  p {
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
  }
`;
const Contentbottom = styled.div`
  display: flex;
  align-content: center;
  span {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
  }
`;
const ContentbottomTemplate = styled.div`
  width: 400px;
  height: 22px;
  margin-top: 48px;
  margin-left: 12px;
  display: flex;
`;
const AddIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 120px;
`;
const EditIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
`;
const DeleteIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;
const DocumentsContainer = styled.div`
  margin-top: 8px;
  width: 530px;
  height: 288px;
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
cursor: pointer;
`;
const PageI = styled.i`
  height: 18px;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: #8a827d;
  text-decoration: none;
  cursor: pointer;
`;