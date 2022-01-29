import React from 'react';
import styled, {css} from 'styled-components';
import { ITodo } from '../../../../interfaces/todos';

interface Props {
    todo : ITodo
}
interface IsCompletedProps {
    isDone : boolean
}

function TodoItem ({todo} : Props) {
    return(
        <Container>
            <Contents>
                <Title>
                    {todo.title}
                </Title>
            </Contents>
            <IsCompleted isDone={todo.completed}/>
        </Container>
    )
};

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow:  1px 1px 8px #eee;
  margin-bottom: 15px;
  border-radius: 50px;
`;
const Contents = styled.div`
  
`;
const Title = styled.h2`
`;

const IsCompleted = styled.div<IsCompletedProps>`
  ${props => props.isDone ? css`
    background-color: royalblue;
  ` : css`
    background-color: indianred;
  `};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export default TodoItem;
