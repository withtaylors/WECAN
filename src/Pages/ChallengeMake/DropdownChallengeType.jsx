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
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ToggleButtontitle = styled.div`
  width: 90px;
`;
const ToggleButtonImg = styled.img`
  margin-left: 110px;
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

const Dropdowntype = ({ onTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setType(item);
    onTypeChange(item);
  };

  return (
    <DropdownContainer>
      <ToggleButton onClick={toggleDropdown}>
        유형
        <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
      </ToggleButton>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick('miracle_morning')}>
          미라클 모닝
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('health')}>
          건강
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('study')}>
          공부
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('etc')}>기타</DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdowntype;
