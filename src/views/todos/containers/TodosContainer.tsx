import React, {ReactElement, useEffect, useLayoutEffect, useState} from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import {getTodosRest} from "../../../api/getTodosRest";
import TodosList from "../components/TodosList";



function TodosContainer () : any {
    const { isLoading, error, data, isFetching } = useQuery<any, Error>(
        'todos',
        () => getTodosRest(),
        {
            refetchOnWindowFocus : false, //window가 focus 될때 다시 fetching 하지 않는다.
            cacheTime : 5000 //inactive or unused 상태가 됐을 때 5초 후에 데이터를 제거한다.
        }
        );
    if (isLoading) return 'Loading...';
    if (error) return `An error has occurred: + ${error?.message}`;

    const todosData = data.data;
    return(
        <Container>
            <TodosList data={todosData}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default TodosContainer;
