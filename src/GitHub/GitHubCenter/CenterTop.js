import React from 'react'
import styled from 'styled-components'
import img from "../GitHubImage/github-desktop.png"

const CenterTop = () => {
    return (
        <Container>
            <ImageWrapper src={img} alt=""/>
        </Container>
    )
}

export default CenterTop

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`;

const ImageWrapper = styled.img`
    width: 90%;
    height: 660px;
    border-radius: 5px;
    
`;
