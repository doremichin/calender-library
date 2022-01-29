import React from 'react';
import styled from 'styled-components';
import TodosContainer from "../views/todos/containers/TodosContainer";

function Todos () {
    return(
        <Container>
            <TodosContainer/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Todos;
