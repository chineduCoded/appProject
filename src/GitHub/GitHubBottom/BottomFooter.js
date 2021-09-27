import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai"
import styled from 'styled-components'

const BottomFooter = () => {
    return (
        <Container>
            <Line />
            <Links>
                <Link>Terms</Link>
                <Link>Privacy Policy</Link>
                <Link>EULA</Link>
                <Link>Release Notes</Link>
            </Links>
            <Para>
                <AiOutlineCopyright style={{
                   "text-align":"center",
                   "margin-right":"4px",
                   "height":"12px"
                }}/>
            2021 GitHub, Inc. All rights reserved.</Para>
        </Container>
    )
}

export default BottomFooter

const Line = styled.hr`
    color: rgba(0, 0, 0, 0.3); 
    display: flex;
    width: 10%;
    margin-bottom: 50px;
  
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Links = styled.div`
    margin-bottom: 10px;
    display: flex;
`;

const Link = styled.div`
    color: #7b63ab;
    margin: 0 15px;

    :hover{
        text-decoration: underline;
    }
`;
 
const Para = styled.div`
    margin-bottom: 40px;
    color: #586069;
`;
