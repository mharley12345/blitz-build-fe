import React, { useState, useEffect } from "react";

import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

//styles
import styled from "styled-components";
import { TaskI, StyledLi, MeatBalls, DropDown } from "../../styles/Tasks/tasks";

export default function MeatBallsDrop({ task }) {
  const [dropStatus, setDropStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

//   useEffect(() => {
//     document.addEventListener("mousedown", );
//   }, [])


  const toggleDrop = e => {
    e.stopPropagation();
    setDropStatus(!dropStatus);
  };

  const closeDrop = () => {
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

  return (
    <>
      <MeatBalls className="ion-ios-more" onClick={toggleDrop}>
        {dropStatus && (
          <DropDown>
            <StyledLi>
              Complete
              <TaskI className="ion-md-checkmark-circle" />
            </StyledLi>
            <StyledLi onClick={handleEditOpen}>
              Edit
              <TaskI className="ion-md-create" />
            </StyledLi>
            <StyledLi>
              Delay
              <TaskI className="ion-md-clock" />
            </StyledLi>
            <StyledLi onClick={handleDeleteOpen}>
              <p style={{ width: "75%" }}>Delete </p>
              <TaskI className="ion-md-trash" />
            </StyledLi>
          </DropDown>
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
    </>
  );
}
