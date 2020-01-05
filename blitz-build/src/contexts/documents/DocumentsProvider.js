import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';

//context
import DocumentsContext from './DocumentsContext'

export default function DocumentsProvider({ children }){
    const [documents, setDocuments] = useState([])
    const user_id = localStorage.getItem('user_id')
    const file_name = localStorage.getItem('file_name')
   
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
     const handleDelete = (event) => {
         console.log(event)
       const file_name= event.file_name
       const user_id = event.user_id
         axiosWithAuth().delete(`docs/url/${file_name}`,user_id)
  
        .then(res => {
            console.log("document was deleted", res)
            const newDocumentList = documents.filter(document =>{
                return document.file_name !== documents.id
            })
            setDocuments(newDocumentList);
            window.location.reload(true)

        })
        .catch(err =>{
            console.log(err);
        
        })
    }

    const printDocument = (event)=>{
      const file_name = event.file_name
    }
       
  const downloadDocument = (event) => {
    console.log(event.target)
    const file_name = event.file_name
    axiosWithAuth().post('/docs/download',file_name)
    .then(data => {
        console.log("GOT DATA")
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