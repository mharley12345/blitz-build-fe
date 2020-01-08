import React from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

/**TODO
 *  Currently the DownloadDocument component will force a download but 
 *  it downloads a txt file with the correct filename that contains the 
 *  word img.
 */
export default function DownloadDocument(props){
    const {downloadStatus,handleDownloadClose,file_name} =props     
         
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