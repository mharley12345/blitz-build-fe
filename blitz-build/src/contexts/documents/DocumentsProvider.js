import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';

//context
import DocumentsContext from './DocumentsContext'

export default function DocumentsProvider({ children }){
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        getDocuments();
    }, [])
    const getDocuments = () =>{
        axiosWithAuth()
     .get('/docs/url')
      .then(res =>{
          console.log("get Documents",res.data)
          setDocuments(res.data)
      })
       .catch(err =>{
           console.log('Documents Error',err);
       })
    }
    const viewDocument = () =>{
       return (
           <a href={documents.doc_url}
           target="_self"/>
       )
    }
    const deleteDocument = deletedDocument => {
        getDocuments();
        console.log("deletedDocument",deletedDocument)
         let  file_name = deletedDocument.file_name
        axiosWithAuth()
        .delete(`docs/url/${file_name}`)
        .then(res => {
            console.log("document was deleted", res)
            const newDocumentList = documents.filter(document =>{
                return document.file_name !== deletedDocument.id
            })
            setDocuments(newDocumentList);
            window.location.reload(true)

        })
        .catch(err =>{
            console.log(err);
        
        })
    }

    const printDocument = ()=>{
        return console.log("Hello")
    }
       
  const downloadDocument = () => {
      return console.log("Hello")
  }

     return (
         <div>
             <DocumentsContext.Provider value={{
              documents,
              setDocuments,
              deleteDocument,
              viewDocument,
              printDocument,
              downloadDocument
              }}
              >
             {children}
             </DocumentsContext.Provider>
         </div>
     )
}