import React from "react";

import styled from "styled-components";
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
`;

const ConfirmBtn = styled.button`
background: ${props => (props.delete ? "#FF4D4F" : "white")};
color: ${props => (props.delete ? "white" : "#FF4D4F")};
display: flex;
border-radius: 3px;
border: 1px solid #FF4D4F
width: 125px;
height: 40px;
justify-content: center;
align-items: center;
margin-right: 10px;
margin-top:36px;
cursor: pointer;
`;


export default function Confirm(props) {

    const { closeModal, text, deleteFunction, deleteItem } = props;
    return (
      <ConfirmStyle>
        <div style={{ textAlign: "right", height: "50px" }}>
          <XButton onClick={closeModal}>close X</XButton>
        </div>

        <H1 style={{ fontSize: "30px", fontWeight: 600, marginBottom: "15px" }}>
          Delete {text}
        </H1>

        <p>Are you sure you want to delete?</p>
        <BtnDiv>
          <ConfirmBtn onClick={closeModal}>Cancel</ConfirmBtn>
          <ConfirmBtn
            delete
            onClick={() => {
              deleteFunction(deleteItem);
              closeModal();
            }}
          >
            Delete
          </ConfirmBtn>
        </BtnDiv>
      </ConfirmStyle>
    );
}

