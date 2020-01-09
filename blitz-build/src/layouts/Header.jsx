import React, { useState, useContext } from "react";
import styled from "styled-components";
import Search from "../styles/Search/Search.png";
import Uploader from "../components/documents/Uploader";

import TasksContext from "../contexts/tasks/TaskContext";
import Modal from "../components/global/Modal";
import TaskForm from "../components/tasks/TaskForm";
import ProjectForm from "../components/projects/ProjectForm";
import { NavLink, Link, Redirect } from "react-router-dom";
import OpenTemplateContext from "../contexts/OpenTemplateContext";
import searchTermContext from "../contexts/searching/searchTerm";
import TemplateContext from "../contexts/templates/TemplateContext";
import TemplateTaskForm from "../components/templates/TemplateTaskForm";
import TemplateForm from "../components/templates/TemplateForm";
import TaskContext from "../contexts/tasks/TaskContext";
import ProjectContext from "../contexts/projects/ProjectContext";
import DocumentsContext from "../contexts/documents/DocumentsContext";

const HeaderContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 96px;
  border-bottom: 2px solid #E9E9E9
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

const SearchContainer = styled.div`
  margin: 24px 32px;
  width: 464px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-right: 25px;
  width: 400px;
  justify-content: center;
`;

const ButtonDocument = styled.div`
display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 174px;
 height: 48px;
 justify-content: center;
 align-items: center;
 :hover {
  border: 1px solid #DD6B20 ;
  color: #DD6B20;
  cursor: pointer;
}
  

`;
const ButtonDocumentCheck = {
  display: "flex",
  position: "absolute",
  right: "200px",
  borderRadius: "3px",
  width: "174px",
  height: "48px",
  justifyContent: "center",
  alignItems: "center"
};
const ButtonTemplateCheck = {
  position: "absolute",
  right: "40px",
  display: "flex",
  borderRadius: "3px",
  width: "174px",
  height: "48px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "160px"
};
const SoloDocument = {
  position: "absolute",
  right: "40px",
  display: "flex",
  borderRadius: "3px",
  width: "174px",
  height: "48px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "160px"
};

const SoloTask = {
  position: "absolute",
  right: "40px",
  display: "flex",
  borderRadius: "3px",
  width: "151px",
  height: "48px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "160px"
};
const ButtonProject = styled.div`
display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 151px;
 height: 48px;
 justify-content: center;
 align-items: center;
 margin-left: 10px;
 :hover {
  border: 1px solid #DD6B20 ;
  color: #DD6B20;
  cursor: pointer;
} 

`;
const ButtonTemplate = styled.div`
display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 151px;
 height: 48px;
 justify-content: center;
 align-items: center;
 margin-left: 10px;
 :hover {
  border: 1px solid #DD6B20 ;
  color: #DD6B20;
  cursor: pointer;
}
}
`;
const ButtonTask = styled.div`


display: flex;
border-radius: 3px;
border: 1px solid #8A827D
 width: 151px;
 height: 48px;
 justify-content: center;
 align-items: center;
 margin-left: 10px;
:hover {
  border: 1px solid #DD6B20 ;
  color: #DD6B20;
  cursor: pointer;
}

`;

const ButtonProjectCheck = {
  position: "absolute",
  right: "40px",
  display: "flex",
  borderRadius: "3px",
  width: "151px",
  height: "48px",
  justifyContent: "center",
  alignItems: "center"
};
const ButtonTaskCheck = {
  position: "absolute",
  right: "200px",
  display: "flex",
  borderRadius: "3px",
  width: "151px",
  height: "48px",
  justifyContent: "center",
  alignItems: "center"
};

const ButtonI = styled.i`
  margin-top: 3px;
  font-size: 21px;
  color: #8a827d;
`;
const ButtonText = styled.p`
  font-size: 19px;
  margin-left: 10px;
  color: #8a827d;
  margin-bottom: 0rem;
`;
const HideButton = {
  display: "none"
};

const HoverStyle = {
  color: "#DD6B20"
};

const SearchInput = styled.input`
  height: 48px;
  width: 100%;
  padding-left: 30px;
  border: 1px solid #dcd9d5;
  border-radius: 3px;
  background: #fafafa;
  ::placeholder {
    font-size: 16px;
    color: #b0b0b0;
  }
`;
const SearchTotal = styled.div`
  position: relative;
`;
const ButtonSearch = styled.i`
  position: absolute;
  left: 100%;
  top: 20%;
  border: none;
  font-size: 30px;
  color: #8a827d;
  text-align: center;

  z-index: 2;
  width: 20px;
  height: 20px;
`;
const SearchHoverStyle = {
  color: "#DD6B20"
};

function Header({ pathname }) {
  const { searchTerm, setSearchTerm, searchCatch, setSearchCatch } = useContext(
    searchTermContext
  );
  const [TaskHover, setTaskHover] = useState(false);
  const [ProjectHover, setProjectHover] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [DocumentHover, setDocumentHover] = useState(false);
  const [TemplateHover, setTemplateHover] = useState(false);
  const { openTemplate, setOpenTemplate } = useContext(OpenTemplateContext);
  const { addDocument } = useContext(DocumentsContext);
  const { addProject } = useContext(ProjectContext);
  const { addTask } = useContext(TasksContext);
  const { addTemplateTask, addTemplate } = useContext(TemplateContext);
  const { TaskModalStatus, setTaskModalStatus } = useContext(TaskContext);
  const [ProjectModalStatus, setProjectModalStatus] = useState(false);
  const [DocumentModalStatus, setDocumentModalStatus] = useState(false);

  const [TemplateTaskModalStatus, setTemplateTaskModalStatus] = useState(false);
  const [TemplateModalStatus, setTemplateModalStatus] = useState(false);

  console.log("this is the handlechange", searchCatch);
  console.log("this is the handlesubmit", searchTerm);
  // const { addTemplate } = useContext(TemplateContext)

  const handleTaskModalOpen = () => {
    setTaskModalStatus(true);
  };
  const handleTaskModalClose = () => {
    setTaskModalStatus(false);
  };
  const handleProjectModalOpen = () => {
    setProjectModalStatus(true);
  };
  const handleProjectModalClose = () => {
    setProjectModalStatus(false);
  };
  const handleTemplateModalOpen = () => {
    setTemplateModalStatus(true);
  };
  const handleTemplateModalClose = () => {
    setTemplateModalStatus(false);
  };
  const handleTemplateTaskModalOpen = () => {
    setTemplateTaskModalStatus(true);
  };
  const handleTemplateTaskModalClose = () => {
    setTemplateTaskModalStatus(false);
  };
  const handleDocumentModalOpen = () => {
    setDocumentModalStatus(true);
  };
  const handleDocumentModalClose = () => {
    setDocumentModalStatus(false);
  };

  const id = [];
  for (var i = 1; i <= 100; i++) {
    id.push(i);
  }

  const HideTheProjectButton = pathname => {
    if (
      pathname === "/documents" ||
      pathname === "/delay-log" ||
      pathname === `/help` ||
      pathname === "/log-out" ||
      pathname === "/90_Day" ||
      pathname.includes("templates") ||
      pathname === "/documents/add" ||
      pathname.includes("/mycalendar") ||
      pathname === "/" ||
      pathname === "/activity-feed"
    ) {
      return HideButton;
    } else {
      return ButtonProjectCheck;
    }
  };
  const HideTheDocumentButton = pathname => {
    if (
      pathname === "/log-out" ||
      pathname === "/delay-log" ||
      pathname === "/tasks" ||
      pathname === "/90_Day" ||
      pathname.includes("templates") ||
      pathname === "/documents/add" ||
      pathname.includes("/mycalendar") ||
      pathname === "/" ||
      pathname === "/activity-feed"
    ) {
      return HideButton;
    } else if (pathname === "/documents") {
      return SoloDocument;
    } else {
      return ButtonDocumentCheck;
    }
  };
  const HideTheTaskButton = pathname => {
    if (pathname === "/tasks") {
      return ButtonTaskCheck;
    } else {
      return HideButton;
    }
  };

  const HideTheTemplateButton = pathname => {
    if (pathname === "/templates") {
      return ButtonTemplateCheck;
    } else {
      return HideButton;
    }
  };
  const HideTheTemplateTaskButton = pathname => {
    if (
      pathname.includes("project") ||
      pathname === "/dashboard" ||
      pathname === "/tasks" ||
      pathname === "/projects" ||
      pathname === "/documents" ||
      pathname === "/templates" ||
      pathname === "/delay-log" ||
      pathname === `/help` ||
      pathname === "/log-out" ||
      pathname.includes("/documents") ||
      pathname.includes("/mycalendar") ||
      pathname === "/" ||
      pathname === "/activity-feed"
    ) {
      return HideButton;
    } else {
      return SoloTask;
    }
  };
  const HoverTaskStyleFunction = () => {
    if (TaskHover === true || TaskModalStatus === true) {
      return HoverStyle;
    }
  };
  const HoverProjectStyleFunction = () => {
    if (ProjectHover === true) {
      return HoverStyle;
    }
  };
  const HoverDocumentStyleFunction = () => {
    if (DocumentHover === true || DocumentModalStatus === true) {
      return HoverStyle;
    }
  };
  const HoverTemplateStyleFunction = () => {
    if (TemplateHover === true || openTemplate === true) {
      return HoverStyle;
    }
  };

  const OpenTemplateToggler = () => {
    if (openTemplate !== false) {
      setOpenTemplate(false);
    } else if (openTemplate === false) {
      setOpenTemplate(true);
    }
  };

  const searchOnHover = () => {
    if (searchTerm.length > 0) {
      return SearchHoverStyle;
    }
  };

  //// search function

  const handleChange = e => {
    setSearchTerm(e.target.value);
    // console.log("search term", searchTerm);
  };

  return (
    <HeaderContainer>
      <SearchContainer
        onMouseEnter={() => setSearchHover(true)}
        onMouseLeave={() => setSearchHover(false)}
      >
        <Link to="/tasks">
          <SearchTotal>
            <SearchInput
              type="text"
              placeholder="Search Tasks"
              value={searchTerm}
              onChange={handleChange}
              style={{ outline: "none" }}
            />
            <Link to="/tasks">
              {" "}
              <ButtonSearch
                className="ion-ios-search"
                style={searchOnHover()}
              />
            </Link>
          </SearchTotal>
        </Link>
      </SearchContainer>
      <ButtonContainer>
        <ButtonDocument
          onMouseEnter={() => setDocumentHover(true)}
          onMouseLeave={() => setDocumentHover(false)}
          style={HideTheDocumentButton(pathname)}
          onClick={handleDocumentModalOpen}
        >
          {" "}
          <ButtonI
            className="ion-ios-add-circle"
            style={HoverDocumentStyleFunction()}
          />{" "}
          <ButtonText style={HoverDocumentStyleFunction()}>
            Add Document
          </ButtonText>
        </ButtonDocument>

        <ButtonTask
          onMouseEnter={() => setTaskHover(true)}
          onMouseLeave={() => setTaskHover(false)}
          style={HideTheTaskButton(pathname)}
          onClick={handleTaskModalOpen}
        >
          {" "}
          <ButtonI
            className="ion-ios-add-circle"
            style={HoverTaskStyleFunction()}
          />
          <ButtonText style={HoverTaskStyleFunction()}>New Task</ButtonText>
        </ButtonTask>

        <ButtonTask
          onMouseEnter={() => setTaskHover(true)}
          onMouseLeave={() => setTaskHover(false)}
          style={HideTheTemplateTaskButton(pathname)}
          onClick={handleTemplateTaskModalOpen}
        >
          {" "}
          <ButtonI
            className="ion-ios-add-circle"
            style={HoverTaskStyleFunction()}
          />
          <ButtonText style={HoverTaskStyleFunction()}>New Task</ButtonText>
        </ButtonTask>

        <ButtonProject
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
          style={HideTheProjectButton(pathname)}
          onClick={handleProjectModalOpen}
        >
          {" "}
          <ButtonI
            className="ion-ios-add-circle"
            style={HoverProjectStyleFunction()}
          />
          <ButtonText style={HoverProjectStyleFunction()}>
            New Project
          </ButtonText>
        </ButtonProject>
        <ButtonTemplate
          onMouseEnter={() => setTemplateHover(true)}
          onMouseLeave={() => setTemplateHover(false)}
          style={HideTheTemplateButton(pathname)}
          onClick={handleTemplateModalOpen}
        >
          {" "}
          <ButtonI
            className="ion-ios-add-circle"
            style={HoverTemplateStyleFunction()}
          />
          <ButtonText style={HoverTemplateStyleFunction()}>
            New Template
          </ButtonText>
        </ButtonTemplate>

        <Modal
          visible={TaskModalStatus}
          dismiss={handleTaskModalClose}
          client={"45%"}
          component={
            <TaskForm
              closeModal={handleTaskModalClose}
              handleFunction={addTask}
              text={"Add Task"}
            />
          }
        />
        <Modal
          visible={TemplateModalStatus}
          dismiss={handleTemplateModalClose}
          client={"50%"}
          component={
            <TemplateForm
              closeModal={handleTemplateModalClose}
              handleFunction={addTemplate}
              text={"Add Template"}
            />
          }
        />
        <Modal
          visible={TemplateTaskModalStatus}
          dismiss={handleTemplateTaskModalClose}
          client={"50%"}
          component={
            <TemplateTaskForm
              closeModal={handleTemplateTaskModalClose}
              handleFunction={addTemplateTask}
              text={"Add Task"}
            />
          }
        />
        <Modal
          visible={ProjectModalStatus}
          dismiss={handleProjectModalClose}
          client={"40%"}
          component={
            <ProjectForm
              closeModal={handleProjectModalClose}
              handleFunction={addProject}
              text={"Add Project"}
              imgText={"Upload a Project Image"}
            />
          }
        />
        <Modal
          visible={DocumentModalStatus}
          dismiss={handleProjectModalClose}
          client={"50%"}
          component={
            <Uploader
              closeModal={handleDocumentModalClose}
              handleFunction={addDocument}
            />
          }
        />
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
