import React from 'react';
import {axiosWithAuth} from '../../utils/auth/axiosWithAuth';
import moment from 'moment'
import './DropZone.css'
import styled from 'styled-components'
let user_id = localStorage.getItem("user_id")
let project_name = localStorage.getItem("project_name")
let projectID = localStorage.getItem("projectID")
class Uploader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      success : false,
      isActive : false,
      doc_url : "",
      user_id:user_id,
      file_name:'',
      project_name:project_name,
      project_id:projectID,
      
      createdAt: moment().format('l')
    }
    let Success = this.state.success
  }
 
  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");


    axiosWithAuth().post("/docs/documents",{
   
      fileName : fileName,
      fileType : fileType,
      user_id:this.state.user_id
    })
    .then(response => {
      console.log("RESPONSE",response)
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      this.setState({...this.state,doc_url: url,file_name:fileName,sucess:true})
      console.log("Recieved a signed request " + signedRequest);
     
     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType
        }
      };
      //Uploads File to S3 bucket
      axiosWithAuth().put(signedRequest,file,options)
       
      .then(result => {
        let Successful = this.setState({success:true})
        console.log("Response from s3",result,Successful)
 
})

.then(
 
      axiosWithAuth().post('docs/url',{
        doc_url : this.state.doc_url,
        createdAt: this.state.createdAt,
        project_name:this.state.project_id,
      user_id: this.state.user_id,
      file_name: this.state.file_name,
      project_id:this.state.project_id}))
      console.log(this.state)
      .catch(error => {
         console.log("ERROR ",error)
      })
    })
    .catch(error => {
      console.log("ERROR",error);
    })
  };
 
 
 
  


   render(){
    const SuccessMessage = () => (
      <div style={{padding:50}}>
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.doc_url}>Access the file here</a>
        <br/>
      </div>
    )
    return (
         
      <Uploaders>
    
    {this.state.success ? <SuccessMessage/> : null}
           <Title>Add A New Document</Title>   <button  onClick={this.props.closeModal} >X Close</button>
           <DropZone>
   
           <Message>Drag and drop a file</Message>
           <div class="upload-btn-wrapper">
           <H3>or choose a file</H3>
          <input name="upload"  onChange={this.handleChange}  ref={(ref) => { this.uploadInput = ref; }} type="file"/>
           
             </div> 
    
          <br/>
          <Button onClick={this.handleUpload}>Add Document</Button>
     </DropZone>
      </Uploaders>
    );
  }
}

  const H3 = styled.h3`

width: 492px;
height: 21px;
left: 474px;
top: 337px;
padding-top: 4rem;
    padding-left: 11rem;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


align-items: center;
text-align: center;

/* 600 Orange */

color: #DD6B20;
  `

  const Button = styled.button`
  


width: 200px;
height: 48px;
left: 620px;
top: 493px;

/* 600 Orange */

background: #DD6B20;
border-radius: 3px;
  
  `

  const Message = styled.h1`
  

width: 492px;
height: 28px;
left: 474px;
top: 301px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
text-align: center;

/* 600 Gray */

color: #232323;
  `
  const Uploaders = styled.div `
  

width: 604px;
height: 493px;
left: 418px;
top: 96px;

/* white */

background: #FFFFFF;
border-radius: black 3px;
  `
const Title = styled.h1`

position: absolute;
width: 490px;
height: 38px;
left: 474px;
top: 144px;

/* Heading 2 */

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 37px;


color: #232323;
`
const DropZone = styled.div`

position: absolute;
width: 492px;
height: 231px;
left: 474px;
top: 214px;



border: 1px dashed #817974;
box-sizing: border-box;
`
export default Uploader;