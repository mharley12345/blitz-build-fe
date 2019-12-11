import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import  Search from '../styles/Search/Search.png'
import TasksContext from '../contexts/tasks/TaskContext'
import Modal from '../components/global/Modal'
import TaskForm from '../components/tasks/TaskForm'
import { NavLink } from 'react-router-dom'
import OpenContext from '../contexts/projects/OpenContext'
import OpenTemplateContext from '../contexts/OpenTemplateContext'
// import AddProject from  '../components/modal/AddProject'
import searchTermContext from '../contexts/searching/searchTerm'
import AddProject from "../components/modal/AddProject";
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

const SearchContainer= styled.div`
  margin: 24px 32px;
  width: 464px;

`
const ButtonContainer=styled.div`
display: flex;
margin-top: 24px;
margin-bottom: 24px;
margin-right: 25px;
width: 400px;
justify-content: center;

`

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
  
}
`
const ButtonDocumentCheck = {
  display: 'flex',
  borderRadius: '3px',
   width: '174px',
   height: '48px',
   justifyContent: 'center',
   alignItems: 'center',
   
  }
  const ButtonTemplateCheck = {
    display: 'flex',
    borderRadius: '3px',
     width: '174px',
     height: '48px',
     justifyContent: 'center',
     alignItems: 'center',
    marginLeft: '160px',
     
    }
const SoloDocument = {
  display: 'flex',
  borderRadius: '3px',
   width: '174px',
   height: '48px',
   justifyContent: 'center',
   alignItems: 'center',
  marginLeft: '160px',
 
}
const ButtonProject = styled.div `
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
`
const ButtonTemplate = styled.div `
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
`
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

`

const ButtonProjectCheck = {
display: 'flex',
borderRadius: '3px',
 width: '151px',
 height: '48px',
 justifyContent: 'center',
 alignItems: 'center',
 
}

const ButtonI =styled.i`
margin-top: 3px;
 font-size: 21px;
 color: #8A827D
 

`
const ButtonText = styled.p`
font-size: 19px;
margin-left: 10px;
color: #8A827D

`
const HideButton = { 
display: 'none',

}

const HoverStyle = {
  color: '#DD6B20'
}

const SearchInput = styled.input`
  height: 48px;
  width: 464px;
  padding-left: 30px;
  border: 1px solid #DCD9D5;
  border-radius: 3px;
  background: #FAFAFA;
  ::placeholder {
    font-size: 16px;
    color: #B0B0B0;
   
  }
`






function Header({pathname}) {
  const {searchTerm, setSearchTerm} =  useContext(searchTermContext);
  const [ TaskHover, setTaskHover ] = useState(false)
  const [ ProjectHover, setProjectHover ] = useState(false)
  const [ DocumentHover, setDocumentHover ] = useState(false)
  const [ TemplateHover, setTemplateHover ] = useState(false)
  const { openTemplate, setOpenTemplate }  = useContext(OpenTemplateContext)
  const { addTask } = useContext(TasksContext);
  const { open, setOpen } = useContext(OpenContext)
  const [TaskModalStatus, setTaskModalStatus] = useState(false);
  const [ProjectModalStatus, setProjectModalStatus] = useState(false);
  const [DocumentModalStatus, setDocumentModalStatus] = useState(false);


  const handleTaskModalOpen = () => {
    setTaskModalStatus(true);
  };
  const handleTaskModalClose = () => {
    setTaskModalStatus(false);
  };

  const id = [];
  for (var i = 1; i <= 100; i++) {
      id.push(i)
  }

  const HideTheProjectButton = (pathname) => {
  
 if(pathname === '/documents' || pathname === '/templates' || pathname === '/delay-log' || pathname === `/help` || pathname === '/log-out') {
     return HideButton
 }
 else {
     return ButtonProjectCheck
 }  };
 const HideTheDocumentButton = (pathname) => {
  
  if( pathname === '/templates' || pathname === '/delay-log' || pathname === '/tasks' ) {
      return HideButton
  }
  else if(pathname === '/documents') {

    return SoloDocument

  }
  else {
      return ButtonDocumentCheck
  }  
}
const HideTheTaskButton = (pathname) => {
  
  if( pathname === '/tasks' ){
      return ButtonProjectCheck
  }
  
  else {
      return HideButton
  }  
}

const HideTheTemplateButton = (pathname) => {
  if (pathname === '/templates') {
    return ButtonTemplateCheck
  }
  else {
    return HideButton
  }
}
const HoverTaskStyleFunction = () => {
  if (TaskHover === true || TaskModalStatus === true) {
    return HoverStyle
  }
}
const HoverProjectStyleFunction = () => {
  if (ProjectHover === true || open === true) {
    return HoverStyle
  }
}
const HoverDocumentStyleFunction = () => {
  if (DocumentHover === true || DocumentModalStatus === true) {
    return HoverStyle
  }
}
const HoverTemplateStyleFunction = () => {
  if (TemplateHover === true || openTemplate === true) {
    return HoverStyle
  }
}

const OpenToggler = () => {
  if(open !== false) {
    setOpen(false)
  }
  else if (open === false) {
    setOpen(true)
  }
}
const OpenTemplateToggler = () => {
  if(openTemplate !== false) {
    setOpenTemplate(false)
  }
  else if (openTemplate === false) {
    setOpenTemplate(true)
  }
}
//// search function 

const checkThePage = (inputProject, inputTasks, inputDocuments, inputTemplates, inputDelayLog, inputDashboard) => {
  if(pathname === '/projects') {
   return inputProject
  }
  else if (pathname ==='/documents') {
    return inputDocuments
  }
  else if (pathname === '/templates') {
    return inputTemplates
  }
  else if (pathname ==='/delay-log'){
    return inputDelayLog
  }
  else if (pathname ==='/dashboard'){
    return inputDashboard
  }
  else  {
    return inputTasks
  }
}

const handleChange = e => {
  setSearchTerm(e.target.value);
  // console.log("search term", searchTerm);
};

    return (
      <HeaderContainer>
        <SearchContainer>
          { checkThePage( <SearchInput
             type="text"
             placeholder='Search Projects'
             value={searchTerm}
             onChange={handleChange}
           />, 
           <SearchInput
           type="text"
           placeholder='Search Tasks'
           value={searchTerm}
           onChange={handleChange}
         />,
         <SearchInput
         type="text"
         placeholder='Search Documents'
         value={searchTerm}
         onChange={handleChange}
       />,
       <SearchInput
       type="text"
       placeholder='Search Templates'
       value={searchTerm}
       onChange={handleChange}
     />,
     <SearchInput
     type="text"
     placeholder='Search Delay Log'
     value={searchTerm}
     onChange={handleChange}
   />,
   <SearchInput
   type="text"
   placeholder='Search Dashboard'
   value={searchTerm}
   onChange={handleChange}
 />
      
            )}
          
        </SearchContainer>
        <ButtonContainer>
          <ButtonDocument
            onMouseEnter={() => setDocumentHover(true)}
            onMouseLeave={() => setDocumentHover(false)}
            style={HideTheDocumentButton(pathname)}
          >
            {" "}
            <ButtonI
              className="ion-ios-add-circle"
              style={HoverDocumentStyleFunction()}
            />{" "}
            <ButtonText style={HoverDocumentStyleFunction()}>
              New Document
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

          <ButtonProject
            onMouseEnter={() => setProjectHover(true)}
            onMouseLeave={() => setProjectHover(false)}
            style={HideTheProjectButton(pathname)}
            onClick={OpenToggler}
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
            onClick={OpenTemplateToggler}
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
            client={"50%"}
            component={
              <TaskForm
                closeModal={handleTaskModalClose}
                handleFunction={addTask}
                text={"Add Task"}
              />
            }
          />
        </ButtonContainer>
        <AddProject/>
      </HeaderContainer>
    );
}

export default Header




