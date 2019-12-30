import React,{useContext, useState, useEffect, useRef} from 'react';
import PrintDocument from "./PrintDocument";
import DeleteDocument from "./DeleteDocument";
import ViewDocument from './ViewDocument'
import DownloadDocument from './DownloadDocument'
import PathnameContext from '../../contexts/PathnameContext'
import {
    TaskI,
    StyledLi,
    MeatBalls,
    DropDown,
    DropP
} from '../../styles/Table/TableStyles';

export default function DocumentsMeatballsDrop ({ documents }) {
   const refContainer = useRef();
   const [dropStatus, setDropStatus] = useState(false);
   const [printStatus, setPrintStatus] = useState(false);
   const [deleteStatus, setDeleteStatus] = useState(false);
   const [viewStatus, setViewStatus] = useState(false)
   const [downloadStatus, setDownloadStatus ] =useState(false)
   const { pathname, setPathname } = useContext(PathnameContext) 
     useEffect(() => {
    setPathname(window.location.pathname);
    document.addEventListener("mousedown",handleClickOutside);

     },[])
     const handleClickOutside = e => {
         if (refContainer.current && !refContainer.current.contains(e.target)){
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
          const handleDownloadOpen = e => {
            e.stopPropagation();
            setDownloadStatus(true);
          };
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
      const handleViewOpen = e => {
        e.stopPropagation();
        setViewStatus(true);
      };
      const handleViewClose = e => {
        setViewStatus(false);
        closeDrop();
      };
     return (
         <>
          <MeatBalls
            className = "ion-ios-more"
            onClick={toggleDrop}
            ref={refContainer}
            >
                {dropStatus && (
                    <>
                    {/*<Geo></Geo>*/}
                    <DropDown>
                     {/*<Geo></Geo>*/}
               
                    <StyledLi onClick={handleViewOpen}>
                        <DropP>View</DropP>
                        <TaskI className="ion-md-eye"/>
                    </StyledLi>
                    <StyledLi onClick={handleDownloadOpen}>
                        <DropP>Download</DropP>
                        <TaskI className="ion-md-cloud"/>
                    </StyledLi>
                    <StyledLi onClick={handlePrintOpen}>
                        <DropP>Print</DropP>
                        <TaskI className="ion-md-print"/>
                    </StyledLi>
                    <StyledLi onClick={handleDeleteOpen}>
                        <DropP>Delete</DropP>
                        <TaskI className="ion-md-trash"/>
                    </StyledLi>
                    </DropDown>
                    </>
                )}

            </MeatBalls>
            <PrintDocument
            documents={documents}
            closeDrop={closeDrop}
            printStatus={printStatus}
            handlePrintClose={handlePrintClose}
            />
            <ViewDocument
            documents={documents}
            closeDrop={closeDrop}
            viewStatus={viewStatus}
            handleViewClose={handleViewClose}
            />
            <DownloadDocument 
            documents={documents}
            closeDrop={closeDrop}
            downloadStatus={downloadStatus}
            handleDownloadClose={handleDownloadClose}
            />

            <DeleteDocument
            documents={documents}
            closeDrop={closeDrop}
            deleteStatus={deleteStatus}
            handleDeleteClose={handleDeleteClose}

            />
            </>
     )
}