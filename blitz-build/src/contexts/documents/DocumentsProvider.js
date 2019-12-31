import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';

//context
import DocumentsContext from './DocumentsContext'

export default function DocumentsProvider({ children }){
    const [documents, setDocuments] = useState([])
    const user_id = localStorage.getItem('user_id')
    const file_name = localStorage.getItem('file_name')
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
 
     const handleDelete = (ev) => {
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
              handleDelete
              
            //   printDocument,
            //   downloadDocument
              }}
              >
             {children}
             </DocumentsContext.Provider>
         </div>
     )
}