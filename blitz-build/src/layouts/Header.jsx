import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import  Search from '../styles/Search/Search.png'
import TasksContext from '../contexts/tasks/TaskContext'
import Modal from '../components/global/Modal'
import TaskForm from '../components/tasks/TaskForm'
import { NavLink } from 'react-router-dom'
import OpenContext from '../contexts/projects/OpenContext'
import AddProject from  '../components/modal/AddProject'
const HeaderContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;

`;

const SearchContainer= styled.div`
  margin: 24px 32px;
  width: 464px;

`
const ButtonContainer=styled.div`
display: flex;
margin-top: 24px;
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
font-size: 19px
margin-left: 10px;
color: #8A827D

`
const HideButton = { 
display: 'none',

}

const HoverStyle = {
  color: '#DD6B20'
}







function Header({pathname}) {
  
  const [ TaskHover, setTaskHover ] = useState(false)
  const [ ProjectHover, setProjectHover ] = useState(false)
  const [ DocumentHover, setDocumentHover ] = useState(false)

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

  const HideTheProjectButton = (pathname) => {
  
 if(pathname === '/projects' || pathname === '/dashboard' || pathname === '/tasks') {
     return ButtonProjectCheck
 }
 else {
     return HideButton
 }  };
 const HideTheDocumentButton = (pathname) => {
  
  if( pathname === '/dashboard' || pathname === '/projects' ) {
      return ButtonDocumentCheck
  }
  else if(pathname === '/documents') {

    return SoloDocument

  }
  else {
      return HideButton
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

const OpenToggle = () => {
  if(open !== false) {
    setOpen(false)
  }
  else if (open === false) {
    setOpen(true)
  }
}

    return (
        
        <HeaderContainer >
            <SearchContainer>
                
           <img  src={Search} alt="Blitz-Build-Search"/>
                
           </SearchContainer>
            <ButtonContainer>
          <ButtonDocument  onMouseEnter={() => setDocumentHover(true)}
                       onMouseLeave={() =>  setDocumentHover(false) }style= {HideTheDocumentButton(pathname)}> <ButtonI className = 'ion-ios-add-circle' style={HoverDocumentStyleFunction()}/> <ButtonText style={HoverDocumentStyleFunction()}>New Document</ButtonText></ButtonDocument>
          <ButtonProject  onMouseEnter={() => setProjectHover(true)}
                       onMouseLeave={() =>  setProjectHover(false) }style = {HideTheProjectButton(pathname)} onClick={OpenToggle}>  <ButtonI className = 'ion-ios-add-circle'style={HoverProjectStyleFunction()}/><ButtonText style={HoverProjectStyleFunction()}>New Project</ButtonText></ButtonProject>
          <ButtonTask  onMouseEnter={() => setTaskHover(true)}
                       onMouseLeave={() =>  setTaskHover(false) } style = {HideTheTaskButton(pathname)} onClick={ handleTaskModalOpen }>  <ButtonI className = 'ion-ios-add-circle' style={HoverTaskStyleFunction()}/><ButtonText style={HoverTaskStyleFunction()}>New Task</ButtonText></ButtonTask>
          <Modal
        visible={ TaskModalStatus }
        dismiss={ handleTaskModalClose }
        client={'50%'}
        component={
          <TaskForm 
          closeModal={ handleTaskModalClose } 
          handleFunction={ addTask }
          text={ 'Add Task' }
        />
        }
      />
          </ButtonContainer>
          <AddProject/>
        </HeaderContainer>
         
    )
}

export default Header




