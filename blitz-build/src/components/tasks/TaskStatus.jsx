import React from 'react'
import styled from 'styled-components'

const StyledStatus = styled.div`
    font-size: 12px;
    text-align: center;
    color: white;
    width: 70px;
    height: 25px;
    border-radius: 25px;
    background: ${props => props.today ? "red" : "white"};
`

export default function TaskStatus({ status }) {
    return (
        <>
            <StyledStatus today >{status}</StyledStatus>
        </>
    )
}
