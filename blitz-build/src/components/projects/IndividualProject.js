import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../weather/Weather";
import TaskCard from "../dashboard/TaskCard";
import styled from "styled-components";
import Global from "../../styles/Global";
import Page_icon from "../../styles/icons_project/page_icon.png";
import Edit_icon from "../../styles/icons_project/edit_icon.png";
import Delete_icon from "../../styles/icons_project/delete_icon.png";
import Project_icon from "../../styles/icons_project/project_icon.png";


const IndividualProjectContainer = styled.div`
  
  width: 530px;
  height: 649px;
  left: 328px;
  top: 168px;
`;
const IndividualProjectTitleContainer = styled.div`
  
  display:flex;
  width: 530px;
  height: 24px;
  left: 328px;
  

  p {
    font-family: Roboto;
    font-size: 16px;
    color: #8a827d;
    padding-top:5px
  }
`;
const IndividualProjectImgContainer = styled.div`
  
  width: 530px;
  height: 328px;
  margin-top:16px;
  
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
  flex-direction:column;
  align-items:flex-end;
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
  position: absolute;
  width: 530px;
  height: 440px;
  left: 878px;
  top: 384px;
  border: 1px solid #dcd9d5;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
`;

const Documentstitle = styled.div`
  width: 530px;
  height: 40px;
  left: 878px;
  top: 136px;

  background: #3f3a36;

  font-size: 16px;
  line-height: 19px;

  color: #fbfaf9;
`;
const DocumentsTitleText = styled.div`
  padding: 12px 16px 12px 16px;

  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: #fbfaf9;
`;

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
      <IndividualProjectContainer>
        <IndividualProjectImgContainer></IndividualProjectImgContainer>
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
      <Weather
        usage="project"
        city={`${projectTasks.city}, ${projectTasks.state}`}
        latitude={projectTasks.latitude}
        longitude={projectTasks.longitude}
      />
      <DocumentsContainer>
        <Documentstitle>
          <DocumentsTitleText>Documents</DocumentsTitleText>
        </Documentstitle>
      </DocumentsContainer>
      <TaskCard />
    </>
  );
};

export default IndividualProject;
