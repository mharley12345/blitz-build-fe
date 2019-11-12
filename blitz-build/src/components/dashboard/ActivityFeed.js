// CODE IS MESSY, PLEASE READ AT YOUR OWN RISK

import React from 'react'
import styled from 'styled-components'

import Activity from './Activity';

function ActivityFeed() {
    return (
        <Container>
            <Activity />
            <Activity />
            <Activity />
            <Activity />
        </Container>
    )
}

export default ActivityFeed

const Container = styled.div`
    display: inline-block;
    border-left: 1px solid #bfbfbf;
    border-right: 0.5px solid #bfbfbf;
    border-top: 1px solid #bfbfbf;
`