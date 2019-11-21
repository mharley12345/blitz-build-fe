import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import media from '../styles/sizes'
import Logo from '../styles/Logo/Logo.png'
import Avatar from '../styles/Avatar/Avatar.png'


const NavBarContainer = styled.div`
   margin-top: 20px;
    display: flex;
    flex-direction: column;
    background-color: red;
    position: fixed;
    width: 296px;
    height: 1574px;
    left: 0;
    top: 0;
    background: #3F3A36;
    
`;
    const NavBarUl = styled.ul`
        
        background: #3F3A36;
        display: flex;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        height: 1574px;
        align-items: center;
        flex-direction: column;
        box-shadow: 2px 2px 2px #ccc;
        transition: 300ms ease all;
        
       
        `;

       const NavBarFigure = styled.figure`
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: .1%;
            margin-inline-end: 0;
            cursor: pointer;
           
        `;

        const NavBarLi = styled.li` 
        
            list-style-type: none;
            height: 70px;
            align-items: center;
            border-radius: 5px;
            width: 85%;
            margin: 5px;
          :nth-child(8) {
            border-top: 1px solid white;
            border-radius: 0px;
            margin-top: 40px;
          }
        `;
      const NavScrollableContainer = styled.div`
        overflow: scroll;
        ::-webkit-scrollbar { 
            display: none; 
        }
      `

       const NavBarLink = {
            color: '#FFFFFF',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            height: '100%',
            width:'100%',
           
        
           
          } ;
       const NavLinkHover = (hoverIndex, index) => {
           if(hoverIndex === index)
           return HoverStyles
       }   

       const HoverStyles = {
           backgroundColor: '#4f4843',
          
           
           
        }
            const NavBarP = styled.p`
                width: 80px;
                margin-left: 15px;
           
            `;
             const NavBarI = styled.i`
           align-items: center;
            font-size: 1.4em;
           
        `;

      const LogoContainer = styled.div`
     
     
      `
      const UserProfile = styled.div`
      
    
      `
      const LogoAvatarContainer = styled.div`
      height: 160px
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-content: space-between;
      
      align-items: center;
      `
       
           
function NavBar ({ MenuDividedLinks, navLinks, background, hoverBackground, linkColor, logo, setPathname }) {
   const [ hoverIndex, setHoverIndex ] = useState(0)
   const [navOpen, setNavOpen ] = useState(false)
  
//    console.log(navLinks, background, hoverBackground, linkColor, logo)

   return (
       <NavBarContainer 
       style={{ background }}>
        <NavScrollableContainer>
       <LogoAvatarContainer>
           <LogoContainer>
           <img  src={Logo} alt="Blitz-Build-Logo"/>
           </LogoContainer>
           <UserProfile>
               <img src={Avatar} alt="Blitz-Build-Avatar"/>
           </UserProfile>
        </LogoAvatarContainer>

        <NavBarUl style = {{ background }}
            className= { navOpen ? 'active' : '' }                
        >
        {/* functionality for opening and closing the nav */}
 
            <NavBarFigure onClick={() => setNavOpen(!navOpen)}>
          
               

            </NavBarFigure>
                   {navLinks.map((link, index) => 

         //// links recieve their text and icons through app.js          
 
     <NavBarLi onClick={()=> (setPathname(window.location.pathname))}
                       onMouseEnter={() => setHoverIndex(index)}
                       onMouseLeave={() => setHoverIndex(-1)}
                      
                       style={NavLinkHover(hoverIndex, index)}
                       >
                           
                          <NavLink to={link.path}  activeStyle={{ backgroundColor: '#27221F',
           borderRadius: '3px', 
           borderLeft: ' 4px solid #DD6B20', marginLeft: '-4px'
  }} style = {NavBarLink}  > 
                              <NavBarP>
                            { link.text } 
                            </NavBarP>
                            <NavBarI className = {link.icon}/>
                              </NavLink>

                           
                           
                      </NavBarLi>
                      
                   )} 
             
                   
      
           </NavBarUl>
           </NavScrollableContainer>
       </NavBarContainer>
       
      
   )

}

export default NavBar