import React,{useState,useEffect} from "react";
import styled from "styled-components";
import {axiosWithAuth} from "../../utils/auth/axiosWithAuth";
import {Link} from 'react-router-dom'
const user_id = localStorage.getItem('user_id')

const  DocumentCard = (props) => {
  const[document,setDocument] =useState([])

  useEffect(() =>{
 
    axiosWithAuth()
    .get(`/docs/url`,user_id)
     
    .then(response =>{
      let docs = response.data
      console.log(docs)
     
    
    
      setDocument(docs)
    })
  },[])

  console.log(document)
  return (
   
    <DocumentCardContainer>
   {document.map((documents)=>{
     
    return(<>
          <Name>{documents.file_name}</Name>
             <Right>  
       <a href ={documents.doc_url} rel="noopener noreferrer" target="_blank">View</a>
    
        </Right>
        </>
     )})}
    </DocumentCardContainer>
    
    
  )
  }
export default DocumentCard;

const DocumentCardContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 500px;
  height: 300px;
`;

const Name = styled.div`
  width: 200px;
  text-transform:uppercase;
  height: 24px;
  margin-top: 16px;
  margin-left: 32px;
  font-family: Roboto;
font-size: 16px;

  /* 800 Gray */

  color: #3b3b3b;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
  margin-left: 206px;
  font-size: 14px;
  color: #8a827d;
`;
const Time = styled.div`
 height: 24px;
`;