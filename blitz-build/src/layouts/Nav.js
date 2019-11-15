import React from 'react'
import styled from 'styled-components'

function Nav() {
    return (
        <Container>
            <p>This is nav</p>
        </Container>
    )
}

export default Nav

const Container = styled.div`
  min-width: 296px;
  height: 100vh;
  background: #3f3a36;
`;