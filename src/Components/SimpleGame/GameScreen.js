import React, {useState, useEffect} from "react"
import styled from "styled-components"

const GameScreen = () => {
	const [picker, setPicker] = useState(0)
	const [computer, setComputer] = useState(0)

	const guessValue = (min, max) => {
	  return(
	   setComputer(Math.floor(Math.random()*(max - min) + min))
	  )
	}

	useEffect(() => {
	   const guess = setInterval(() => {
		guessValue(1, 5)
	   }, 5000)

	   return () => clearInterval(guess)
	}, [])

	return(
	<Container>
	  <Wrapper>
	   <NameSection>
		Elijah's  Game 
	   </NameSection>

	   <RowSection>
	    <RowWrapper>
	     <BoxNameSection>
		Player
	     </BoxNameSection>
	     <BoxSection>{picker}</BoxSection>
	     <Number>
		<DisplayBox onClick={() => {
		   setPicker(1)
		   console.log(picker)
		}}>1
		</DisplayBox>

		<DisplayBox onClick={() => {
                   setPicker(2)
                   console.log(picker)
                }}>2
                </DisplayBox>

		<DisplayBox onClick={() => {
                   setPicker(3)
                   console.log(picker)
                }}>3
                </DisplayBox>

		<DisplayBox onClick={() => {
                   setPicker(4)
                   console.log(picker)
                }}>4
                </DisplayBox>

		<DisplayBox onClick={() => {
                   setPicker(5)
                   console.log(picker)
                }}>5
                </DisplayBox>
	     </Number>
	    </RowWrapper>

	    <RowWrapper>
	     <BoxNameSection>
		Computer
	    </BoxNameSection>
	     <BoxSection>
		{computer - 1}
	     </BoxSection>
	     <InitialValue>
		Old Value
	     </InitialValue>
	    </RowWrapper>
	   </RowSection>

	   <ResultSection>
	    <DisplayResult>
		Result:
	    </DisplayResult>
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

export default GameScreen

const InitialValue = styled.div`
  display: flex;
  background-color: tomato;
  color: white;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;

  :hover {
   cursor: pointer;
   transform: scale(1.2);
  }
`;

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

const Number = styled.div`
  display: flex;
`;

const DisplayBox = styled.div`
  margin: 20px 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;

  :hover {
   cursor: pointer;
   transform: scale(1.2);
  }
`;

const BoxSection = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
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

const ResultSection = styled.div`
  font-size: 30px;
  margin-top: 40px;
  color: white;
`;

const RowSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
`;

const NameSection = styled.div`
  font-size: 70px;
  font-weight: bold;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

