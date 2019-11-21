import React from "react";
import styled, { css } from "styled-components";

function Task({ item }) {
  const today = new window.Date().toISOString().slice(0, 10);
  const project_date = "2019-11-21";

  function DateCalc(today, project_date) {
    if (today === project_date) {
      return "Pending";
    } else if (today > project_date) {
      return "Past";
    } else if (today < project_date) {
      return "Upcoming";
    }
  }

  const status = DateCalc(today, project_date);

  return (
    <Container>
      <Inner>
        <Address>
          <Text>{item.project_name}</Text>
        </Address>

        <DueDate>
          <Text>{item.street_address}</Text>
          <Date>{item.due_date}</Date>
        </DueDate>
      </Inner>
      <div>
        <Status status={status}>
          <p>{status}</p>
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
    background: #fbfaf9;
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
  background-color: grey;
  color: black;
  border-radius: 30px;

  p {
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }

  ${props =>
    props.status === "Urgent" &&
    css`
      background-color: #ffbfbf;
      color: #9c0e0e;
    `};

  ${props =>
    props.status === "Pending" &&
    css`
      background-color: #fff3b3;
      color: #8b4708;
    `};

  ${props =>
    props.status === "Overdue" &&
    css`
      background-color: #d2fac4;
      color: #326021;
    `};
`;

const Inner = styled.div`
  display: flex;
`;
