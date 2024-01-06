import React, { useState } from 'react';
import styled from 'styled-components';
import toggleImg from '../../Assets/img/Icon.png';

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  width: 180px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid gray;
  align-items: center;
  margin-left: 130px;
`;

const ToggleButton = styled.button`
  color: black;
  background-color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const ToggleButtontitle = styled.div`
  width: 100px;
`;
const ToggleButtonImg = styled.img`
  margin-left: 35px;
`;

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
  position: relative;
  z-index: 1;
  padding: 10px;
  cursor: pointer;
  border-right: 1px gray solid;
  border-left: 1px gray solid;
  border-bottom: 1px gray solid;
  background-color: white;
  &:hover {
    background-color: pink;
  }
  cursor: pointer;
`;
////////////////////////////

const DropdownDonateField = ({ onTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [donateField, setDonateField] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setDonateField(item);
    onTypeChange(item);
  };
  const arrayDonateField = {
    universe: '지구촌',
    Elder: '어르신',
    disable: '장애인',
    multiculture: '다문화',
    child: '아동 청소년',
    environment: '환경',
    animal: '동물',
    etc: '기타',
  };

  return (
    <DropdownContainer onClick={toggleDropdown}>
      <ToggleButton>
        <ToggleButtontitle> {arrayDonateField[donateField]}</ToggleButtontitle>
      </ToggleButton>
      <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick('universe')}>
          지구촌
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('Elder')}>
          어르신
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('disable')}>
          장애인
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('multiculture')}>
          다문화
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('child')}>
          아동 청소년
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('environment')}>
          환경
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('animal')}>
          동물
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('etc')}>기타</DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default DropdownDonateField;
