import React, { useContext, useEffect, useState } from "react";
import TemplatesProvider from "../../contexts/templates/TemplateProvider";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import PathnameContext from "../../contexts/PathnameContext";
import TemplateContext from '../../contexts/templates/TemplateContext'
import searchTermContext from '../../contexts/searching/searchTerm'
import styled, { css } from "styled-components";
import MeatBallsDrop from '../tasks/MeatBallsDrop'
import { set } from "date-fns";
const IndividualTemplate = props => {
  const {templateTask, setTemplatesTask, getTemplateTasks} = useContext(TemplateContext);
  const { pathname, setPathname } = useContext(PathnameContext);
  const { searchTerm } = useContext(searchTermContext)
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([]);
  console.log(templateTask)
  useEffect(() => {
    const results= templateTask.filter(task =>
    task.task_name.toLowerCase().includes(taskSearchInput)
      
      ) 
  console.log("RESULTS:", results);
      setTaskSearchResults(results);
    setPathname(window.location.pathname);
    getTemplateTasks();
  }, [taskSearchInput]);

  return (
   <div>
      <Section>
      <h1>individual template</h1>
      </Section>
     
      {templateTask.map(task => {
         if(taskSearchResults.length > 0) {
          return (
            <div>

            </div>
          )
        }
        else {
        return  <Container> <TitleText>{task.task_name}</TitleText> <MeatBallsDrop task={task}/> </Container>;
      }
      })}
        { taskSearchResults.length > 0 ?
              taskSearchResults.map(result => (
                <Container> <TitleText>{result.task_name}</TitleText> <MeatBallsDrop task={result}/> </Container>
             )) : <p></p>
            }
   </div>
   
  );
};

export default IndividualTemplate;

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