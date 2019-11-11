import React from 'react'
import styled from 'styled-components'
import TaskStatus from './TaskStatus'
import { Checkbox } from '@material-ui/core'


export default function Task({ task }) {
    return (
        <>
            <div>
                <h1 style={{margin: 0}}> {task.name}</h1>
                <p style={{margin: 0}}>{task.description}</p>
            </div>
            <TaskStatus status={"today"}/>
        </>
    )
} 
