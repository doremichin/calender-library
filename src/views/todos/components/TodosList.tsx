import React from 'react';
import styled from 'styled-components';
import {ITodo} from "../../../interfaces/todos";
import TodoItem from "./item/TodoItem";

interface Props {
    data : ITodo[]
}

function TodosList ({data} : Props) {
    return(
        <Container>
            <Col>
                {data.map((todo, index) => <TodoItem todo={todo} key={index}/>)}
            </Col>
        </Container>
    )
};

const Container = styled.div`

`;
const Col = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  width: 500px;
`;


export default TodosList;
