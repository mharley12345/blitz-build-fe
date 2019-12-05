import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import axios from "axios";
import styled, { css } from "styled-components";
const Templates = () => {
  const [templates, setTemplates] = useState([]);
 console.log(templates);
  useEffect(() => {
    axios
      .get("https://staging-blitz-build.herokuapp.com/templates")
      .then(res => {
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Section>
          {" "}
          <p> Your Templates </p>
        </Section>

        <Container>
        <Name>this is the template name</Name>
        </Container>
      {templates.map(template => {
       
        return (
          <div>
            <p>{template.template_name}</p>
         
          </div>
        );
      })}
    </div>
  );
};

export default Templates;

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
  align-items: center;
  :nth-child(odd) {
    background: #fbfaf9;
  }
  cursor: pointer;
`;
const Name = styled.div`
  /* Heading 4 */
  width: 50%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* 500 Gray */

  color: #3f3a36;
`;