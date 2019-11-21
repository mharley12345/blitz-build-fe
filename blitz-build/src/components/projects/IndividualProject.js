import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../weather/Weather";
import Documents from './Documents'
import TaskCard from "../dashboard/TaskCard";
import styled from "styled-components";
import Global from "../../styles/Global";
import Page_icon from "../../styles/icons_project/page_icon.png";
import Edit_icon from "../../styles/icons_project/edit_icon.png";
import Delete_icon from "../../styles/icons_project/delete_icon.png";
import Project_icon from "../../styles/icons_project/project_icon.png";
import Project_img from "../../styles/icons_project/project_img.png";




const IndividualProject = props => {
  const [projectTasks, setProjectTasks] = useState([]);

  useEffect(() => {
    const projectID = props.match.params.id;

    axios
      .get(
        `https://blitz-build.herokuapp.com/projects/${projectID}`,
        projectTasks
      )
      .then(res => {
        console.log("res", res.data);
        // const tasksObject = Object.assign({}, [res.data]);
        // console.log("tasks object", tasksObject);
        setProjectTasks(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Global />

      <IndividualProjectTitleContainer>
        <img src={Project_icon} alt="project_icon" />
        <p>&nbsp;&nbsp;Projects / {projectTasks.project_name}</p>
      </IndividualProjectTitleContainer>
      <Top>
        <IndividualProjectContainer>
          <IndividualProjectImgContainer>
            {/* It will changed to the real project img in the future */}
            <img src={Project_img} alt="project_img" /> 
          </IndividualProjectImgContainer>
          <IndividualProjectcontentContainer>
            <Contenth2>{projectTasks.project_name}</Contenth2>
            <ContentInfo>
              <ContentAddress>
                <p>{projectTasks.street_address}</p>
                <p>
                  {projectTasks.city}, {projectTasks.state}{" "}
                  {projectTasks.zip_code}
                </p>
              </ContentAddress>
              <ContentSize>
                <p>
                  {projectTasks.beds} Beds&nbsp;&nbsp;&nbsp;
                  {projectTasks.baths} Baths
                </p>
                <p>{projectTasks.square_ft} sq.ft.</p>
              </ContentSize>
            </ContentInfo>
            <Contentbottom>
              <ContentbottomTemplate>
                <img src={Page_icon} alt="page_icon" />
                <p>&nbsp;&nbsp;90-Day Template in Use</p>
              </ContentbottomTemplate>
              <EditIcon>
                <img src={Edit_icon} alt="edit_icon" />
                <p>Edit</p>
              </EditIcon>
              <DeleteIcon>
                <img src={Delete_icon} alt="delete_icon" />
                <p>Delete</p>
              </DeleteIcon>
            </Contentbottom>
          </IndividualProjectcontentContainer>
        </IndividualProjectContainer>
        <Right>
          <Weather
            usage="project"
            city={`${projectTasks.city}, ${projectTasks.state}`}
            latitude={projectTasks.latitude}
            longitude={projectTasks.longitude}
          />
          <DocumentsContainer>
            <Documents />
          </DocumentsContainer>
        </Right>
      </Top>
      <TasksContainer>
        <TaskCard />
      </TasksContainer>
    </>
  );
};

export default IndividualProject;


const Top = styled.div`
  display:flex;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 649px;
  margin-top: 16px;
  margin-left: 20px;
  
`;
const IndividualProjectContainer = styled.div`
  width: 530px;
  height: 649px;
  left: 328px;
  top: 168px;
`;
const IndividualProjectTitleContainer = styled.div`
  display: flex;
  width: 530px;
  height: 24px;
  left: 328px;

  p {
    font-family: Roboto;
    font-size: 16px;
    color: #8a827d;
    padding-top: 5px;
  }
`;
const IndividualProjectImgContainer = styled.div`
  width: 530px;
  height: 328px;
  margin-top: 16px;

  background: lightblue;
`;
const IndividualProjectcontentContainer = styled.div`
  width: 530px;
  height: 321px;

  background: #ffffff;
`;
const Contenth2 = styled.h2`
  padding-top: 24px;
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
  width: 120px;
  height: 56px;
  margin-top: 16px;
  margin-left: 200px;

  p {
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
  }
`;
const Contentbottom = styled.div`
  display: flex;
  align-content: center;
  p {
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
  }
`;
const ContentbottomTemplate = styled.div`
  width: 200px;
  height: 22px;
  margin-top: 148px;
  margin-left: 37.75px;
  display: flex;
`;
const EditIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 127px;
  margin-left: 169px;
`;
const DeleteIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 127px;
  margin-left: 20px;
`;
const DocumentsContainer = styled.div`
  margin-top:25px;
`;


const TasksContainer = styled.div`
  margin-top:24px;
`;
