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
`;
const ToggleButtontitle = styled.div`
  width: 90px;

  display: flex;
  flex-direction: flex-start;
`;
const ToggleButtonImg = styled.img`
  margin-left: 50px;
`;
const ToggleButtonWrapper = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 103%;
  width: 100%;
  background-color: #fff;
  color: blue;
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
    background-color: pink;
  }
`;
////////////////////////////

const DropdownPaymentType = ({ onTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentType, setpaymentType] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item, e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    console.log(`payment_type: ${item}`);
    setpaymentType(item);
    onTypeChange(item);
    setIsOpen(false); // DropdownItem 클릭 후 메뉴 닫기
  };

  return (
    <DropdownContainer>
      <ToggleButtonWrapper>
        <ToggleButton onClick={toggleDropdown}>
          <ToggleButtontitle>기부 방식</ToggleButtontitle>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
      </ToggleButtonWrapper>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={(e) => handleItemClick('personal', e)}>
          개인
        </DropdownItem>
        <DropdownItem onClick={(e) => handleItemClick('team', e)}>
          단체
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default DropdownPaymentType;
