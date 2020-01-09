import React from 'react'

//styles
import styled from 'styled-components'
import * as color from "../styles/color"


function Nav() {
    return (
        <Container>
            {/* <LogoContainer>
           <img  src={Logo} alt="Blitz-Build-Logo"/>
           </LogoContainer>
           <UserProfile>
               <img src={Avatar} alt="Blitz-Build-Avatar"/>
           </UserProfile> */}
        </Container>
    )
}

export default Nav

const Container = styled.div`
 min-width: 160px;
 height: 100vh;
@media only screen and (min-width: 1500px) {
 
 
  min-width: 296px;
  background:  ${color.greyDark};
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
`;
const LogoContainer = styled.div`
  margin: 29.25px 108px 35px 74.8px;
  postion: fixed;
`
const UserProfile = styled.div`
postion: fixed;
width: 155px;
height: 48px;
`