import React from 'react';
import styled from 'styled-components';
import Routers from "./Routers";
import Header from './views/_shared/header/Header';
import "react-datepicker/dist/react-datepicker.css";

function App () {

    return(
        <Container>
            <Header/>
            <Routers/>
        </Container>
    )
};

const Container = styled.div`

`;

export default App;
