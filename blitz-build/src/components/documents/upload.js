import React, { Component } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
class Uploader extends Component {
  constructor(props){
    super(props);
    this.state = {
      success : false,
      url : "",
      user_id:localStorage.getItem('user_id'),
      fileName:''
    }
  }
  
  handleChange = (ev) => {
    this.setState({success: false, url : ""});
    
  }
  // Perform the upload
  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    this.setState({fileName:fileName})
    console.log("Preparing the upload");
    axiosWithAuth().post("/docs/documents",{
      fileName : fileName,
      fileType : fileType,
      user_id: this.state.user_id
    })
    .then(response => {
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);
      axiosWithAuth().post('/docs/addurl',{
          file_name:this.state.fileName,
          doc_url:url,
          user_id:this.state.user_id
      }).then(response=>{console.log(response)})
     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType,

        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        this.setState({success: true});
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
  }
  
  
  render() {
    const Success_message = () => (
      <div style={{padding:50}}>
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
        <br/>
      </div>
    )
    return (
      <div className="Uploader">
        <center>
          <h1>UPLOAD A FILE</h1>
          {this.state.success ? <Success_message/> : null}
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
          <br/>
          <button onClick={this.handleUpload}>UPLOAD</button>
        </center>
      </div>
    );
  }
}
export default Uploader;