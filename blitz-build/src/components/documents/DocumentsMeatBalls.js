import React, { useContext, useState, useEffect, useRef } from 'react';
import PrintDocument from "./PrintDocument";
import DeleteDocument from "./DeleteDocument";
import DownloadDocument from './DownloadDocument'
import PathnameContext from '../../contexts/PathnameContext'
import DocumentsContext from '../../contexts/documents/DocumentsContext'

import {
  TaskI,
  StyledLi,
  MeatBalls,
  DropDown,
  DropP
} from '../../styles/Table/TableStyles';
/** DocumentsMeatBalls.js
 *  This displays the 3 ... in the Documents.js component
 *  onClick of the ... opens a dropdown which displays print,delete,or download 
 *  options
 */
export default function DocumentsMeatballsDrop(props) {
  const { documents, docs_url } = props
  const { handleDelete } = useContext(DocumentsContext)
  
  const refContainer = useRef();
  const [dropStatus, setDropStatus] = useState(false);
  const [printStatus, setPrintStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const [downloadStatus, setDownloadStatus] = useState(false)
  const { pathname, setPathname } = useContext(PathnameContext)
  useEffect(() => {
    setPathname(window.location.pathname);
    document.addEventListener("mousedown", handleClickOutside);

  }, [])
  const handleClickOutside = e => {
    if (refContainer.current && !refContainer.current.contains(e.target)) {
      closeDrop()
    }
  };
  const toggleDrop = e => {
    e.stopPropagation();
    setDropStatus(!dropStatus);
  };

  const closeDrop = e => {
    setDropStatus(false);
  };
  /** TODO 
   *  Download function not working as expected 
   *  hidden from view 
   */
  // const handleDownloadOpen = e => {
  //   e.stopPropagation();
  //   setDownloadStatus(true);
  // };
  const handleDownloadClose = e => {
    setDownloadStatus(false);
    closeDrop();
  };
  const handleDeleteOpen = e => {
    e.stopPropagation();
    setDeleteStatus(true);
  }
  const handleDeleteClose = e => {
    setDeleteStatus(false)
    closeDrop();
  }
  const handlePrintOpen = e => {
    e.stopPropagation();
    setPrintStatus(true);
  };
  const handlePrintClose = e => {
    setPrintStatus(false);
    closeDrop();
  };

  return (
    <>
      <MeatBalls
        className="ion-ios-more"
        onClick={toggleDrop}
        ref={refContainer}
      >
        {dropStatus && (
          <>
            {/*<Geo></Geo>*/}
            <DropDown>
              {/*<Geo></Geo>*/}

              <StyledLi onClick={handleDeleteOpen}>
                <DropP>Delete</DropP>
                <TaskI className="ion-md-trash" />
              </StyledLi>
              {/** Download function not working as expected hidden from
                view */}
              {/* <StyledLi onClick={handleDownloadOpen}>
                <DropP>Download</DropP>
                <TaskI className="ion-md-cloud" />
              </StyledLi> */}
              <StyledLi onClick={handlePrintOpen}>
                <DropP>Print</DropP>
                <TaskI className="ion-md-print" />
              </StyledLi>
            </DropDown>
          </>
        )}
      </MeatBalls>
      <PrintDocument
        documents={documents}
        docs_url={docs_url}
        closeDrop={closeDrop}
        printStatus={printStatus}
        handlePrintClose={handlePrintClose}
      />

      <DownloadDocument
        documents={documents}
        docs_url={docs_url}
        closeDrop={closeDrop}
        downloadStatus={downloadStatus}
        handleDownloadClose={handleDownloadClose}
      />

      <DeleteDocument
        documents={props}
        docs_url={docs_url}
        closeDrop={closeDrop}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
        handleDelete={handleDelete}
      />
    </>
  );
}