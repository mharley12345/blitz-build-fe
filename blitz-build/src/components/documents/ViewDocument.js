import React, {useContext} from "react"

import Modal from "../global/Modal"


import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function ViewDocument({documents,viewStatus,handleViewClose}){
    const { viewDocument } = useContext(DocumentContext);
    return (
        <>
        <Modal
        visible={viewStatus}
        dismiss={handleViewClose}
        client={"40%"}
        href={viewDocument.doc_url}
        />
   
        </>
    )
}