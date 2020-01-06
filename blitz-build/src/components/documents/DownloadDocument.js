import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DownloadDocument(props){
    const {downloadStatus,handleDownloadClose,docs_url} =props
    const { downloadDocument, documents,} = useContext(DocumentContext);

     
    return (
        <>
        <Modal
        visible={downloadStatus}
        dismiss={handleDownloadClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handleDownloadClose}
             downloadFunction={downloadDocument}
            downloadItem={docs_url}
            text={`${documents} document`}
            />
        }
        />
        </>
    )
}