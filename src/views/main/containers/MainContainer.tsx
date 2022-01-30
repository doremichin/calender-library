import React, {useState} from 'react';
import styled from 'styled-components';
import Daypicker from "../components/Daypicker";

function MainContainer () {

    return(
        <Container>
            <Daypicker/>
        </Container>
    )
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainContainer;
