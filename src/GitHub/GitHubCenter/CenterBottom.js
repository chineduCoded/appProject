import React from 'react'
import styled from 'styled-components'


const CenterBottom = ({clr, text, img, para}) => {
    return (
        <Container>
            <Wrapper clr={clr}>
                <WrapperImage src={img} alt=""/>
                <WrapperContent>
                    <Heading>
                        {text}
                    </Heading>
                    <Para>
                        {para}
                    </Para>
                </WrapperContent>
            </Wrapper>
        </Container>
    )
}

export default CenterBottom

const Container = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: ${({clr}) => (clr ? "row-reverse":"row")};
    align-items: center;
`;

const WrapperImage = styled.img`
    width: 314px;
    height: 242px;
    object-fit: contain;
`;

const WrapperContent = styled.div`
    width: 400px;
`;

const Heading = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
`;

const Para = styled.div`
    line-height: 21px;
`;
