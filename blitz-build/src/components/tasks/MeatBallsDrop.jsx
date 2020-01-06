import React, { useState, useEffect, useRef, useContext } from "react";

/*
MeatBallsDrop is a multi use dropdown that is used inside the Task.js
component. Its contents will change depending on the url it is 
rendered in.
*/

//a package for parsing query strings
import queryString from "query-string";

import CompleteTask from "./CompleteTask";
import ActivateTask from "./ActivateTask"
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import AddDelayReason from "../delayLog/AddDelayReason";
import PathnameContext from "../../contexts/PathnameContext";
import EditTemplateTask from "../templates/EditTemplateTask";
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
  const [dropStatus, setDropStatus] = useState(false);
  const [completeStatus, setCompleteStatus] = useState(false);
  const [activateStatus, setActivateStatus] = useState(false);

  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [delayStatus, setDelayStatus] = useState(false);
  const { pathname, setPathname } = useContext(PathnameContext);
  useEffect(() => {
    setPathname(window.location.pathname);
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = e => {
    if (refContainer.current && !refContainer.current.contains(e.target)) {
      closeDrop();
    }
  };

  const toggleDrop = e => {
    e.stopPropagation();
    setDropStatus(!dropStatus);
  };

  const closeDrop = e => {
    setDropStatus(false);
  };

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

  const hideOnTemplates = () => {
    if (pathname.includes("/templates")) {
      return Hidden;
    }
  };

  const hideOnComplete = () => {
    const queryValues = queryString.parse(window.location.search);
    if (queryValues.filter === "COMPLETE") {
      return Hidden;
    }
  };

  const hideOnActive = () => {
    const queryValues = queryString.parse(window.location.search);
    if (queryValues.filter === "ACTIVE" || pathname.includes("/dashboard") ||pathname.includes("/projects")) {
      return Hidden;
    }


  };

  const Hidden = {
    display: "none"
  };

  const checkThePage = (editTask, editTemplateTask, completeTask, activateTask) => {
    if (pathname.includes("/templates")) {
      return editTemplateTask;
    } else {
      return (
        <>
          {editTask} {completeTask} {activateTask}
        </>
      );
    }
  };

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
              <StyledLi style={hideOnTemplates(),hideOnComplete()}>
                <DropP onClick={handleCompleteOpen}>Complete</DropP>
                <TaskI className="ion-md-checkmark-circle" />
              </StyledLi>
              <StyledLi style={hideOnTemplates(), hideOnActive()}>
                <DropP onClick={handleActivateOpen}>Undo</DropP>
                <TaskI className="ion-md-undo" />
              </StyledLi >
              <StyledLi onClick={handleEditOpen}  style={hideOnComplete()}>
                <DropP>Edit</DropP>
                <TaskI className="ion-md-create" />
              </StyledLi>
              <StyledLi onClick={handleDelayOpen} style={hideOnTemplates(),hideOnComplete()}>
                <DropP>Delay</DropP>
                <TaskI className="ion-md-clock" />
              </StyledLi>
              <StyledLi onClick={handleDeleteOpen}>
                <DropP>Delete</DropP>
                <TaskI className="ion-md-trash" />
              </StyledLi>
            </DropDown>
          </>
        )}
      </MeatBalls>
      {checkThePage(
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
