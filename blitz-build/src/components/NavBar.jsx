import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'





const NavBarContainer = styled.div`

    height: 100%;
    width: 200px;
    position: fixed;
    margin-top: -22px;
    margin-left: -20px;
    box-shadow: 2px 2px 2px #ccc;
`;
    const NavBarUl = styled.ul`
        background: #d1d0d0;
        display: flex;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        height: 110%;
        width: 100%;
        align-items: center;
        flex-direction: column;
       
        top: 60px;
        box-shadow: 2px 2px 2px #ccc;
        transition: 300ms ease all;
       
        `;

       const NavBarFigure = styled.figure`
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 2px;
            margin-inline-end: 0;
            cursor: pointer;
        `;

        const NavBarLi = styled.li` 
            list-style-type: none;
            padding: 10px 0px;
            width: 100%;
            margin: 10px 0px;
            align-items: center;
        `;
       const NavBarLink = {
            color: 'rgb(0, 0, 0)',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '40px',
            marginRight: '25px',
          } ;

            const NavBarP = styled.p`
                width:80px;
            `;
             const NavBarI = styled.i`
           align-items: center;
            font-size: 25px;
        `;

       

function NavBar ({navLinks, background, hoverBackground, linkColor, logo }) {
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
                       style={{ background: hoverIndex === index ? ( hoverBackground || '#999') : '' }}
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