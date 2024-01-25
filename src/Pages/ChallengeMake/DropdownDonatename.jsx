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
  &:hover {
    background-color: white;
  }
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
  &:hover {
    background-color: white;
  }
`;
const ToggleButtontitle = styled.div`
  width: 100px;
  background-color: white;
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
    color: #dd518c;
  }
  cursor: pointer;
`;
////////////////////////////

const DropdownDonateField = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [donateName, setDonateName] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setDonateName(item);
    onChange(item);
  };
  const arrayDonateName = {
    국경없는이사회: '국경없는이사회',
    국제구조위원회: '국제구조위원회',
    그린피스: '그린피스',
  };

  return (
    <DropdownContainer onClick={toggleDropdown}>
      <ToggleButton>
        <ToggleButtontitle> {arrayDonateName[donateName]}</ToggleButtontitle>
      </ToggleButton>
      <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick('국경없는이사회')}>
          국경없는이사회
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('국제구조위원회')}>
          국제구조위원회
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick('그린피스')}>
          그린피스
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default DropdownDonateField;
