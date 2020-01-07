import React from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
import moment from 'moment'
import styled from 'styled-components'
import { CloseButton } from 'react-bootstrap';
let user_id = localStorage.getItem("user_id")
let project_Name = localStorage.getItem("project_name")
let projectID = localStorage.getItem("projectID")
class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      isActive: false,
      doc_url: "",
      user_id: user_id,
      file_name: '',
      project_name: '',
      project_id: '',

      createdAt: moment().format('l')
    }
 
  }

  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");


    axiosWithAuth().post("/docs/documents", {

      fileName: fileName,
      fileType: fileType,
      user_id: this.state.user_id
    })
      .then(response => {
        console.log("S3 RESPONSE", response)
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        this.setState({ ...this.state, doc_url: url, file_name: fileName, success: true ,project_id:projectID,project_name:project_Name})
        console.log("Recieved a signed request " + signedRequest);

        // Put the fileType in the headers for the upload
        var options = {
          headers: {
            'Content-Type': fileType
          }
        };
        //Uploads File to S3 bucket
        axiosWithAuth().put(signedRequest, file, options)

          .then(result => {
           
            console.log("Response from s3", result)

          })

          .then(

            axiosWithAuth().post('docs/url', {
              doc_url: this.state.doc_url,
              createdAt: this.state.createdAt,
              project_name: this.state.project_id,
              user_id: this.state.user_id,
              file_name: this.state.file_name,
              project_id: this.state.project_id
            }))
        console.log(this.state)

      })

  };






  render() {
    const SuccessMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.doc_url}>Access the file here</a>
        <br />
      </div>
    )
    return (
      <>

        <Uploaders>

          {this.state.success ? <SuccessMessage /> : null}
          <DropZone>
          <CloseButton onClick={this.props.closeModal}>X</CloseButton>
            <Title>Add A Document</Title>

           
            <Message>Drag and drop a file</Message>
            <DrpZnWrapper>
              <BtnWrap>

                <input name="upload" onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />

              </BtnWrap>
              <H3>or choose a file</H3>
            </DrpZnWrapper>



            <Button onClick={this.handleUpload}>Add Document</Button>
          </DropZone>
        </Uploaders>
      </>
    );
  }
}

const DrpZnWrapper = styled.div`
border:3px dashed black;
`
const BtnWrap = styled.div`
 font-size: 100px;

  left: 0;
  top: 0;
  opacity: 0;

`
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


color: #232323;
  `
const Uploaders = styled.div`
  

  `
const Title = styled.h1`


width: 490px;
height: 38px;
left: 474px;
top: 144px;



font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 37px;


color: #232323;
`
const DropZone = styled.div`
  
             width: 604px;
            height: 493px;
            left: 418px;
            top: 96px;



           background: #FFFFFF;
           border-radius: 3px

`
export default Uploader;