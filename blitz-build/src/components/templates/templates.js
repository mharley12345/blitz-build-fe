import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PathnameContext from "../../contexts/PathnameContext";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import templateContext from "../../contexts/templates/TemplateContext";
import searchTermContext from "../../contexts/searching/searchTerm";
import AddTemplate from "../modal/AddTemplate";
import styled, { css } from "styled-components";
import TemplateMeatBallsDrop from "./TemplateMeatBalls";
const Templates = props => {
  const { templates } = useContext(templateContext);
  const [NinetyDayBuild, setNinetyDayBuild] = useState();

  const { searchTerm } = useContext(searchTermContext);
  const templatesSearchInput = searchTerm.toLowerCase();
  const [templatesSearchResults, settemplateSearchResults] = useState([]);
  const { pathname, setPathname } = useContext(PathnameContext);

  const seedData = () => {
    setPathname(window.location.pathname);
    axiosWithAuth()
      .get("/90_Day")
      .then(res => {
        setNinetyDayBuild(res.data[0].template_name);
      })
      .catch(err => {
        console.log(err);
      });
  };

  seedData();

  useEffect(() => {
    axiosWithAuth().post('/90_day').then(templates =>{
      console.log(templates)
    // const results = templates.filter((template =>
    //   template.template_name.toLowerCase().includes(templatesSearchInput)
    // ));
    // console.log("RESULTS:", results);
    // settemplateSearchResults(results);
  })}, [templatesSearchInput]);
console.log(templates);
  return (
    <div>
      <Section>
        {" "}
        <p> Your Templates </p>
      </Section>

      <Container>
        <Link to={`/90_Day`} style={LinkStyle}>
          <Name>{NinetyDayBuild}</Name>
        </Link>
      </Container>

      {templates.map(template => {
        return (
          // <div>
          //   <Container>
          //     <Link to={`/templates/${template.id}`}>
          //       <Name>{template.template_name}</Name>
          //     </Link>
          //     <TemplateMeatBallsDrop />
          //   </Container>
          // </div>
          <Container>
            <Link style={LinkStyle}
              to={`/templates/${template.id}`}
              onClick={() => localStorage.setItem("template_id", template.id,"template_name",template.name)}
            >
              <Name>{template.template_name}</Name>
            </Link>
            <TemplateMeatBallsDrop template={template} />
          </Container>
        );
      })}

      <AddTemplate />
    </div>
  );
};

export default Templates;

const LinkStyle = {
  textDecoration: 'none',
  
  }
 
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
  width: 500px;
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
