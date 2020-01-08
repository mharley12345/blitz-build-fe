import React, { useState, useEffect, useRef, useContext } from "react";

<<<<<<< HEAD
/*
MeatBallsDrop is a multi use dropdown that is used inside the Task.js
component. Its contents will change depending on the url it is 
rendered in.
*/

//a package for parsing query strings
import queryString from "query-string";

import CompleteTask from "./CompleteTask";
import ActivateTask from "./ActivateTask"
=======
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import AddDelayReason from "../delayLog/AddDelayReason";
import PathnameContext from "../../contexts/PathnameContext";
<<<<<<< HEAD
import EditTemplateTask from "../templates/EditTemplateTask";

=======
import EditTemplateTask from '../templates/EditTemplateTask'
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
//styles
import {
  TaskI,
  StyledLi,
  MeatBalls,
  DropDown,
  DropP
} from "../../styles/Tasks/tasks";

export default function MeatBallsDrop({ task }) {
  const refContainer = useRef();
  //local state
  const [dropStatus, setDropStatus] = useState(false);
<<<<<<< HEAD
  const [completeStatus, setCompleteStatus] = useState(false);
  const [activateStatus, setActivateStatus] = useState(false);
  
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [delayStatus, setDelayStatus] = useState(false);
  //state of pathname from context
  const { pathname, setPathname } = useContext(PathnameContext);
=======
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
const [delayStatus, setDelayStatus] = useState(false);
const { pathname, setPathname } = useContext(PathnameContext);
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
  useEffect(() => {
    setPathname(window.location.pathname);
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = e => {
    if (refContainer.current && !refContainer.current.contains(e.target)) {
      closeDrop();
    }
  };
  //toggles the meatballs dropdown
  const toggleDrop = e => {
    e.stopPropagation();
    setDropStatus(!dropStatus);
  };

  //closes meatballs dropdwon
  const closeDrop = e => {
    setDropStatus(false);
  };

<<<<<<< HEAD
  //complete task
  const handleCompleteOpen = e => {
    e.stopPropagation();
    setCompleteStatus(true);
  };
  const handleCompleteClose = e => {
    setCompleteStatus(false);
    closeDrop();
  };

  //activate task
  const handleActivateOpen = e => {
    e.stopPropagation();
    setActivateStatus(true);
  };
  const handleActivateClose = e => {
    setActivateStatus(false);
    closeDrop();
  };

=======
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
  //edit modal functions
  const handleEditOpen = e => {
    e.stopPropagation();
    setEditStatus(true);
  };
  const handleEditClose = e => {
    setEditStatus(false);
    closeDrop();
 
  };

  //delete modal functions
  const handleDeleteOpen = e => {
    e.stopPropagation();
    setDeleteStatus(true);
  };
  const handleDeleteClose = e => {
    setDeleteStatus(false);
    closeDrop();
  
  };
//delay modal functions
  const handleDelayOpen = e => {
    e.stopPropagation();
    setDelayStatus(true);
    
  };
  const handleDelayClose = e => {
    setDelayStatus(false);
    closeDrop();
  };

  //function that hides certain options for templates
  const hideOnTemplates = () => {
<<<<<<< HEAD
    const queryValues = queryString.parse(window.location.search);
    if (pathname.includes("/templates")) {
      return Hidden;
    }
    else if(queryValues.filter === "COMPLETE" && pathname.includes('/templates') ) {
      return Hidden;
    }
    else if(queryValues.filter === "ACTIVE" || pathname.includes("/dashboard"))
    {
      return Hidden
    }
  };

  const hideOnComplete = () => {
    const queryValues = queryString.parse(window.location.search);
    if (queryValues.filter === "COMPLETE") {
      return Hidden;
    }
  };
const Hidden = {
    display: "none"
  };
  const hideOnActive = () => {
    const queryValues = queryString.parse(window.location.search);
    if (queryValues.filter === "ACTIVE" || pathname.includes("/dashboard")) {
      return Hidden;
    }


  };

  

  //returns specific options for templates
  const checkThePage = (editTask, editTemplateTask, completeTask, activateTask) => {
    if (pathname.includes("/templates")) {
      return (<>{editTemplateTask}</>);
    } else {
      return (
        <>
          {editTask} {completeTask} {activateTask}
        </>
      );
    }
  };
  
const pageCheck = (complete, undo, edit, delay, deleated) => {
  const queryValues = queryString.parse(window.location.search);
     if (pathname.includes('/templates')) {
     return <>{edit}{deleated}</>
     }
     else if(queryValues.filter === "ACTIVE" || pathname.includes("/dashboard")) {
       return <>{complete}{edit}{delay}{deleated} </>
     }
     else if(queryValues.filter === "COMPLETE") {
     return <>{undo}{deleated}</>
     }
     else if(pathname.includes('projects')) {
      return <>{complete}{edit}{delay}{deleated} </>
     }
  }
  

  // const checkThePageOptions = (complete, undo, edit, delay, delete )
=======
    if(pathname.includes('/templates')){
      return Hidden
    }
    
  }

  const Hidden = {
    display: 'none'
  }

  const checkThePage = (editTask, editTemplateTask) => {
    if (pathname.includes('/templates')) {
      return editTemplateTask
    }
    else {
      return editTask
    }
  }
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee

  return (
    <>
      <MeatBalls
        className="ion-ios-more"
        onClick={toggleDrop}
        ref={refContainer}
      >
        {dropStatus && (
          <>

            <DropDown>
<<<<<<< HEAD
             {pageCheck(
              <StyledLi>
                <DropP onClick={handleCompleteOpen}>Complete</DropP>
=======
              {/* <Geo></Geo> */}
              <StyledLi style={hideOnTemplates()}>
                <DropP>Complete</DropP>
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
                <TaskI className="ion-md-checkmark-circle" />
              </StyledLi>,
              <StyledLi >
                <DropP onClick={handleActivateOpen}>Undo</DropP>
                <TaskI className="ion-md-undo" />
              </StyledLi >,
              <StyledLi onClick={handleEditOpen} >
                <DropP>Edit</DropP>
                <TaskI className="ion-md-create" />
<<<<<<< HEAD
              </StyledLi>,
              <StyledLi onClick={handleDelayOpen}>
=======
              </StyledLi>
              <StyledLi onClick={handleDelayOpen} style= {hideOnTemplates()}>
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
                <DropP>Delay</DropP>
                <TaskI className="ion-md-clock" />
              </StyledLi>,
              <StyledLi onClick={handleDeleteOpen}>
                <DropP>Delete</DropP>
                <TaskI className="ion-md-trash" />
              </StyledLi>,)} 
            </DropDown>
          </>
        )}
      </MeatBalls>
      {checkThePage(
<<<<<<< HEAD
        <EditTask
          task={task}
          closeDrop={closeDrop}
          editStatus={editStatus}
          handleEditClose={handleEditClose}
        />,
        <EditTemplateTask
          task={task}
          closeDrop={closeDrop}
          editStatus={editStatus}
          handleEditClose={handleEditClose}
        />,
        <CompleteTask
          task={task}
          closeDrop={closeDrop}
          completeStatus={completeStatus}
          handleCompleteClose={handleCompleteClose}
        />,
        <ActivateTask
          task={task}
          closeDrop={closeDrop}
          activateStatus={activateStatus}
          handleActivateClose={handleActivateClose}
        />
=======
      <EditTask
        task={task}
        closeDrop={closeDrop}
        editStatus={editStatus}
        handleEditClose={handleEditClose}
      />,
      <EditTemplateTask 
      task={task}
      closeDrop={closeDrop}
      editStatus={editStatus}
      handleEditClose={handleEditClose}
    />
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
      )}
      <DeleteTask
        task={task}
        closeDrop={closeDrop}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
      />
      <AddDelayReason
        task={task}
        closeDrop={closeDrop}
        delayStatus={delayStatus}
        handleDelayClose={handleDelayClose}
      />
    </>
  );
}
