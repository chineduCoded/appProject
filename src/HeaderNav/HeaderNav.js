import React from 'react'
import styled from "styled-components"
import { AiOutlineHome, AiOutlineGithub, AiOutlineFileAdd } from "react-icons/ai"
import { BiUpload, BiCog } from "react-icons/bi"
import { Link } from "react-router-dom"
import img from "./HeaderNavImage/logo2.png"


const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={img}/>
                <NavLink>
                    <MyLink>
                        <AiOutlineHome />
                    </MyLink>
                    <MyLink to="/upload">
                        <BiUpload />
                    </MyLink>
                    <MyLink>
                        <AiOutlineGithub />
                    </MyLink>
                    <MyLink>
                        <BiCog />
                    </MyLink>
                    <MyLink to="/card">
                        <AiOutlineFileAdd />
                    </MyLink>
                </NavLink>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Container = styled.div`
width: 100%;
height: 80px;
background-color: #fff;
color: black;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.img`
width: 120px;
height: 60px;
object-fit: contain;
margin: 0 10px;
border-radius: 3px;
`;

const NavLink = styled.div`
display: flex;
`;

const MyLink = styled(Link)`
margin: 0 10px;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.1);
border-radius: 3px;
font-size: 25px;
color: crimson;
transition: all 350ms;

:hover {
    background-color: teal;
    color: #fff;
}
`;
