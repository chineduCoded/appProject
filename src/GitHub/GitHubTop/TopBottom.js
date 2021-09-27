import React from 'react'
import styled from 'styled-components'

const TopBottom = () => {
    return (
        <Container>
            <Heading>GitHub Desktop</Heading>
            <Para>
            Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.
            </Para>
            <Button primary>
            Download for Windows (64bit)
            </Button>
            <ParaSmall>
                <div>Download for <span>macOS</span> or <span>Windows (msi)</span></div>
            </ParaSmall>
            <ParaSmall>
                <div>By downloading, you agree to the <span>Open Source Applications Terms</span>.</div>
            </ParaSmall>
        </Container>
    )
}

export default TopBottom

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`;

const Heading = styled.h1`
    color: #fff;
    font-weight: 300;
    font-size: 48px;
    padding-top: 15px 25px;
    margin: 10px;
`;

const Para = styled.div`
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 650px;
    margin-bottom: 40px;
    
`;

const Button = styled.button`
    width: 332px;
    height: 52px;
    border-radius: 6px;
    padding: 15px 25px;
    font-weight: 600;
    font-size: 18px;
    background-color: ${(props) => (
        props.primary ? "#5e2fa3":"#fff"
    )};
    color: ${(props) => (
        props.primary ? "#fff":"#5e2fa3"
    )};
    border: 1px #150a27;
    margin-bottom: 15px;
    transform: scale(1.0);
    transition: all 350ms;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :hover {
        cursor: pointer;
        background-color: rgb(96,48,167);
        border: 1px #150a27;
        transform: scale(1.01);
    }
`;

const ParaSmall = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    
    span {
        color: #7742CE;
        
    }
    span:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;
