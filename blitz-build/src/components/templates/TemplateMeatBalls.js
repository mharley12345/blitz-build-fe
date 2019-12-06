import React, { useState, useEffect, useRef } from "react";

import EditTemplate from "./EditTemplate";
import DeleteTemplate from "./DeleteTemplate";

//styles
import styled from "styled-components";
import {
  TaskI,
  StyledLi,
  MeatBalls,
  DropDown,
  DropP
} from "../../styles/Tasks/tasks";

export default function TemplateMeatBallsDrop({ template }) {
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
             
              <StyledLi onClick={handleEditOpen}>
                <DropP>Edit</DropP>
                <TaskI className="ion-md-create" />
              </StyledLi>
              <StyledLi onClick={handleDeleteOpen}>
                <DropP>Delete</DropP>
                <TaskI className="ion-md-trash" />
              </StyledLi>
            </DropDown>
          </>
        )}
      </MeatBalls>
      <EditTemplate
        template={template}
        closeDrop={closeDrop}
        editStatus={editStatus}
        handleEditClose={handleEditClose}
      />
      <DeleteTemplate
        template={template}
        closeDrop={closeDrop}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
      />
      
    </>
  );
}