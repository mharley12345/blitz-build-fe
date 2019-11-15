import React from "react";
import styled, { css } from "styled-components";

function Task({ content, status }) {
  
  
  return (
    <Container
      red={true}
      status={status}
    >

      <Inner>
        <Address>
          <Text>32 Washington Street {status} </Text>
        </Address>

        <DueDate>
          <Text>Building Inspection</Text>
          <Date>3 days past due</Date>
        </DueDate>
      </Inner>
      <div>
        <Status>
          <p>Overdue</p>
        </Status>
      </div>
    </Container>
  );
}

export default Task;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  padding: 16px 32px 32px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  :nth-child(odd) {
    background: #FBFAF9;
  }
`;

const Address = styled.div`
  width: 225px;

  p {
    font-size: 14px;
    line-height: 16px;
    font-family: "Roboto";
    color: #3f3a36;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto";
  color: #3f3a36;
  margin-bottom: 8px;
`;

const DueDate = styled.div``;

const Date = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #3f3a36;
  font-family: "Roboto";
  font-weight: 500;
`;

const Status = styled.div`
  padding: 5px 16px 3px;
  background-color: #ffbfbf;
  color: #9c0e0e;
  border-radius: 30px;
  p {
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }

  ${props =>
    props.status === "Urgent" &&
    css`
      background-color: red;
      color: #fff;
    `};


`;

const Inner = styled.div`
  display: flex;
`;
