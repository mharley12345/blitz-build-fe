import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
import filesaver from  'filesaverjs'
import Download from '@axetroy/react-download';

//context
import DocumentsContext from './DocumentsContext'

export default function DocumentsProvider({ children }){
    const [documents, setDocuments] = useState([])
  
   
    useEffect(() => {
        getDocuments(res => setDocuments(res));
        
    }, [])
    const getDocuments = () =>{
 
        axiosWithAuth()
     .get('/docs/url')
      .then(res =>{
        let docs = res.data
        return   setDocuments(docs)
          
      })
       .catch(err =>{
           console.log('Documents Error',err);
       })
    }
 console.log(documents)
     const handleDelete = (document) => {
         
         console.log(document)
       const file_name = document.file_name
       const user_id = document.user_id
         axiosWithAuth().delete(`/docs/url/${file_name}`,user_id)
  
        .then(res => {
            console.log("document was deleted", res)
            const newDocumentList = documents.filter(d =>{
                return d.id !== document.id
            })
            setDocuments(newDocumentList);
           

        })
        .catch(err =>{
            console.log(err);
        
        })
    }

    // const printDocument = (event)=>{
    //   const file_name = event.file_name
    // }
       
  const downloadDocument = props => {

   const file_name = documents.file_name
    axiosWithAuth().get(`/docs/download/${file_name}/bucket`)
    .then(data => {
      if (data)       
          console.log("stream")
          Download(data,'blitz-build.jpg')
    })
  }

     return (
         <div>
             <DocumentsContext.Provider value={{
              documents,
              setDocuments,
              handleDelete,
              downloadDocument
              
            //   printDocument,
            //   downloadDocument
              }}
              >
             {children}
             </DocumentsContext.Provider>
         </div>
     )
            }