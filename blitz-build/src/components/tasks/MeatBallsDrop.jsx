import React, { useState, useEffect, useRef } from "react";

import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import AddDelayReason from "../delayLog/AddDelayReason";
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
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
const [delayStatus, setDelayStatus] = useState(false);
  useEffect(() => {
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
              <StyledLi>
                <DropP>Complete</DropP>
                <TaskI className="ion-md-checkmark-circle" />
              </StyledLi>
              <StyledLi onClick={handleEditOpen}>
                <DropP>Edit</DropP>
                <TaskI className="ion-md-create" />
              </StyledLi>
              <StyledLi onClick={handleDelayOpen}>
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
      <EditTask
        task={task}
        closeDrop={closeDrop}
        editStatus={editStatus}
        handleEditClose={handleEditClose}
      />
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
