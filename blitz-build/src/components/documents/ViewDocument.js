import React from "react"


import {axiosWithAuth} from '../../utils/auth/axiosWithAuth'
import styled from  'styled-components'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
// import Download from '@axetroy/react-download';

/**TODO
 *  react-easy-print is  imported and <print> / <noprint> tags are placed 
 *  in proper postion but it still prints  everything on the screen.
 *  Please see /contexts/documents/DocumentsProvider.js, ./PrintDocument.js  
 *   and  ./confirmPrint.js to see the flow of the print function
 */
const  ViewDocument =  (props) =>{

  

  const user_id = localStorage.getItem("user_id")
  const fileName = props.match.params.file_name
  
   const URL = `https://blitz-build.s3.amazonaws.com/${user_id}/${fileName}`
   
    const handlePrint =(e) =>{
      e.preventDefault();
      window.print();
 
    }
   
    // function DownloadDocument() {
    
    //   axiosWithAuth().get(URL)
    //   .then(response =>{
    //      return response
    //   })
    // }

    return (
    


      <DocViewer>
    
    <PrintProvider>
     <Print>
       <header>{`File Name:${fileName}`}</header>
       </Print>
     
          <ImgContainer>
          <Print>
          <img  src={URL}  alt=""/>
        </Print>

         </ImgContainer>
         </PrintProvider>
      
      <div className="button-container">
  <input type='button' value="Print" onClick={handlePrint}/>

  </div>
   {/* Download Function Not Workiing as expected It should download the loaded
     document / image. It downloads a .txt file with the URL inside. The content needs to be changed 
     to the actual file content that is being downloaded 
  <Download file={fileName} content={URL}>
          <button type="button" value="Download" onclick={DownloadDocument}>Download</button>
          </Download>
 */}
 
  </DocViewer>


  
    )
}
export default ViewDocument

const DocViewer = styled.div`
width:1200px,
height:700px,
font-size:40px
`
const ImgContainer = styled.div`
width:400px
`