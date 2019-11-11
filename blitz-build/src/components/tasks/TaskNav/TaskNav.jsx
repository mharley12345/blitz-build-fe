import React, { useState} from 'react'

//components
import SortBtn from './SortBtn'
import Modal from '../../global/Modal'
import AddTask from '../AddTask'

//styles
import styled from 'styled-components'

const taskNavStyle = styled.div`
    margin-left: 200px;
    width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export default function TaskNav() {
    const [modalStatus, setModalStatus] = useState(false)
    const handleModalOpen = ()=> {
        setModalStatus(true)
      }
    const handleModalClose = () => {
        setModalStatus(false)
    }

    return (
        <taskNavStyle>
            <SortBtn/>
            <button onClick ={ handleModalOpen }>add</button>
            <Modal visible={ modalStatus } dismiss={ handleModalClose } component={ <AddTask closeModal={handleModalClose}/> }/>
        </taskNavStyle>
    )
}
