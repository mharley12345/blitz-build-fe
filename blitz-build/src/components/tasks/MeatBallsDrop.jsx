import React, { useState, useEffect, useRef, useContext } from "react";

import CompleteTask from "./CompleteTask";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import AddDelayReason from "../delayLog/AddDelayReason";
import PathnameContext from "../../contexts/PathnameContext";
import EditTemplateTask from "../templates/EditTemplateTask";
//styles
import styled from "styled-components";
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

  //complete
  const handleCompleteOpen = e => {
    e.stopPropagation();
    setCompleteStatus(true);
  };
  const handleCompleteClose = e => {
    setCompleteStatus(false);
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

  const Hidden = {
    display: "none"
  };

  const checkThePage = (editTask, editTemplateTask) => {
    if (pathname.includes("/templates")) {
      return editTemplateTask;
    } else {
      return editTask;
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
            {/* <Geo></Geo> */}
            <DropDown>
              {/* <Geo></Geo> */}
              <StyledLi style={hideOnTemplates()}>
                <DropP onClick={handleCompleteOpen}>Complete</DropP>
                <TaskI className="ion-md-checkmark-circle" />
              </StyledLi>
              <StyledLi onClick={handleEditOpen}>
                <DropP>Edit</DropP>
                <TaskI className="ion-md-create" />
              </StyledLi>
              <StyledLi onClick={handleDelayOpen} style={hideOnTemplates()}>
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
        // <CompleteTask
        //   task={task}
        //   closeDrop={closeDrop}
        //   editStatus={completeStatus}
        //   handleEditClose={handleCompleteClose}
        // />,
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
