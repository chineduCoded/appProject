import React from 'react'
import styled from 'styled-components'
import img from "../GitHubImage/file-media.svg"
import img1 from "../GitHubImage/terminal.svg"
import img2 from "../GitHubImage/organization.svg"

const BottomTop = () => {
    return (
        <Container>
            <Wrapper>
                <ContentDiv>
                    <ContainerDiv>
                        <ImageWrapper>
                            <ContentImage src={img}/>
                        </ImageWrapper>
                        
                        <ContentText>
                        Expanded image diff support
                        </ContentText>

                        <ContentPara>
                        Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts.
                        </ContentPara>
                    </ContainerDiv>

                    <ContainerDiv>
                    <ImageWrapper>
                            <ContentImage src={img1}/>
                        </ImageWrapper>

                        <ContentText>
                        Extensive editor & shell integrations
                        </ContentText>

                        <ContentPara>
                        Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work.
                        </ContentPara>
                    </ContainerDiv>

                    <ContainerDiv>
                        <ImageWrapper>
                            <ContentImage src={img2}/>
                        </ImageWrapper>

                        <ContentText>
                        Community supported
                        </ContentText>

                        <ContentPara>
                        GitHub Desktop is open source now! Check out our roadmap, contribute, and help us make collaboration even easier.
                        </ContentPara>
                    </ContainerDiv>
                </ContentDiv>

                <Button chn>See What's Been Built</Button>
            </Wrapper>
        </Container>
    )
}

export default BottomTop

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
`;

const ContainerDiv = styled.div`
    width: 285px;
    height: 175px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    width: 80%;
    height: 306px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

 const Button = styled.button`
    width: 196px;
    height: 51px;
    border-radius: 4.8px;
    border: 1px solid #fff;
    background-color: ${(chn) => (
        chn ? "#24292e":"#fff"
    )};
    color: ${(chn) => (
        chn ? "#fff":"#24292e"
    )};
    font-weight: bold;
    :hover {
        background-color: #fff;
        color: #24292e;
    }
 `;

 const ContentImage =styled.img`
   width: 34px;
   height: 34px;
 `;

 const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: ${(clr) => (
        clr ? "#7b63ab":"#fff"
    )};
    color: ${(clr) => (
        clr ? "#fff":"#7b63ab"
    )};
 `;

 const ContentText = styled.div`
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 8px;
        width: 284px;
        height: 25px;
        display: flex;
        justify-content: center;
 `;

 const ContentPara = styled.div`
        font-size: 14px;
        text-align: center;
 `;
