import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import media from '../styles/sizes'



const NavBarContainer = styled.div`
    margin-top: 180px;
    position: fixed;
    width: 296px;
    height: 1574px;
    left: 0px;
    top: 0px;
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
            width: 85%;
          :nth-child(8) {
            border-top: 1px solid white;
            margin-top: 40px;
          }
        `;
        

       const NavBarLink = {
            color: '#FFFFFF',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            fontSize: '16px',
            height: '20px',
            width:'120px',
            marginTop: '30px',
            marginLeft: '50px',
           
          } ;
       const NavLinkHover = (hoverIndex, index) => {
           if(hoverIndex === index)
           return HoverStyles
       }   

       const HoverStyles = {
           backgroundColor: '#27221F',
           borderRadius: '3px', 
           borderLeft: ' 4px solid #DD6B20',
           
        }
            const NavBarP = styled.p`
                width: 80px;
                margin-left: 15px;
           
            `;
             const NavBarI = styled.i`
           align-items: center;
            font-size: 1.4em;
           
        `;

       

           
function NavBar ({ MenuDividedLinks, navLinks, background, hoverBackground, linkColor, logo, setPathname }) {
   const [ hoverIndex, setHoverIndex ] = useState(-1)
   const [navOpen, setNavOpen ] = useState(false)
  
//    console.log(navLinks, background, hoverBackground, linkColor, logo)

   return (
       <NavBarContainer 
       style={{ background }}>
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
                           
                          <Link   to= {link.path}  style = {NavBarLink}  > 
                              <NavBarP>
                            { link.text } 
                            </NavBarP>
                            <NavBarI className = {link.icon}/>
                              </Link>

                           
                           
                      </NavBarLi>
                   )} 
             
                   
      
           </NavBarUl>

       </NavBarContainer>
       
      
   )

}

export default NavBar