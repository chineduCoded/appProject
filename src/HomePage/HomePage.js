import React from 'react'
import styled from 'styled-components'
import img from "./HomepageImage/main.png"

const HomePage = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <ContentWrapper>
                        <Header>
                        Best WP Project Bidding Theme – Freelance Marketplace 2021
                        </Header>
                        <Para>
                        The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support! 
                        </Para>
                        <Highlight>
                            Starting from <div><span>$</span>149 </div>
                            <button clr>See Pricing</button>
                        </Highlight>

                        <ButtonWrapper>
                            <Button btn>View Demo</Button>
                            <Button1 btn>Purchase Theme</Button1>
                        </ButtonWrapper>
                    </ContentWrapper>
                </Box>
                <Box>
                    <Image src={img} />
                </Box>
            </Wrapper>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
`;

const Wrapper = styled.div`
padding: 50px 0;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Image =styled.img`
width: 400px;
height: 590px;
padding-top: 60px;
`;

const Box = styled.div`
width: 400px;
height: 500px;
margin: 0 15px;
display: flex;
justify-content: center;
align-items: center;
`;

const ContentWrapper = styled.div`
margin-top: 0;
`;

const Header = styled.div`
margin-bottom: 15px;
font-weight: bold;
font-size: 25px;
`;

const Para = styled.p`
margin-bottom: 5px;
color: #eee;
`;

const Highlight = styled.div`
font-weight: bold;
font-size: 18px;
display: flex;
align-items: center;
margin-bottom: 70px;

span{
    color: lightgreen;
    vertical-align: super;
    font-size: small;
    margin-left: 5px;
}

button{
    height: 20px;
    vertical-align: baseline;
    padding: 0 15px;
    font-size: 10px;
    background-color: ${({clr}) => (
        clr ? "#fff":"#ecc700"
    )};
    color: #111;
    border: 0;
    outline: none;
    border-radius: 5px;
    margin: 0 5px;
    transition: all 350ms;
}
button:hover{
    background-color: yellow;
    cursor: pointer;
}
div{
    color: lightgreen;
   
}
`;

const Button = styled.button`
padding: 10px 20px;
border: 0;
outline: none;
background-color: ${(btn) => (
    btn ? "#007BFF":"#fff"
)};
color: ${(btn) => (
    btn ? "#fff":"#007BFF"
)};
text-transform: uppercase;
border-radius: 5px;
transform: scale(1.0);
transition: all 350ms;

:hover{
    cursor: pointer;
    backgound-color: #007BFF;
    transform: scale(1.01);
}
`;

const Button1 = styled.button`
padding: 10px 20px;
border: 0;
outline: none;
background-color: ${(btn) => (
    btn ? "#007BFF":"#fff"
)};
color: ${(btn) => (
    btn ? "#fff":"#007BFF"
)};
text-transform: uppercase;
border-radius: 5px;
transform: scale(1.0);
transition: all 350ms;
margin: 0 20px;

:hover{
    cursor: pointer;
    backgound-color: #007BFF;
    transform: scale(1.01);
}
`;

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
`;
