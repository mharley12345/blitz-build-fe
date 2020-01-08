import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"


import {saveAs} from 'file-saver'
export default function DownloadDocument(props){
    const {downloadStatus,handleDownloadClose,docs_url,DownloadDocument,documents,file_name} =props     
    console.log(docs_url,documents,localStorage.getItem('file_name'))
     
    return (
        <>
        <Modal
        visible={downloadStatus}
        dismiss={handleDownloadClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handleDownloadClose}
        
            downloadItem={file_name}
            text={`${file_name} document`}
            />
        }
        />
        </>
    )
}