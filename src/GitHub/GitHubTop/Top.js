import React from 'react'
import TopHeader from './TopHeader'
import TopBottom from './TopBottom'
import styled from 'styled-components'



const Top = () => {
    return (
       <Container>
           <Wrapper>
              <TopHeader />
              <TopBottom />
           </Wrapper>
       </Container>
    )
}

export default Top

const Container = styled.div`
    margin-bottom: 80px;
`;

const Wrapper = styled.div`
    color: #fff;
`;