import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
const Templates = () => {
  const [templates, setTemplates] = useState();

  useEffect(() => {
    axios
      .get("https://staging-blitz-build.herokuapp.com/templates", templates)
      .then(res => {
        console.log(res);
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <Section>
          {" "}
          <p> Your Templates </p>
        </Section>
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