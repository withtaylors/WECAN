import React, { useState } from 'react';
import styled from 'styled-components';
import toggleImg from '../../Assets/img/Icon.png';

const DropdownTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 270px;
  margin-left: 130px;
  gap: 20px;
  position: relative;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  width: 70px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid gray;
  align-items: center;
`;
const DropdownContainer2 = styled.div`
  position: relative;
  display: flex;
  width: 85px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid gray;
  align-items: center;
`;

const ToggleButton = styled.button`
  color: black;
  background-color: white;
  border: none;
  margin-left: 5px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
  }
`;

const ToggleButtontitle = styled.div`
  width: 90px;
`;
const ToggleButtontitleyear = styled.div`
  width: 110px;
`;
const ToggleButtonImg = styled.img``;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 103%;
  width: 100%;
  background-color: #fff;
  color: gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  z-index: 1;
  position: relative;
  padding: 10px;
  cursor: pointer;
  border-right: 1px gray solid;
  border-left: 1px gray solid;
  border-bottom: 1px gray solid;
  background-color: white;
  &:hover {
    color: #dd518c;
  }
`;

////////////////////////////

const DropdownStartDate = ({ onChange }) => {
  const [isfirstOpen, setIsfirstOpen] = useState(false);
  const [issecondOpen, setIssecondOpen] = useState(false);
  const [isthirdOpen, setIsthirdOpen] = useState(false);
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  ///////////////////////////////////////
  const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  /////////////////////////////////////////////////////////
  const formatDate = (year, month, day) => {
    // 날짜를 두 자릿수로 포맷
    const formattedMonth = `${month}`.padStart(2, '0');
    const formattedDay = `${day}`.padStart(2, '0');

    // 문자열로 반환
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const toggleFirstDropdown = () => {
    setIsfirstOpen(!isfirstOpen);
  };
  const toggleSecondDropdown = () => {
    setIssecondOpen(!issecondOpen);
  };
  const toggleThirdDropdown = () => {
    setIsthirdOpen(!isthirdOpen);
  };

  const handleFirstItemClick = (item) => {
    setYear(item);
    const formattedStartDate = formatDate(item, month, day);
    console.log(formattedStartDate);
    onChange(formattedStartDate);
  };

  const handleSecondItemClick = (item) => {
    setMonth(item);
    const formattedStartDate = formatDate(year, item, day);
    console.log(formattedStartDate);
    onChange(formattedStartDate);
  };

  const handleThirdItemClick = (item) => {
    setDay(item);
    const formattedStartDate = formatDate(year, month, item);
    console.log(formattedStartDate);
    onChange(formattedStartDate);
  };

  return (
    <DropdownTotalContainer>
      <DropdownContainer2 onClick={toggleFirstDropdown}>
        <ToggleButton>
          <ToggleButtontitleyear>{year}년</ToggleButtontitleyear>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
        <DropdownMenu isOpen={isfirstOpen}>
          {years.map((number) => (
            <DropdownItem onClick={() => handleFirstItemClick(`${number}`)}>
              {number}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownContainer2>
      <DropdownContainer onClick={toggleSecondDropdown}>
        <ToggleButton>
          <ToggleButtontitle>{month}월</ToggleButtontitle>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
        <DropdownMenu isOpen={issecondOpen}>
          {months.map((number) => (
            <DropdownItem onClick={() => handleSecondItemClick(`${number}`)}>
              {number}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownContainer>
      <DropdownContainer onClick={toggleThirdDropdown}>
        <ToggleButton>
          <ToggleButtontitle>{day}일</ToggleButtontitle>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
        <DropdownMenu isOpen={isthirdOpen}>
          {Array(31)
            .fill()
            .map((_, index) => (
              <DropdownItem
                onClick={() => handleThirdItemClick(`${index + 1}`)}
              >
                {index + 1}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </DropdownContainer>
    </DropdownTotalContainer>
  );
};

export default DropdownStartDate;
