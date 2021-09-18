import React from 'react'
import styled from 'styled-components'
import logo from "../GitHubImage/logo.svg"


const TopHeader = () => {
    return (
        <Container>
            <Header src={logo}/>
            <Links>
                <Link >Overview</Link>
                <Link clr>Release Notes</Link>
                <Link clr>Help</Link>
            </Links>
        </Container>
    )
}

export default TopHeader

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

const Header = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    margin:30px 0;
    object-fit: cover;
    text-align:center;
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Link = styled.div`
    margin: 8px;
    color: ${({ clr }) => (clr ? "purple": "white")};
    font-size: 16px;
    font-weight: 600;
    

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
