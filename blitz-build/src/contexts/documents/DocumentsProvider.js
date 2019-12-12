import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';

//context
import DocumentsContext from './DocumentsContext'

export default function DocumentsProvider({ children }){
    const [document, setDocuments] = useState([])
    useEffect(() => {
        axiosWithAuth()
     .get('/docs/url')
      .then(res =>{
          console.log("get Documents",res.data)
          setDocuments(res.data)
      })
       .catch(err =>{
           console.log('Documents Error',err);
       })
    }, [])

     return (
         <div>
             <DocumentsContext.Provider value={{document}}>
             {children}
             </DocumentsContext.Provider>
         </div>
     )
}