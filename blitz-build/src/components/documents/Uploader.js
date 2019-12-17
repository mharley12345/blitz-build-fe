import React, { useState,useContext } from 'react';
import {axiosWithAuth} from '../../utils/auth/axiosWithAuth';
import  OpenUploaderContext   from '../../contexts/documents/OpenUploaderContext'
import './DropZone.css'

let user_id = localStorage.getItem("user_id")
let project_name = localStorage.getItem("project_name")
const  Uploader = () => {
 const[uploaderState,setUploaderState] = useState({
  
                          success : false,
                          isActive : false,
                          doc_url : "",
                          user_id:user_id,
                          file_name:'',
                          project_name:project_name,
                          project_id:6,
                          createdAt:Date.now()

                           })
   
   const[uploadInput,setUploadInput] = useState([])
   const { openUploader , setOpen } =useContext(OpenUploaderContext)
 
  const handleChange = (ev) => {
    setUploaderState( 
        
      {...uploaderState,success: false, url : ""});
    
  }
  // Perform the upload
  const handleUpload = (ev) => {
      let input = ev.setUploadInput
    
    
    let file = uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = uploadInput.files[0].name.split('.');
   
    let fileName = fileParts[0];
    let fileType = fileParts[1];

    console.log("Preparing the upload",uploadInput,"STATE===>>>>",uploaderState);
    //Calls BE to get validated url 

    axiosWithAuth().post("/docs/documents",{
   
      fileName : fileName,
      fileType : fileType,
      user_id:uploaderState.user_id
    })
    .then(response => {
      console.log("RESPONSE",response)
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      setUploaderState({doc_url: url,file_name:fileName})
      console.log("Recieved a signed request " + signedRequest);
      console.log(uploaderState)
     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType
        }
      };
      //Uploads File to S3 bucket
      axiosWithAuth().put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        setUploaderState({...uploaderState,success: true});
})
.then(
 
      axiosWithAuth().post('docs/url',{
        doc_url : uploaderState.doc_url,
      user_id: uploaderState.user_id,
      file_name: uploaderState.file_name,
      project_id:uploaderState.project_id}))
      
      .catch(error => {
         console.log("ERROR ",error)
      })
    })
    .catch(error => {
      console.log("ERROR",error);
    })
  };
 
 
 
  

    const SuccessMessage = () => (
      <div style={{padding:50}}>
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
       
      
      </div>
        
    )
    if(uploaderState.success !== false){return SuccessMessage()}
    return (
         
      <div className="Uploader">

           <h1>Add A New Document</h1> <h6>Close X</h6>
          {uploaderState.success ? <SuccessMessage/> : null}
          <input onChange={handleChange} ref={(ref) => { setUploadInput(ref); }} type="file"/>
          <br/>
          <button onClick={handleUpload}>Add Document</button>
     
      </div>
    );
  }

export default Uploader;