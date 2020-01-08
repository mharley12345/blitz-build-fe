import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "./confirmPrint"

import DocumentContext from '../../contexts/documents/DocumentsContext'
/** TODO
 *    React Easy Print is installed but not working properly 
 *    The click function works but it will print the entire screen
 *     The objective is to print only the image or document
 *     Need to remove window.print on line 17 and replace it with the 
 *      Print function provided by react-easy-print. 
 *      Docs can be found @ https://www.npmjs.com/package/react-easy-print */
export default function PrintDocument(props){
    const { printDocument } = useContext(DocumentContext);
    const {documents,printStatus,handlePrintClose} =props

    return (
        <>
        <Modal
        visible={printStatus}
        dismiss={handlePrintClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handlePrintClose}
            printFunction={printDocument}
            printItem={documents}
            text={"Click To Print The Document"}
            />
        }
        />
        </>
    )
}