import React from "react";

import styled from "styled-components";
import * as color from "../../styles/color";

import { XButton } from "../../styles/Tasks/tasks";

const ConfirmStyle = styled.div`
  padding-left: 30px;
  padding-bottom: 30px;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const H1 = styled.h1`
  text-align: left;
  height: 50px;
`;

const ConfirmBtn = styled.button`
cursor: pointer;
background: ${props => (props.complete ? color.primaryColor : "white")};
color: ${props => (props.complete ? "white" : color.primaryColor)};
display: flex;
border-radius: 3px;
border: 1px solid #FF4D4F
width: 125px;
height: 40px;
justify-content: center;
align-items: center;
margin-right: 10px;
margin-top:36px;
:hover {

`;

export default function ConfirmComplete({
  task,
  closeModal,
  confirmFunction,
  text,
  btnText
}) {
  return (
    <ConfirmStyle>
      <div style={{ textAlign: "right", height: "50px" }}>
        <XButton onClick={closeModal}>close X</XButton>
      </div>

      <H1 style={{ fontSize: "30px", fontWeight: 600 }}>{task.task_name}.</H1>

      <p>{text}</p>
      <BtnDiv>
        <ConfirmBtn onClick={closeModal}>Cancel</ConfirmBtn>
        <ConfirmBtn
          complete
          onClick={() => {
            confirmFunction(task);
            closeModal();
          }}
        >
          {btnText}
        </ConfirmBtn>
      </BtnDiv>
    </ConfirmStyle>
  );
}
