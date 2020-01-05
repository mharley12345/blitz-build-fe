import React from "react"

import './documents.scss'
const  ViewDocument =  (props) =>{
  
 const {params,file_name,docs_url,document} = props
//  console.log("view1",props) 
//  console.log("view2",documents)
console.log(params,props,document)
  const user_id = localStorage.getItem("user_id")
  const fileName = props.match.params.file_name
   console.log(window)
  // console.log(fileName,user_id)
  const URL = `https://blitz-build.s3.amazonaws.com/${user_id}/${fileName}`
 
    const handlePrint =(e) =>{
      e.preventDefault();
      window.print();
 
    }
    const handleDownload =(e)=>{
      e.preventDefault()
       window.downloads.download(document)
    }

    return (
    

      <>
      <div className ="doc-container">
 
      
       <header>{`File Name:${fileName}`}</header>
          <div className="img-container">
          <img  src={URL}  alt=""/>
         </div>
      
      </div>
      
      <div className="button-container">
  <input type='button' value="Print" onClick={handlePrint}/>

  </div>
  <input type='button' value="Download" onClick={handleDownload}/>
  </>
 
  
    )
}
export default ViewDocument