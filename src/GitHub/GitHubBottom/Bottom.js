import React from 'react'
import BottomTop from './BottomTop'
import BottomFooter from './BottomFooter'
import styled from 'styled-components'

const Bottom = () => {
    return (
        <Container>
            <Wrapper>
            <BottomTop />
            <BottomFooter />  
            </Wrapper>
        </Container>
    )
}

export default Bottom

const Container = styled.div`
`;
const Wrapper = styled.div`
    color: white;
`;
