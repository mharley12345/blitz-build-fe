import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function NavBar ({navLinks, background, hoverBackground, linkColor, logo }) {
   const [ hoverIndex, setHoverIndex ] = useState(-1)
   const [navOpen, setNavOpen ] = useState(false)
//    console.log(navLinks, background, hoverBackground, linkColor, logo)

   return (
       <nav className= "nav-bar"
       style={{ background }}>
        <ul style = {{ background }}
            className= { navOpen ? 'active' : '' }                
        >
        {/* functionality for opening and closing the nav */}

            <figure onClick={() => setNavOpen(!navOpen)}>
          
                <h1>Blitz Build</h1>

            </figure>
                   {navLinks.map((link, index) => 

         //// links recieve their text and icons through app.js          

                       <li
                       onMouseEnter={() => setHoverIndex(index)}
                       onMouseLeave={() => setHoverIndex(-1) }
                       style={{ background: hoverIndex === index ? ( hoverBackground || '#999') : '' }}
                       >
                           
                          <Link to= {link.path}  style = {{ color: linkColor || 'black' }}>
                              <p>
                            { link.text } 
                            </p>
                            <i className = {link.icon}/>
                              </Link>
                           
                      </li>
                   )}
               
           </ul>


       </nav>
   )

}

export default NavBar