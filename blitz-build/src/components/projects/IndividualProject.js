import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Weather from "../weather/Weather";
import axios from "axios";

import TaskCard from "../dashboard/TaskCard";
import styled from "styled-components";
import Global from "../../styles/Global";
import Project_icon from "../../styles/icons_project/project_icon.png";
import Project_img from "../../styles/icons_project/project_img.png";
import PathnameContext from "../../contexts/PathnameContext";
import EditModalContext from "../../contexts/EditModalContext";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";
import TaskContext from "../../contexts/tasks/TaskContext";
import Documents from "../documents/Documents";
import searchTermContext from "../../contexts/searching/searchTerm";

import TemplateContext from "../../contexts/templates/TemplateContext";


import { StyledLabel, StyledSelect } from "../../styles/Tasks/taskForm";

const IndividualProject = props => {
  const { templates } = useContext(TemplateContext);

  const { pathname, setPathname } = useContext(PathnameContext);
  const [projectState, setProjectState] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [editProjectStatus, setEditProjectStatus] = useState(false);
  const { editModalOpen, setEditModalOpen } = useContext(EditModalContext);

  const [form, setForm] = useState({
    template_id: 0
  });

  console.log(form);

  const project_id = props.match.params.id;

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setPathname(window.location.pathname);
    const projectID = props.match.params.id;
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

  const addPreBuiltTemplate = () => {
    console.log(project_id);
    axiosWithAuth()
      .post("/90_day", { project_id })
      .then(res => {
        console.log("90_day post", res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addCustomTemplate = e => {
    e.preventDefault();
    const templateID = parseInt(form.template_id);
    console.log("templateID", templateID);
    axiosWithAuth()
      .post(`/templates/addTasks/${project_id}`, { template_id: templateID })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // /templates/addTasks/:id(project_id)

  //edit modal functions
  const handleEditProjectOpen = e => {
    e.stopPropagation();
    setEditProjectStatus(true);
  };
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

  const OpenToggle = e => {
    e.stopPropagation();
    setEditModalOpen(true);
  };
  return (
    <>
      <Global />
      <DisplayFlex>
        <button onClick={() => addPreBuiltTemplate()}> add template </button>
        <form onSubmit={addCustomTemplate}>
          <StyledLabel>Assign A Template</StyledLabel>
          <StyledSelect
            type="number"
            name="template_id"
            onChange={changeHandler}
            value={form.template_id}
          >
            <option>Choose Template</option>

            {templates.map(template => {
              return (
                <option key={template.id} value={template.template_id}>
                  {template.id}
                </option>
              );
            })}
          </StyledSelect>
          <button type="submit">Add custom template</button>
        </form>
      </DisplayFlex>
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
                <span>&nbsp;&nbsp;90-Day Template in Use</span>
              </ContentbottomTemplate>
              <EditIcon onClick={handleEditProjectOpen}>
                <ProjectI className="ion-md-create" />
                <p>Edit</p>
              </EditIcon>
              <DeleteIcon onClick={handleDeleteOpen}>
                <ProjectI className="ion-md-trash" />
                <p>Delete</p>
              </DeleteIcon>
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
          <Weather
            usage="project"
            city={`${projectState.city}, ${projectState.state}`}
            latitude={projectState.latitude}
            longitude={projectState.longitude}
          />
          <p
            style={{
              fontSize: "16px",
              marginTop: "35px",
              color: "#817974"
            }}
          >
            Your Documents
          </p>
          <DocumentsContainer>
            <Documents />
          </DocumentsContainer>
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
      <EditProject
        project={projectState}
        editStatus={editProjectStatus}
        handleEditClose={handleEditProjectClose}
      />
    </>
  );
};

export default withRouter(IndividualProject);

const DisplayFlex = styled.div`
  display: flex;
  margin: 10px;
`;

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
  min-width: 530px;
  height: 219px;
  border: 1px solid #dcd9d5;
  border-radius: 3px;
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
  width: 200px;
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
  p {
    font-size: 16px;
    line-height: 24px;
    color: #8a827d;
  }
`;
const ContentbottomTemplate = styled.div`
  width: 200px;
  height: 22px;
  margin-top: 48px;
  margin-left: 37.75px;
  display: flex;
`;
const EditIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 120px;
  cursor: pointer;
`;
const DeleteIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;
const DocumentsContainer = styled.div`
  margin-top: 8px;
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
