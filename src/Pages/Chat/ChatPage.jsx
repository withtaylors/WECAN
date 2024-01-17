import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { ChatList } from 'react-chat-elements';
import 'react-calendar/dist/Calendar.css';
import 'react-chat-elements/dist/main.css';
import './Styled/ChatPage.module.css';
import chatdata from '../../Api/chat.json'; // JSON 파일을 import
import Calendar2 from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import styled from 'styled-components';
import selectArrow from '../../Assets/search.svg';

const CalendarContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  width: 200px;
  height: 48px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
  padding: 0px 12px;
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-align: start;
  appearance: none;
  background-color: white;
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const CustomCalendar = ({ onChange, value }) => {
  const [nowDate, setNowDate] = useState('날짜');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
  };

  return (
    <CalendarContainer>
      <DropdownButton onClick={handleToggleCalendar}>{nowDate}</DropdownButton>
      <CalendarWrapper isOpen={isOpen}>
        <Calendar2
          onChange={handleDateChange}
          value={value}
          formatDay={(locale, date) => moment(date).format('DD')}
        ></Calendar2>
      </CalendarWrapper>
    </CalendarContainer>
  );
};

export default CustomCalendar;
