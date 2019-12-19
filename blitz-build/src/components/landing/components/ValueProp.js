import React from "react"
import styled from "styled-components"

import { media, mediaDown } from "../styles/media"

const Container = styled.div`
  display: flex;
  padding: 128px 144px;
  justify-content: center;
  align-items: center;
  padding: 20px;


  ${media.medium`
  min-height: 496px;
  `};
`

const BoxGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.medium`
    justify-content: space-between;
    width: 100%;
    width: 1200px;
  `};

  ${media.large`
  flex-direction: row;
  `}
`

const Box = styled.div`
  height: 212px;
  margin-bottom: 24px;
  width: 100%;
  height: 100%;
  text-align: center;

  :nth-child(3) {
    margin: 0px;
  }

  ${media.medium`
  margin-right: 24px;
  width: 100%;
  text-align: left;
  `}
`

const Subtitle = styled.h1`
  font-family: "Roboto";
  font-size: 24px;
  line-height: 28px;
  color: black;
  font-weight: 600;
  margin-bottom: 24px;
  color: #232323;
`

const Line = styled.div`
  height: 2px;
  background: #dcd9d5;
  margin-bottom: 32px;
`

const P = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  line-height: 32px;
  color: black;
  margin-bottom: 24px;
  color: #3b3b3b;
`

const ValueProp = () => {
  return (
    <Container>
      <BoxGroup>
        <Box>
          <Subtitle>1. Controle complexity</Subtitle>
          <Line />
          <P>
            Managing multiple home-builds at once is hard. We make it easier to
            adapt theoretical knowledge to the real-world work environment.
          </P>
        </Box>
        <Box>
          <Subtitle>2. Streamline workflows</Subtitle>
          <Line />
          <P>
            Add individual tasks or pre-set templates to organize your work.
            Execute each task or customize as you need.
          </P>
        </Box>
        <Box>
          <Subtitle>3. Improve Results</Subtitle>
          <Line />
          <P>
            Move faster and meet your business goals. Stay on budget and track
            delays when they inevitably arise.
          </P>
        </Box>
      </BoxGroup>
    </Container>
  )
}

export default ValueProp
