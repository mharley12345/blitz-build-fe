import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';

import Download from '@axetroy/react-download';

//context
import DocumentsContext from './DocumentsContext'

export default function DocumentsProvider({ children }){
    const [documents, setDocuments] = useState([])
  
   /**getDocuments
    * updates state when changes are made to documents
    * 
    */
    useEffect(() => {
        getDocuments(res => setDocuments(res));
        
    }, [])

    /**
     * Calls the BE to get a list of documents per user 
     * and sets them to state
     */
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


 /** handleDelete
  *   Calls the BE delete endpoint which fires off a BE function
  *   that deletes the document from the S3 bucket,removes the record
  *   from the doc_url table and  returns a status of 204.
  *   Then it takes the response and updates state removing the deleted 
  *   document from state.
  *   
  * 
  */
     const handleDelete = (document) => {
         
         console.log(document)
       const file_name = document.file_name
       const user_id = document.user_id
         axiosWithAuth().delete(`/docs/url/${file_name}`,user_id)
  
        .then(res => {
       
            const newDocumentList = documents.filter(d =>{
                return d.id !== document.id
            })
            setDocuments(newDocumentList);
           

        })
        .catch(err =>{
            console.log(err);
        
        })
    }
/** TODO
 *  window.print needs to be replaced with the callback provided by 
 *  react-easy-print package
 */
      const printDocument = () =>{
     
         window.print()
     }
/** TODO 
 *  downloadDocument should save the current document to the users local.
 *  It will save a txt file with the document name as the file name containing 
 *  the word img. This is not what is expected.
 */
  const downloadDocument = props => {

   const file_name = props.file_name

    axiosWithAuth().get(`/docs/download/${file_name}/bucket`)
    .then(data => {
      if (data)       
          
          Download(data,file_name)
    })
  }

     return (
         <div>
             <DocumentsContext.Provider value={{
              documents,
              setDocuments,
              handleDelete,
              downloadDocument,
              
               printDocument
         
              }}
              >
             {children}
             </DocumentsContext.Provider>
         </div>
     )
            }