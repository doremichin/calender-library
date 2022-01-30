import React, {useState} from 'react';
import styled from 'styled-components';
import DayPicker, { Modifier } from 'react-day-picker';

function Daypicker () {

    const [select , setSelect] = useState<Modifier>();

    const handleSelect = (day : any) => {
        setSelect(day)
    }

    return(
        <Container>
            <DayPicker onDayClick={handleSelect} selectedDays={select}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Daypicker;
