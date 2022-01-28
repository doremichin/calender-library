import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import {ko} from 'date-fns/esm/locale'

function CalenderDateRange () {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    console.log('현재날짜',startDate)
    const formatDate = (date : Date) => {
        const currentDate = date.toLocaleDateString().split('.')
        return `${currentDate[0]}년 ${currentDate[1]}월 ${currentDate[2]}일`
    }
    return(
        <Container>
            <Contents>
                <Title>프로젝트 시작일 : </Title>
                <DatePicker
                    selected={startDate}
                    onChange={(date : Date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale={ko}
                />
            </Contents>
            <Contents>
                <Title>프로젝트 종료일 : </Title>
                <DatePicker
                    selected={endDate}
                    onChange={(date : Date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    locale={ko}
                />
            </Contents>
            <p>
                {formatDate(startDate)} 부터    {formatDate(endDate)} 까지
            </p>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contents = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Title = styled.div`
  flex-shrink: 0;
  margin-right: 10px;
`;

export default CalenderDateRange;
