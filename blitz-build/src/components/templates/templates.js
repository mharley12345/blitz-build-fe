import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { usePathnameContext } from "../../contexts/PathnameContext";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import { useTemplateContext } from "../../contexts/templates/TemplateContext";

import styled, { css } from "styled-components";
import TemplateMeatBallsDrop from "./TemplateMeatBalls";
const Templates = props => {
  //local state
  const [NinetyDayBuild, setNinetyDayBuild] = useState();

  //importing custom templates and pathname from context
  const { setPathname } = usePathnameContext();
  const { templates } = useTemplateContext();

  //this function gets the template name of the pre built template for all users
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
    axiosWithAuth()
      .post("/90_day")
      .then(templates => {
        console.log(templates);
        // const results = templates.filter((template =>
        //   template.template_name.toLowerCase().includes(templatesSearchInput)
        // ));
        // console.log("RESULTS:", results);
        // settemplateSearchResults(results);
      });
  }, []);
  console.log("these are the templates: ", templates);
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
            <Link
              style={LinkStyle}
              to={`/templates/${template.id}`}
              onClick={() =>
                localStorage.setItem(
                  "template_id",
                  template.id,
                  "template_name",
                  template.name
                )
              }
            >
              <Name>{template.template_name}</Name>
            </Link>
            <TemplateMeatBallsDrop template={template} />
          </Container>
        );
      })}
    </div>
  );
};

export default Templates;

const LinkStyle = {
  textDecoration: "none"
};

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    line-height: 19px;
    color: #212529;
    font-weight: 600;
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
export const Name = styled.div`
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
