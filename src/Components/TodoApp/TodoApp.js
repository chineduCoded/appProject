import React, { useState } from 'react'
import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import { MdDelete } from "react-icons/md"


const TodoApp = () => {


    const markTodo = (id) => {
        const doneTodos = [...todos]
        doneTodos[id].isDone = true
        setTodos(doneTodos)
    }
       
    
    const [todos, setTodos] = useState([
        {
            id:1,
            text:"I love apple!",
            isDone: false
        },
        {
            id:2,
            text:"I read a text book",
            isDone: false
        }
    ])
 
    const [whatTodo, setWhatTodo] = useState("")

    const pushTodo = () => {
        const data = {
            id: todos.length + 1,
            text: whatTodo,
            isDone:false
        }
        setTodos([...todos, data])
        setWhatTodo("")     
    }

    const deleteTodo = (id) => {
        const removetodos = todos.filter((el) => el.id !== id)
        setTodos(removetodos)
    }

    return (
        <Container>
            <Wrapper>
                <NameDiv>
                   Elijah's Todo App
               </NameDiv>
                   <FormDiv>
                        <Input 
                        placeholder="What do you want to do Elijah?"
                        value={whatTodo}
                        onChange={(e) => {
                            setWhatTodo(e.target.value)
                        }} type="text" />
                        <Button primary onClick={pushTodo}>Add Todo</Button>
                   </FormDiv>
    
                    <TodoListWrapper>
                        {todos.map((props) => (
                        <TodoWrapper>
                            <TodoText>
                               {props.text}
                            </TodoText>
                            <Todo>
                                <FaCheck style={{
                                    "color":"teal",
                                    "font-size":"20px",
                                    "cursor":"pointer",
                                    textDecoration: todos.isDone ? "line-through" : ""
                                }} onClick={() => {
                                    markTodo(props.id)
                                    console.log(props.id)
                                }} 
                                /> 
                                <MdDelete style={{
                                    "color":"tomato",
                                    "font-size":"20px",
                                    "cursor":"pointer"
                                }} onClick={() => {
                                    deleteTodo(props.id)
                                    console.log(props.id)
                                }}/>
                            </Todo>
                            
                       </TodoWrapper>
                        ))}
                    </TodoListWrapper>
            </Wrapper>
        </Container>
    )
}

export default TodoApp

const Todo = styled.div`
    display: flex;
    
`;

const TodoText = styled.div`
    font-size: 15px;
    color: black;
    text-decoration: props.isDone ?
    "line-through": ""
    
    
`;

const TodoWrapper = styled.div`
    width: 80%;
    background-color: white;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 0 5px;
    margin-bottom: 10px;
`;

const TodoListWrapper = styled.div`
    color: white;
    margin-top: 50px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Button = styled.button`
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 300px;
    background: ${props => props.primary ? 
        "teal" : "white" };
    color: ${props => props.primary ? 
        "white" : "teal"};
    font-weight: bold;
    font-size: 15px; 
    transform: scale(1.0);
    transition: all 350ms;

    :hover {
        cursor: pointer;
        transform: scale(1.07);
        background: ${props => props.primary ? 
            "tomato" : "white" };
        color: ${props => props.primary ? 
            "white" : "tomato"};
    }
`;

const Input = styled.input`
    padding: 0.5ems;
    height: 40px;
    width: 80%;
    margin: 20px 0;
    color: ${props => props.inputColor || "teal" };
    font-size: 15px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 0 10px;

    :focus {
        outline: none;
        border: 1px solid teal;
        
    }  
    

`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 
`;

const NameDiv = styled.div`
    color: #fff;
    font-weight: bold;
    font-size: 45px;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    justify-content: center;
`;


