import React,{useContext} from "react"
import DocumentContext from  '../../contexts/documents/DocumentsContext.js'

import {axiosWithAuth} from '../../utils/auth/axiosWithAuth'
import styled from  'styled-components'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import Download from '@axetroy/react-download';


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
      axiosWithAuth().get(`/docs/download/${fileName}/bucket`)
      .then(response =>{
        console.log(response)
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
          <ImgContainer>
          <Print>
          <img  src={URL}  alt=""/>
          </Print>
         </ImgContainer>
        </NoPrint>

      <NoPrint>
      <div className="button-container">
  <input type='button' value="Print" onClick={handlePrint}/>

  </div>
  <Download file={fileName} content={"img"}>
          <button type="button">Download</button>
          </Download>
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