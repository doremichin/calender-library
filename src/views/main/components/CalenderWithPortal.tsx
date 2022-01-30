import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import {ko} from "date-fns/esm/locale";

function CalenderWithPortal () {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return(
        <Container>
            <StyledPicker
                locale={ko}
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update : any ) => {
                    setDateRange(update);
                }}
                isClearable //날짜 초기화 버튼
                withPortal
            />

        </Container>
    )
};

const Container = styled.div`
  width: 400px;
`;
const StyledPicker = styled(DatePicker)`
  padding: 9px 12px;
  font-size: 16px;
  border: 1px solid transparent;
  box-shadow:  1px 1px 8px #ddd;
  border-radius: 50px;
  }
`;

export default CalenderWithPortal;
