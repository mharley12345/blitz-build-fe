import React from 'react'
import styled from 'styled-components'
import Search from '../styles/Search/Search.png'


function Header() {
    return (
        <HeaderContainer>
          <SearchContainer>
            
           <img  src={Search} alt="Blitz-Build-Search"/>
           </SearchContainer>
         
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 96px;

`;

const SearchContainer= styled.div`
  margin: 24px 32px;


`