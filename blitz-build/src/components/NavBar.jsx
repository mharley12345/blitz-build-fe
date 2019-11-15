import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import media from '../styles/sizes'




const NavBarContainer = styled.div`
    position: fixed;
    height: 1000px;
    width: 10%;
    margin-top: -20px;
    margin-left: -1%;
    box-shadow: 2px 2px 2px #ccc;
    margin-right: 10%;
    background-color: lightgrey;
`;
    const NavBarUl = styled.ul`
        background: #3F3A36;
        display: flex;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        height: 110%;
        width: 100%;
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
            ${media.extraLarge`
            display: none;
`}
        `;

        const NavBarLi = styled.li` 
            list-style-type: none;
            padding: 10px 0px;
            width: 100%;
            margin: 7px 0px;
            align-items: center;
        `;
        const DividedNavBarLi = styled.li` 
        list-style-type: none;
        padding: 10px 0px;
        width: 100%;
        margin: 7px 0px;
        align-items: center;
    `;
        const DividedLinks = styled.li` 
        border-top: 1px solid white;
        list-style-type: none;
        padding: 10px 0px;
        width: 100%;
        margin: 7px 0px;
        align-items: center;
    `;

       const NavBarLink = {
            color: '#FFFFFF',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            marginRight: '1.5em',
            fontSize: '.8em',
            height: '20px',
         
          } ;
       const NavLinkHover = (hoverIndex, index) => {
           if(hoverIndex === index)
           return HoverStyles
       }   

       const HoverStyles = {
           backgroundColor: '#27221F',
           borderRadius: '3px',
           borderLeft: '#DD6B20',
        }
            const NavBarP = styled.p`
                width: 60%;
                margin-left: 20px;
                ${media.extraLarge`
               display: none;
                                 `}
            `;
             const NavBarI = styled.i`
           align-items: center;
            font-size: 1.4em;
            ${media.extraLarge`
              margin-top: 40%;
              margin-right: 35%;
                            `}
        `;

       

function NavBar ({ MenuDividedLinks, navLinks, background, hoverBackground, linkColor, logo, }) {
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
          
                <h1>Blitz Build</h1>

            </NavBarFigure>
                   {navLinks.map((link, index) => 

         //// links recieve their text and icons through app.js          

                       <NavBarLi
                       onMouseEnter={() => setHoverIndex(index)}
                       onMouseLeave={() => setHoverIndex(-1) }
                       style={NavLinkHover(hoverIndex, index)}
                       >
                           
                          <Link to= {link.path}  style = {NavBarLink} > 
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