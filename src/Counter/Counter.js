import React, { useState, useEffect } from 'react'
import styled from "styled-components"


const Time = () => {
   
    const [count, setCount] = useState(0)

    const [counter, setCounter] = useState(0)

   useEffect(() => {
       const data = setInterval(() => {
           setCounter(er => er + 1)
       }, 1000)

       return () => clearInterval(data)
   }, [])

    return (
        <Container>
            <Wrapper>
                <Counter>{counter}</Counter>
                <Count>{count}</Count>
                <Button onClick={() => {
                    setCount(count + 1)
                }}>Click me</Button>

            </Wrapper>
        </Container>
    )
}

export default Time

const Container = styled.div`
width: 100%;
height: 100vh;

display: flex;
`;

const Wrapper = styled.div`
width: 100%;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Counter = styled.div`
margin-bottom: 30px;
font-weight: bold;
font-size: 25px;
`;

const Count = styled.div`
margin-bottom: 30px;
font-weight: bold;
font-size: 25px
`;

const Button = styled.button`
width: 150px;
height: 50px;
border-radius: 10px;
background-color: crimson;
font-weight: bold;
color: white;
border: 0;
outline: none;
font-size: 25px;
transition: all 350ms;
transform: scale(1);
:hover {
    background-color: teal;
    color: #fff;
    transform: scale(1.03);
}
`;