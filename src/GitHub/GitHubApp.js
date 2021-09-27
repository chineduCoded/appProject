import React from 'react'
import Top from "./GitHubTop/Top"
import CenterBuild from './GitHubCenter/CenterBuild'
import Bottom from "./GitHubBottom/Bottom"
import styled from 'styled-components'

const GitHubApp = () => {
    return (
        <Container>
            <Top />
            <CenterBuild />
            <Bottom />
        </Container>
    )
}

export default GitHubApp

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: linear-gradient(#191c20, #24292e 15%);
    background-image: url(img/bg.svg), linear-gradient(#191c20, #24292e 15%);
    background-position: center 0, 0 0, 0 0;
    background-repeat: no-repeat;
    
`;