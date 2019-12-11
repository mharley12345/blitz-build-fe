import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import templateContext from "../../contexts/templates/TemplateContext";
import searchTermContext from "../../contexts/searching/searchTerm";
import AddTemplate from "../modal/AddTemplate";
import styled, { css } from "styled-components";
import TemplateMeatBallsDrop from './TemplateMeatBalls'
const Templates = () => {
  const { templates } = useContext(templateContext);

  const { searchTerm } = useContext(searchTermContext);
  const templatesSearchInput = searchTerm.toLowerCase();
  const [templatesSearchResults, settemplateSearchResults] = useState([]);

  useEffect(() => {
    axiosWithAuth().post('/90_day').then(templates =>{
      console.log(templates)
    const results = templates.filter(template =>
      template.template_name.toLowerCase().includes(templatesSearchInput)
    );
    console.log("RESULTS:", results);
    settemplateSearchResults(results);
  })}, [templatesSearchInput]);
console.log(templates);
  return (
    <div>
      <Section>
        {" "}
        <p> Your Templates </p>
      </Section>

      {templates.map(template => {
        return (
      <Container>
        <Name>{template.template_name}</Name>
        <TemplateMeatBallsDrop template={template}/>
      </Container>
        );
      })}
    
        <AddTemplate />
    
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
