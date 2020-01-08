import React,{useContext} from "react"
import DocumentContext from  '../../contexts/documents/DocumentsContext.js'

import {axiosWithAuth} from '../../utils/auth/axiosWithAuth'
import styled from  'styled-components'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import Download from '@axetroy/react-download';

/**TODO
 *  react-easy-print is  imported and <print> / <noprint> tags are placed 
 *  in proper postion but it still prints the everything on the screen.
 *  Please see /contexts/documents/DocumentsProvider.js, ./PrintDocument.js  
 *   and  ./confirmPrint.js to see the flow of the print function
 */
const  ViewDocument =  (props) =>{

   const { handleDownload } = useContext(DocumentContext)
   const {params,document} = props
 console.log(handleDownload)
console.log(params,props,document)
  const user_id = localStorage.getItem("user_id")
  const fileName = props.match.params.file_name
   console.log(window)
   console.log(fileName,user_id)
   const URL = `https://blitz-build.s3.amazonaws.com/${user_id}/${fileName}`
   
    const handlePrint =(e) =>{
      e.preventDefault();
      window.print();
 
    }

    function DownloadDocument() {
    
      axiosWithAuth().get(URL)
      .then(response =>{
         return response
      })
    }

    return (
    
<PrintProvider>
<NoPrint>
      <DocViewer>
    
     <NoPrint>
     <Print>
       <header>{`File Name:${fileName}`}</header>
       </Print>
         <Print>
          <ImgContainer>
        
          <img  src={URL}  alt=""/>
          
         </ImgContainer>
        </Print>
      
      <div className="button-container">
  <input type='button' value="Print" onClick={handlePrint}/>

  </div>
  {/* Not working as expected hidden from view. It should save the loaded 
   document to the users local. It does download a txt file with the correct}
  {/* <Download file={fileName} content={"img"}>
          <button type="button" value="Download" onclick={DownloadDocument}>Download</button>
          </Download> */}
  </NoPrint>
  </DocViewer>
 </NoPrint>
 </PrintProvider>
  
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