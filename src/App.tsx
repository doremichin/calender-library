import React from 'react';
import styled from 'styled-components';
import Routers from "./Routers";
import Header from './views/_shared/header/Header';
import 'react-day-picker/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import {GlobalStyled} from "./style/GlobalStyled";
import { ReactQueryDevtools } from 'react-query/devtools' // devtools


function App () {

    return(
        <Container>
            <GlobalStyled/>
            <Header/>
            <Routers/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default App;
