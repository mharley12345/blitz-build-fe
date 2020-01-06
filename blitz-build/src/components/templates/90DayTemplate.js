import React, { useEffect, useState, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import PathnameContext from "../../contexts/PathnameContext";
import styled, { css } from "styled-components";

const NinetyDayTemplate = props => {
  //local state
  const [templateTasks, setTemplateTasks] = useState([]);
  //state of pathname from context
  const { pathname, setPathname } = useContext(PathnameContext);

  //this grabs the pre built template, 90_day and then grabs all the tasks from it.
  useEffect(() => {
    setPathname(window.location.pathname);
    axiosWithAuth()
      .get(`/90_Day`)
      .then(res => {
        console.log("template tasks", res);
        setTemplateTasks(res.data);
        console.log(templateTasks);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(templateTasks);
  return (
    <div>
      <h1>90 Day Template</h1>
      {templateTasks.map(tasks => {
        return (
          <Container>
            <TitleText>{tasks.task_name}</TitleText>
          </Container>
        );
      })}
    </div>
  );
};

export default NinetyDayTemplate;

const TitleText = styled.p`
  width: 200px;

  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto";
  color: #3f3a36;
  margin-bottom: 8px;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 19px;
    color: #8a827d;
    font-weight: 500;
  }
`;

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

const Card = styled.div`
  border: 1px solid #dcd9d5;
`;
