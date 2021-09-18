import React, { useState,useEffect } from "react"
import styled from "styled-components"

const GameScreen = () => {

  const [picker, setPicker] = useState(0)
  const [computer, setComputer] = useState(0)

  const guessValue = (min, max) => {
    setComputer(Math.floor(Math.random()*(max - min + 1) + min))
  }

  useEffect(() => {
      const guess = setInterval(() => {
              guessValue(1,5)
      }, 5000)

      return () => clearInterval(guess)
  }, [])

  return(
    <Container>
      <Wrapper>
        <NameSection>
          Elijah's game
        </NameSection>

        <RowSection>
          <RowWrapper>
            <BoxNameSection>Player</BoxNameSection>
            <BoxSection>{picker}</BoxSection>
            <Number>
              <DisplayBox onClick={() => {
                setPicker(1)
                console.log(picker)
              }}>1</DisplayBox>
              <DisplayBox onClick={() => {
                setPicker(2)
                console.log(picker)
              }}>2</DisplayBox>
              <DisplayBox onClick={() => {
                setPicker(3)
                console.log(picker)
              }}>3</DisplayBox>
              <DisplayBox onClick={() => {
                setPicker(4)
                console.log(picker)
              }}>4</DisplayBox>
              <DisplayBox onClick={() => {
                setPicker(5)
                console.log(picker)
              }}>5</DisplayBox> 
            </Number>
          </RowWrapper>
          <RowWrapper>
            <BoxNameSection>computer</BoxNameSection>
            <BoxSection></BoxSection>
            <InitialValue>Previous value</InitialValue>
          </RowWrapper>
        </RowSection>

        <ResultSection>
           <DisplayResult>Result</DisplayResult>
           <DisplayResult>
              {picker === computer ? (
                  <Win>You won!</Win>
              ):(
                <Lost>You lost!</Lost>
              )}
           </DisplayResult>
        </ResultSection>
      </Wrapper>
    </Container>
  )
}

export default GameScreen;

const Win = styled.span`
  color: teal;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Lost = styled.span`
  color: red;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const DisplayResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultSection = styled.div`
  font-size: 30px;
  margin-top: 40px;
  align-items: center;
  color: white;
`;

const InitialValue = styled.div`
margin: 20px 10px;
color: white;
width: 80%;
height: 30px;
border-radius: 5px;
background-color: tomato;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: bold;
transform: scale(1.0);
transition: all 350ms;

:hover {
  cursor: pointer;
  transform: scale(1.2);
  background-color: teal;
}
`;

const DisplayBox = styled.div`
  margin: 20px 10px;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  transform: scale(1.0);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
    background-color: tomato;
  }
`;

const Number = styled.div`
  display: flex;
`;

const BoxSection =  styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
`;

const BoxNameSection = styled.div`
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowSection = styled.div`
  display: flex;
  width: 80%;
  margin-top: 60px;
  justify-content: space-around;
`;

const NameSection = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  flex: 100vh;
 

`;

const Container = styled.div`
  background-color: rgb(17,17,17);
  width: 100%;
  height: 100%;
  min-height: 100vh; 
  padding-top: 100px;
  display: flex;
  justify-content: center;

`;