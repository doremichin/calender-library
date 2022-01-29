import React from 'react';
import styled from 'styled-components';
import CalenderDateRange from "../components/CalenderDateRange";
import CalenderWithPortal from "../components/CalenderWithPortal";

function MainContainer () {
    return(
        <Container>
            <CalenderWithPortal/>
            {/*<CalenderDateRange/>*/}
        </Container>
    )
};

const Container = styled.div`

`;

export default MainContainer;
