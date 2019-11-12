// CODE IS MESSY, PLEASE READ AT YOUR OWN RISK

import React from 'react'
import styled from 'styled-components'

import ActivityFeed from './ActivityFeed'

function ActivityCard() {
    return (
        <Container>
            <Labels>
                <Title>Activity Feed</Title>
                <Link>See All</Link>
            </Labels>
            <ActivityFeed />
        </Container>
    )
}

export default ActivityCard

const Container = styled.div`
    display: inline-block;
    margin:  0px 0px 47px 37px;
    box-sizing: border-box;
`

const Title = styled.p`
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 7px;
    font-family: 'Roboto Condensed';
    font-weight: 600;
`

const Labels = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 560px; 
`

const Link = styled.p`
    font-size: 12px;
    line-height: 14px;
    color: black;
    font-family: "Roboto Condensed";
    margin-bottom: 7px;
`